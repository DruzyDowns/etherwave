import React, { useState } from 'react';

class EtherwaveForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      menuIsOpen: false
    };
    this.state = {menuIsOpen: false};
  }

  render() {
      const menuIsOpen = this.state.menuIsOpen;
    return (
      <div>
          <div id="etherwave-icon" className="z-10"></div>
          <div id="etherwave-badge" className="z-10" onClick={() => this.setState({ menuIsOpen: !this.state.menuIsOpen })}></div>
          <form id="etherwave-form" className={ menuIsOpen ? "is-open" : ""}>
        <label>I am a freelance developer &amp; designer, on a mission to make it easier for creative types to use web3.0 technology. If you like this project, a small donation will help me continue this work!</label><input value="0.01" readOnly /><span>ETH</span><button>Tip</button>
      </form>
      </div>
    );
  }
}

export default EtherwaveForm;