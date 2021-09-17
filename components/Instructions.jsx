import React from "react";

const DownloadWeb3 = props => {
  const downloadFile = () => {
    window.location.href = "https://github.com/ChainSafe/web3.js/raw/v1.2.11/dist/web3.min.js"
  }
  return (
    <button className="py-2 px-4 bg-oxford athens rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75" onClick={downloadFile}>download web3.js</button>
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
          <h3 className="pt-8 pb-2 text-2xl font-bold uppercase tracking-widest">install web3.js</h3>
          <p className="mb-4">Add <a href="">Web3.js</a> to your website or project. The script you will be using below is dependent on the helper utilities included.</p>
          <DownloadWeb3 />
          <h3 className="pt-8 pb-2 text-2xl font-bold uppercase tracking-widest">add your wallet address</h3>
      </div>
    );
  }
}

export default Instructions;