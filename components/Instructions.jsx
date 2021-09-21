import React from "react";
import ScriptGenerator from '../components/ScriptGenerator'
import CssGenerator from '../components/CssGenerator'

const DownloadWeb3 = props => {
  const newTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}
  return (
    <button className="py-2 px-4 bg-oxford athens rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 uppercase tracking-widest" onClick={() => newTab('https://github.com/ChainSafe/web3.js/blob/v1.5.2/dist/web3.min.js')}>download web3.js</button>
  )
}
const DownloadEtherwave = props => {
  const newTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}
  return (
    <button className="py-2 px-4 bg-oxford athens rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 uppercase tracking-widest" onClick={() => newTab('https://github.com/DruzyDowns/etherwave/blob/main/dist/etherwave.js')} onClick={()=> window.open("https://github.com/DruzyDowns/etherwave/blob/main/dist/etherwave.js", "_blank")}>download Etherwave.js</button>
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
          <p className="mb-4">This project is meant to provide a quick, relatively painless setup for creative types who would like to start accepting ETH donations/tips on their websites. You can preview how the script works (and donate!) with the functional version in the bottom right of this page. Essentially it just takes the guesswork out of writing the JavaScript which talks to the MetaMask wallets and API. This is a work in progress, and I plan on adding more features to make it even easier to empower creatives with tools to work with the Ethereum protocol.</p>
          <h3 className="py-4 text-2xl font-bold uppercase tracking-widest">getting started accepting eth transactions</h3>
          <p>You'll need a wallet to test (and receive!) the transactions. This project is currently only set up for the end user to <span className="font-bold">send</span> transactions to you using MetaMask, but you can use any Ethereum address/wallet you prefer to <span className="font-bold">receive</span> the transactions.</p>
          <h3 className="pt-16 pb-2 text-2xl font-bold uppercase tracking-widest">add web3.js</h3>
          <p className="mb-4">Add <a className="underline" href="https://web3js.readthedocs.io/en/v1.5.2/index.html">Web3.js</a> to your website or project. The script you will be using below is dependent on the helper utilities included in Web3.js. I have included the CDN link for you in the next setup steps below, but if you would rather install it manually you can do so. Otherwise skip this step and use the CDN script included later. You can learn more about Web3.js by reading the <a className="underline" href="https://web3js.readthedocs.io/en/v1.5.2/getting-started.html">docs here</a>.</p>
          <p className="mb-4">Download and install manually:</p>
          <DownloadWeb3 />
          <p className="my-4">OR use CDN/npm/yarn:</p>
          <div className="athens bg-oxford p-4 rounded-lg">
            <pre>
                <code className="">
                    {`CDN:
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>

npm: npm install web3

yarn: yarn add web3`}
                </code>
            </pre>
        </div>
        <h3 className="pt-16 pb-2 text-2xl font-bold uppercase tracking-widest">add etherwave.js</h3>
          <p className="mb-4">Add etherwave.js to your website or project. Grab it from here, then add your wallet address to the script in the next step.</p>
          <DownloadEtherwave />
          <h3 className="pt-16 pb-2 text-2xl font-bold uppercase tracking-widest">add an empty div to your project with an ID of <br/> <span className="font-bold bg-gray-200 px-1 rounded-sm">etherwave-form-container</span></h3> 
          <p className="mb-4">Add the form container to your site where you would like the static form to appear. Etherwave.js will automatically populate the form inside the element with the ID of <br/> <span className="font-bold bg-gray-200 px-1 rounded-sm">etherwave-form-container</span>. If you are using the popup modal CSS you can place the etherwave form container div just before the script tags in the following step.</p>
          <div className="athens bg-oxford p-4 rounded-lg relative">
            <pre>
                <code ref={this.codeTextRef} className="code-text">
                    {`<div id="etherwave-form-container"></div>`}
                </code>
            </pre>
        </div>
          <h3 className="pt-16 pb-2 text-2xl font-bold uppercase tracking-widest">use your wallet address when you call the script</h3>
          <p className="mb-4">Add your <span className="font-bold">receiving</span> wallet address to the <span className="font-bold bg-gray-200 px-1 rounded-sm">data-destinationWallet</span> attribute of the script tag. Double, triple, quadruple check that this is the wallet address you want people to send ETH to. If you put the wrong address in here you won't receive anything! </p> 
          <ScriptGenerator wallet="{}" />
          <h3 className="pt-16 pb-2 text-2xl font-bold uppercase tracking-widest">slap on some CSS to make it pretty</h3>
          <p className="mb-4">Choose either the static form, or the fixed position popup form CSS, and add it to your project.</p>
          <p className="mb-4">If you are the designer type, or if you are going for a real web-of-the-90s unstyled look, just grab the selectors from the CSS below and have fun!</p>
          <CssGenerator />
          <h3 className="pt-16 pb-2 text-2xl font-bold uppercase tracking-widest">You're ready to go!</h3>
          <p className="mb-4">I highly recommend you give this a thorough testing with some fake ETH on a <a className="underline" href="https://faucet.ropsten.be/" target="_blank" rel="noopener noreferrer">test network</a> before you go live, and as with all things crypto — please do your research. Ultimately you are the only one who can be responsible for the outcome of your journey.</p>
          <p className="mb-4">If you like this project, find success with your donations, or just want to support my work, you can do so with my Etherwave widget right here on this page (see what I did there?).</p>
          <p className="mb-4">I hope you can use this tool to get compensated for your amazing work, you deserve it, and  know you're gonna make it!</p>
      </div>
    );
  }
}

export default Instructions;