import React from "react";

class EtherwaveForm extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <div>
          <form id="etherwave-form">
        <label>If you like my work, please consider sending me a tip!</label>
        <input value="0.01" readOnly/> <span>ETH</span>
        <button>Tip</button>
      </form>
      </div>
    );
  }
}

export default EtherwaveForm;