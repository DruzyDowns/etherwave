import React from "react";

class CssGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {wallet: 'xxxxxxxxxxxxxx'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({wallet: event.target.value});
  }

  render() {
    return (
      <form>
        <label>
          wallet:
          <input type="text" onChange={this.handleChange} />
        </label>
        <div className="athens bg-oxford p-4 rounded-lg">
            <pre>
                <code className="">
                    {`<script src="your/path/to/web3.js"></script>
<script id="tipjar-script" src="your/path/to/etherwave.js" data-destinationWallet="${this.state.wallet}"></script>`}
                </code>
            </pre>
        </div> 
      </form>
    );
  }
}

export default CssGenerator;