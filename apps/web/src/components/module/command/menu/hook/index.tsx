import { useCallback, useEffect, useMemo, useState } from 'react'

import type { CommandsDocument } from '@/app/api/commands/route'
import { useHotKey } from '@/hooks/hotKeys'

type CommandMenuHookProps = {
  data: CommandsDocument[]
  onSelect: (arg: CommandsDocument) => void
}

export const useCommandMenu = ({
  data = [],
  onSelect
}: CommandMenuHookProps): {
  active?: CommandsDocument | void
} => {
  const [active, setActive] = useState<CommandsDocument | void>(data[0])
  const activeDataIndex = useMemo(() => data.findIndex((a) => a.code === active?.code), [data, active?.code])
  const onArrowUp = useCallback(() => {
    setActive(data[activeDataIndex - 1] || data[0])
  }, [data, activeDataIndex, setActive])
  const onArrowDown = useCallback(() => {
    const nextApp = data[activeDataIndex + 1]
    if (nextApp) {
      setActive(nextApp)
    }
  }, [data, activeDataIndex, setActive])
  const onEnter = useCallback(() => {
    if (active) {
      onSelect(active)
    }
  }, [active, onSelect])
  useEffect(() => {
    setActive(data[0])
  }, [data])
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
