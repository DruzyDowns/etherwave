import React from "react";

class EtherwaveForm extends React.Component {
  constructor(props) {
    super(props); 
    this.handleBadgeClick = this.handleBadgeClick.bind(this);
    this.state = {menuIsOpen: false};
  }

  handleBadgeClick() {
    this.state.menuIsOpen = !this.state.menuIsOpen;
    console.log(this.state.menuIsOpen);
  }

  render() {
      const menuIsOpen = this.state.menuIsOpen;
    return (
      <div>
          <div id="etherwave-icon" className="z-10"></div>
          <div id="etherwave-badge" className="z-10" onClick={this.handleBadgeClick}></div>
          <form id="etherwave-form" className={ menuIsOpen ? "is-open" : "hidden"}>
        <label>I am a freelance developer &amp; designer, on a mission to make it easier for creative types to use web3.0 technology. If you like this project, a small donation will help me continue this work!</label><input value="0.01" readOnly /><span>ETH</span><button>Tip</button>
      </form>
      </div>
    );
  }
}

export default EtherwaveForm;