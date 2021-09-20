import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ClipboardCopyIcon } from '@heroicons/react/outline'
import { ClipboardCheckIcon } from '@heroicons/react/outline'

class ScriptGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.codeTextRef= React.createRef();
    this.state = {wallet: 'xxx_YOUR_WALLET_ADDRESS_xxx', isCopied: false, codeValue: `<script src="your/path/to/web3.js"></script>
<script id="tipjar-script" src="your/path/to/etherwave.js" data-destinationWallet="$xxx_YOUR_WALLET_ADDRESS_xxx"></script>`};
  }

  render() {
    const updateWallet = (event) => this.setState({
      wallet: event.target.value
    }, () => {
      this.setState({codeValue: `<script src="your/path/to/web3.js"></script>
<script id="tipjar-script" src="your/path/to/etherwave.js" data-destinationWallet="${this.state.wallet}"></script>`})
    });

    const copyTimer = () => {
      this.setState({isCopied: true}),
    setTimeout(() => {
      this.setState({isCopied: false});
    }, 3000);
  }
    return (
      <form>
        <label>
          wallet:
          <input type="text" onChange={updateWallet} onPaste={updateWallet} />
        </label>
        <p>{this.state.codeValue}</p>
        
        <div className="athens bg-oxford p-4 rounded-lg relative">
          <CopyToClipboard className="absolute top-2 right-2" text={this.state.codeValue} onCopy={copyTimer}>
        <div className="copy-area">
          <div className="flex items-center">
            <ClipboardCopyIcon className={`h-8 w-8 stroke-1 oxford rounded-sm bg-athens cursor-pointer ${this.state.isCopied ? "hidden" : "block"}`}/>
            <ClipboardCheckIcon className={`h-8 w-8 stroke-1 text-green-500 rounded-sm bg-athens cursor-pointer ${this.state.isCopied ? "block pulse" : "hidden"}`}/>
          </div>
        </div>
      </CopyToClipboard>
            <pre>
                <code ref={this.codeTextRef} className="code-text">
                    {`<script src="your/path/to/web3.js"></script>
<script id="tipjar-script" src="your/path/to/etherwave.js" data-destinationWallet="${this.state.wallet}"></script>`}
                </code>
            </pre>
        </div> 
      </form>
    );
  }
}

export default ScriptGenerator;