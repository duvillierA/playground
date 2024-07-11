import { useCallback, useEffect, useMemo, useState } from 'react'

import type { ApplicationDocument } from '@/app/api/applications/route'
import type { KbdProps } from '@/components/ui/kbd'
import { useHotKey } from '@/hooks/hotKeys'

type ApplicationMenuHookProps = {
  applications: ApplicationDocument[]
  onSelect: (arg: ApplicationDocument) => void
}

type ApplicationsMenuListHook = Record<
  ApplicationDocument['category'],
  (ApplicationDocument & {
    kbd: {
      value: NonNullable<KbdProps['value']>
      combo: NonNullable<KbdProps['combo']>
    }
  })[]
>
const useApplicationsMenuList = (applications: ApplicationMenuHookProps['applications']): ApplicationsMenuListHook => {
  const result = useMemo(() => {
    const usedCombos = new Set<string>()
    const additionalComboKeys = ['shift', 'ctrl'] satisfies KbdProps['combo']
    return applications.reduce<ApplicationsMenuListHook>((acc, curr) => {
      let letter = ''
      const combo: KbdProps['combo'] = ['alt']
      for (let i = 0; i < curr.code.length; i += 1) {
        const char = curr.code[i]
        if (!usedCombos.has(`${combo[0]}+${char}`)) {
          letter = char
          usedCombos.add(`${combo[0]}+${char}`)
          break
        }
      }

      if (!letter) {
        letter = curr.code.charAt(0)
        for (const comboKey of additionalComboKeys) {
          const potentialCombo = `alt+${comboKey}+${letter}`
          if (!usedCombos.has(potentialCombo)) {
            combo.push(comboKey)
            usedCombos.add(potentialCombo)
            break
          }
        }
      }
      acc[curr.category] = (acc[curr.category] ?? []).concat({
        ...curr,
        kbd: {
          value: letter.toUpperCase() as NonNullable<KbdProps['value']>,
          combo
        }
      })
      return acc
    }, {} as ApplicationsMenuListHook)
  }, [applications])
  return result
}

export const useApplicationMenu = ({
  applications = [],
  onSelect
}: ApplicationMenuHookProps): {
  active?: ApplicationDocument | void
  list: ApplicationsMenuListHook
} => {
  const list = useApplicationsMenuList(applications)
  const [active, setActive] = useState<ApplicationDocument | void>(applications[0])
  const activeApplicationIndex = useMemo(() => applications.findIndex((a) => a.code === active?.code), [applications, active?.code])
  const onArrowUp = useCallback(() => {
    setActive(applications[activeApplicationIndex - 1] || applications[0])
  }, [applications, activeApplicationIndex, setActive])
  const onArrowDown = useCallback(() => {
    const nextApp = applications[activeApplicationIndex + 1]
    if (nextApp) {
      setActive(nextApp)
    }
  }, [applications, activeApplicationIndex, setActive])
  const onEnter = useCallback(() => {
    if (active) {
      onSelect(active)
    }
  }, [active, onSelect])
  useEffect(() => {
    setActive(applications[0])
  }, [applications])
  useHotKey({
    key: 'ArrowUp',
    combo: [],
    onKeyDown: onArrowUp
  })
  useHotKey({
    key: 'ArrowDown',
    combo: [],
    onKeyDown: onArrowDown
  })
  useHotKey({
    key: 'Enter',
    combo: [],
    onKeyDown: onEnter
  })
  return {
    active,
    list
  }
}
