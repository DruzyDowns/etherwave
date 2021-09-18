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

class CssRedux extends React.Component {
  constructor(props) {
    super(props);
    this.handleClassicClick = this.handleClassicClick.bind(this);
    this.handleWowClick = this.handleWowClick.bind(this);
    this.state = {isClassic: true};
  }

  handleClassicClick() {
    this.setState({isClassic: true});
  }

  handleWowClick() {
    this.setState({isClassic: false});
  }

  render() {
      const isClassic = this.state.isClassic;
    return (
        <div>
            <div onClick={this.handleClassicClick}>classic</div>
            <div onClick={this.handleWowClick}>wow</div>
            <div className="athens bg-oxford p-4 rounded-lg">
                <FormCodeStyling isClassic={isClassic} />
            </div> 
        </div>
    );
  }
}

export default CssRedux;