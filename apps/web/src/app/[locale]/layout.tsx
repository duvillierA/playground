import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import type { PropsWithChildren } from 'react'

import type { PageProps } from '@/app/_interfaces/page'
import { RootLayoutToaster } from '@/app/[locale]/layout.client'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Common.meta')

  return {
    title: t('title'),
    description: t('description')
  }
}

const RootLayout: React.FC<PropsWithChildren<PageProps>> = async ({ children, params }) => {
  const messages = await getMessages({
    locale: params.locale
  })
  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        <RootLayoutToaster />
      </body>
    </html>
  )
}

export default RootLayout
