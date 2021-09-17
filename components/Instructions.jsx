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
          <h3 className="py-4 text-2xl font-bold uppercase tracking-widest">getting started</h3>
          <p>You'll need a wallet to test (and receive!) the transactions. This project is currently only set up for the end user to <span className="font-bold">send</span> transactions to you using MetaMask, but you can use any Ethereum address/wallet you prefer to <span className="font-bold">receive</span> the transactions.</p>
          <h3 className="pt-16 pb-2 text-2xl font-bold uppercase tracking-widest">install web3.js</h3>
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
          <h3 className="pt-16 pb-2 text-2xl font-bold uppercase tracking-widest">add your wallet address</h3>
          <ScriptGenerator wallet="{}" />
          <h3 className="pt-16 pb-2 text-2xl font-bold uppercase tracking-widest">add CSS</h3>
          <CssGenerator formType="{}" />
      </div>
    );
  }
}

export default Instructions;