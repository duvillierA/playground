import { useCallback, useEffect, useMemo, useState } from 'react'

import type { ApplicationDocument } from '@/app/api/applications/route'
import { useStore } from '@/components/common/store'
import type { KbdProps } from '@/components/ui/kbd'
import { useHotKey } from '@/hooks/hotKeys'

type ApplicationMenuHookProps = {
  applications: ApplicationDocument[]
  onSelect: (arg: ApplicationDocument) => void
}

export const useApplicationMenu = ({
  applications = [],
  onSelect
}: ApplicationMenuHookProps): {
  active?: ApplicationDocument | void
} => {
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
    active
  }
}

type ReducedObject = Record<
  ApplicationDocument['code'],
  {
    value: KbdProps['value']
    combo: KbdProps['combo']
  }
>
export const useApplicationsKbd = (): ReducedObject => {
  const { applications } = useStore()
  const result = useMemo(() => {
    const usedCombos = new Set<string>()
    const additionalComboKeys = ['shift', 'ctrl'] satisfies KbdProps['combo']
    return applications.reduce<ReducedObject>((acc, { code }) => {
      let letter = ''
      const combo: KbdProps['combo'] = ['alt']
      for (let i = 0; i < code.length; i += 1) {
        const char = code[i]
        if (!usedCombos.has(`${combo[0]}+${char}`)) {
          letter = char
          usedCombos.add(`${combo[0]}+${char}`)
          break
        }
      }

      if (!letter) {
        letter = code.charAt(0)
        for (const comboKey of additionalComboKeys) {
          const potentialCombo = `alt+${comboKey}+${letter}`
          if (!usedCombos.has(potentialCombo)) {
            combo.push(comboKey)
            usedCombos.add(potentialCombo)
            break
          }
        }
      }

      acc[code] = {
        value: letter.toUpperCase() as KbdProps['value'],
        combo
      }
      return acc
    }, {} as ReducedObject)
  }, [applications])
  return result
}
