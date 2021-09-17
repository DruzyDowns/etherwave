import React from "react";

class Generator extends React.Component {
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
        <pre>
            <code>{this.state.wallet}</code>
        </pre>
      </form>
    );
  }
}

export default Generator;