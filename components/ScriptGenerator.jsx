import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ScriptGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.codeTextRef= React.createRef();
    this.state = {wallet: 'xxx_YOUR_WALLET_ADDRESS_xxx', isCopied: false, setIsCopied: false, codeValue: `<script src="your/path/to/web3.js"></script>
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
        <CopyToClipboard text={this.state.codeValue} onCopy={copyTimer}>
        <div className="copy-area">
          <p>Copy to Clipboard</p>
          <span className={`${this.state.isCopied ? "pulse block" : "hidden"}`}>
            Copied!
          </span>
        </div>
      </CopyToClipboard>
        <div className="athens bg-oxford p-4 rounded-lg">
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