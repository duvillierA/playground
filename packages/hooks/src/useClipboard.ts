export interface HookCopyToClipboard {
  copyToClipboard: (value: string) => Promise<void>
}

export const useClipboard = (): HookCopyToClipboard => {
  const copyToClipboard: HookCopyToClipboard['copyToClipboard'] = async (value) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(value)
    } else {
      document.execCommand('Copy', true, value)
    }
  }
  return { copyToClipboard }
}
