import React from "react";
import ScriptGenerator from '../components/ScriptGenerator'
import CssGenerator from '../components/CssGenerator'

const DownloadWeb3 = props => {
  const downloadFile = () => {
    window.location.href = "https://github.com/ChainSafe/web3.js/raw/v1.2.11/dist/web3.min.js"
  }
  return (
    <button className="py-2 px-4 bg-oxford athens rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 uppercase tracking-widest" onClick={downloadFile}>download web3.js</button>
  )
}
const DownloadEtherwave = props => {
  const downloadEtherFile = () => {
    window.location.href = "https://github.com/druzydowns/etherwave/raw/v1.2.11/dist/etherwave.js"
  }
  return (
    <button className="py-2 px-4 bg-oxford athens rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 uppercase tracking-widest" onClick={downloadEtherFile}>download Etherwave.js</button>
  )
}

class Instructions extends React.Component {
  constructor(props) {
    super(props); 
  }

  handleChange(event) {
    //this.setState({wallet: event.target.value});
  }

  render() {
    return (
      <div>
          <h3 className="py-4 text-2xl font-bold uppercase tracking-widest">getting started accepting eth transactions</h3>
          <p>You'll need a wallet to test (and receive!) the transactions. This project is currently only set up for the end user to <span className="font-bold">send</span> transactions to you using MetaMask, but you can use any Ethereum address/wallet you prefer to <span className="font-bold">receive</span> the transactions.</p>
          <h3 className="pt-16 pb-2 text-2xl font-bold uppercase tracking-widest">add web3.js</h3>
          <p className="mb-4">Add <a className="underline" href="https://web3js.readthedocs.io/en/v1.5.2/index.html">Web3.js</a> to your website or project. The script you will be using below is dependent on the helper utilities included in Web3.js. You can learn more about it by reading the <a className="underline" href="https://web3js.readthedocs.io/en/v1.5.2/getting-started.html">docs here</a></p>
          <p className="mb-4">Download and install manually:</p>
          <DownloadWeb3 />
          <p className="my-4">OR use npm/yarn:</p>
          <div className="athens bg-oxford p-4 rounded-lg">
            <pre>
                <code className="">
                    {`npm: npm install web3

yarn: yarn add web3`}
                </code>
            </pre>
        </div>
        <h3 className="pt-16 pb-2 text-2xl font-bold uppercase tracking-widest">add etherwave.js</h3>
          <p className="mb-4">Add etherwave.js to your website or project. Grab it from here, then add your wallet address to the script in the next step.</p>
          <DownloadEtherwave /> 
          <h3 className="pt-16 pb-2 text-2xl font-bold uppercase tracking-widest">use your wallet address when you call the script</h3>
          <p className="mb-4">Add your <span className="font-bold">receiving</span> wallet address to the <span className="font-bold bg-gray-200 px-1 rounded-sm">data-destinationWallet</span> attribute of the script tag. Double, triple, quadruple check that this is the wallet address you want eth sent to. If you put the wrong address in here you won't receive anything! </p> 
          <ScriptGenerator wallet="{}" />
          <h3 className="pt-16 pb-2 text-2xl font-bold uppercase tracking-widest">slap on some CSS to make it pretty (and work)</h3>
          <CssGenerator formType="{}" />
      </div>
    );
  }
}

export default Instructions;