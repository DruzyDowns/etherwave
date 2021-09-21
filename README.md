# Etherwave
This project is meant to provide a quick, relatively painless setup for creative types to start accepting ETH donations/tips on their websites. You can preview how the script works (and donate!) with the functional version on the example page. Essentially it just takes the guesswork out of writing the JavaScript which talks to the MetaMask wallets and API. This is a work in progress, and I plan on adding more features to make it even easier to empower creatives with tools to work with the Ethereum protocol.

## Getting started accepting eth transactions
You'll need a wallet to test (and receive!) the transactions. This project is currently only set up for the end user to **send** transactions to you using MetaMask, but you can use any Ethereum address/wallet you prefer to **receive** the transactions.

## Adding Web3.js to your website or project.
  The script you will be using below is dependent on the helper utilities included in Web3.js. I have included the CDN link for you in the next setup steps below, but if you would rather install it manually you can do so. You can learn more about Web3.js by reading the [docs here](https://web3js.readthedocs.io/en/v1.5.2/getting-started.html).

```
CDN:
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>

npm: npm install web3

yarn: yarn add web3
```
  
## Add etherwave.js
Add etherwave.js to your website or project. Grab it from the dist folder of this project, then add your wallet address when you call the script in the next steps.

## Add an empty div to your project with an ID of `etherwave-form-container`
Add the form container to your site where you would like the static form to appear. Etherwave.js will automatically populate the form inside the element with the ID of `etherwave-form-container`
```
<div id="etherwave-form-container"></div>
```
If you are using the popup modal CSS you can place the etherwave form container div just before the script tags in the following step.

## use your wallet address when you call the script

Add your **receiving** wallet address to the `data-destinationWallet` attribute of the script tag. Double, triple, quadruple check that this is the wallet address you want people to send ETH to. If you put the wrong address in here you won't receive anything!
```
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
<script id="etherwave-script" src="your/path/to/etherwave.js" data-destinationWallet="$xxx_YOUR_WALLET_ADDRESS_xxx"></script>
```

## Slap on some CSS to make it pretty</h3>
Choose either the static form, or the fixed position popup form CSS from the dist folder of this project, and add it to your project.
If you are going for a web-of-the-90s, unstyled look, just leave this CSS out. Or, if you are the designer type, just grab the selectors from the CSS and have fun!

## You're ready to go!
I highly recommend you give this a thorough testing with some fake ETH on a [test network like Ropsten](https://faucet.ropsten.be/) before you go live, and as with all things crypto — please do your research. Ultimately you are the only one who can be responsible for the outcome of your journey.
If you like this project, find success with your donations, or just want to support my work, you can do so with my Etherwave widget on the example page (whoah this is meta).
I hope you can use this tool to get compensated for your amazing work, you deserve it, and  know you're gonna make it!


Coming soon / to-do
* Node package & React components
* More refined styling and interactive customizable form builder
* Support more wallets besides MetaMask
