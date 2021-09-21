import Head from 'next/head'
import Logo from '../components/Logo'
import Instructions from '../components/Instructions'
import EtherwaveForm from '../components/EtherwaveForm';

export default function Home() {
  return (
    <div className="w-full bg-athens oxford garamond text-lg">
      <Head>
        <title>etherwave</title>
        <link rel="stylesheet" href="https://use.typekit.net/plw3vwv.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full pt-4 pb-12 lg:px-64">
        <div className="w-full pb-12">
          <Logo />
        </div>
        <p className="text-3xl">Ethereum tipjar/donation transactions for  to your website.</p>
      </header>
      
      <main className="lg:px-64 text-xl">
        <Instructions />
        
      </main>
      <footer className="bg-white flex items-center justify-center w-full h-24 border-t">
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
      <EtherwaveForm menuIsOpen={false} />
      <script src="/web3.js"></script>
      <script id="etherwave-script" src="/etherwave.js" data-destinationwallet="0x1D6b509a0df53cE05c35EC07Ede7f97E3c603c4a"></script>
    </div>
  )
}
