import { Button } from '@repo/ui'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import { TypographyDemo } from '@/components/typography'

const now = new Date().toISOString()

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('IndexPage.meta')

  return {
    title: t('title'),
    description: t('description')
  }
}
const HomePage: React.FC = () => {
  const t = useTranslations('IndexPage')
  return (
    <div className="container mx-auto">
      <header className=" bg-white">
        <h1 className="font-semibold">{t('title')}</h1>
      </header>
      <main className="">
        <section>
          <TypographyDemo />
        </section>
        <section className="bg-white">
          <Button>Example button</Button>
        </section>
      </main>
      <footer className=" bg-white">
        <p className="text-right">Playground {now}</p>
      </footer>
    </div>
  )
}

export default HomePage
