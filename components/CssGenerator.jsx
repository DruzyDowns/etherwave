import React from "react";

class CssGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formStyling: 'classic'};
    this.handleStylingChange = this.handleStylingChange.bind(this);
  }

  handleStylingChange(event) {
    this.setState({formStyling: event.target.value});
  }

  render() {
    let FormStyleCode;

    if (this.state.formStyling == "classic") {
      FormStyleCode = <pre>{`classic`}</pre>;
    } else {
      FormStyleCode = <pre>{`wow`}</pre>;
    }

    return (
      <form>
        <label>
          style:
          <input type="text" onChange={this.handleStylingChange} />
        </label>
        <div className="athens bg-oxford p-4 rounded-lg">
            {FormStyleCode}  
        </div> 
      </form>
    );
  }
}

export default CssGenerator;