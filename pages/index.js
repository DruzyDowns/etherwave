import Head from 'next/head'
import Prism from "prismjs";
import Logo from '../components/Logo'
import ScriptGenerator from '../components/ScriptGenerator'
import CssGenerator from '../components/CssGenerator'
import Instructions from '../components/Instructions'
import EtherwaveForm from '../components/EtherwaveForm';

export default function Home() {
  return (
    <div className="w-full bg-athens garamond text-lg">
      <Head>
        <title>etherwave</title>
        <link rel="stylesheet" href="https://use.typekit.net/plw3vwv.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full pt-4 pb-12 lg:px-64">
        <div className="w-full pb-12">
          <Logo />
        </div>
        <p className="text-2xl">Magically add Ethereum tipjar/donation transactions for MetaMask to your website.</p>
      </header>
      
      <main className="lg:px-64">
        <Instructions />
        <ScriptGenerator wallet="{}" />
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
      <EtherwaveForm />
      <script src="/web3.js"></script>
      <script id="etherwave-script" src="/etherwave.js" data-destinationwallet="0x6BD1C9d673B14E9D6d7C1Cab1dCD921Ab7bD002d"></script>
    </div>
  )
}
