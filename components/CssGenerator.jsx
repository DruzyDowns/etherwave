import React from "react";

function ClassicForm(props) {
  return <pre>{`classic`}</pre>;
}

function WowForm(props) {
  return <pre>{`wow`}</pre>;
}

function FormCodeStyling(props) {
  const isClassic = props.isClassic;
  if (isClassic) {
    return <ClassicForm />;
  }
  return <WowForm />;
}

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
    return (
      <form>
        <label>
          style:
          <input type="text" onChange={this.handleStylingChange} />
        </label>
        <div className="athens bg-oxford p-4 rounded-lg">
            <FormCodeStyling isClassic={false} />
        </div> 
      </form>
    );
  }
}

export default CssGenerator;