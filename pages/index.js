import Head from 'next/head'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <div className="w-full bg-athens">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full flex justify-center p-4">
        <div className="lg:w-1/2">
          <Logo />
        </div>
      </header>

      <main className="">
        
      </main>

      <footer className="bg-white flex items-center justify-center w-full h-24 border-t shadow-md">
        <a
          className="flex items-center justify-center"
          href="https://ethereum.org/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/eth.gif" alt="Ethereum Logo" className="h-16 ml-2" />
        </a>
      </footer>
    </div>
  )
}
