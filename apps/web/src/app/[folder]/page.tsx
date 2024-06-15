import { Button } from '@repo/ui'
import type { Metadata } from 'next'

import type { Page } from '@/app/_interfaces/page'
import { TypographyDemo } from '@/components/typography'

export const metadata: Metadata = {
  description: 'Home page description',
  title: 'Home playground'
}

const HomePage: React.FC<Page> = ({ params }) => {
  return (
    <div className="container mx-auto">
      <header className=" bg-white">
        <h1 className="font-semibold">Home page {params.folder}</h1>
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
        <p className="text-right">Playground {new Date().toISOString()}</p>
      </footer>
    </div>
  )
}

export default HomePage
