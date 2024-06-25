import { useCallback, useEffect, useMemo, useState } from 'react'

import type { ApplicationDocument } from '@/app/api/applications/route'
import { useHotKey } from '@/hooks/hotKeys'

type ApplicationMenuHookProps = {
  applications: ApplicationDocument[]
  onSelect: (arg: ApplicationDocument) => void
}

export const useApplicationMenu = ({
  applications = [],
  onSelect
}: ApplicationMenuHookProps): {
  active: ApplicationDocument
} => {
  const [active, setActive] = useState<ApplicationDocument>(applications[0])
  const activeApplicationIndex = useMemo(() => applications.findIndex((a) => a.code === active?.code), [applications, active.code])
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
    onSelect(active)
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
