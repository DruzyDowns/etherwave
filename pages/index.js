import Head from 'next/head'
import Prism from "prismjs";
import Logo from '../components/Logo'
import Generator from '../components/ScriptGenerator'

export default function Home() {
  return (
    <div className="w-full bg-athens garamond">
      <Head>
        <title>etherwave</title>
        <link rel="stylesheet" href="https://use.typekit.net/plw3vwv.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full flex justify-center pt-4 pb-12 lg:px-64">
        <div className="w-full">
          <Logo />
        </div>
      </header>

      <main className="lg:px-64">
        <p className="text-2xl">Magically add simple tipjar/donation Ethereum transactions to your website.</p>
        <Generator wallet="{}" />
        
      </main>

      <footer className="bg-white flex items-center justify-center w-full h-24 border-t shadow-md">
        <a
          className="flex items-center justify-center"
          href="https://ethereum.org/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made possible by{' '}
          <img src="/eth.gif" alt="Ethereum Logo" className="h-16 w-auto" />
        </a>
      </footer>
    </div>
  )
}
