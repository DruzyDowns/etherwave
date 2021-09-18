import React from "react";
import ClassicFormCSS from "./ClassicFormCSS";
import BadgeFormCSS from "./BadgeFormCSS";

function FormCodeStyling(props) {
  const isClassic = props.isClassic;
  if (isClassic) {
    return <ClassicFormCSS />;
  }
  return <BadgeFormCSS />;
}

class CssRedux extends React.Component {
  constructor(props) {
    super(props);
    this.handleClassicClick = this.handleClassicClick.bind(this);
    this.handlebadgeClick = this.handlebadgeClick.bind(this);
    this.state = {isClassic: true};
  }

  handleClassicClick() {
    this.setState({isClassic: true});
  }

  handlebadgeClick() {
    this.setState({isClassic: false});
  }

  render() {
      const isClassic = this.state.isClassic;
    return (
        <div>
            <div onClick={this.handleClassicClick}>classic</div>
            <div onClick={this.handlebadgeClick}>badge</div>
            <div className="athens bg-oxford p-4 rounded-lg h-64 overflow-y-scroll">
                <FormCodeStyling isClassic={isClassic} />
            </div> 
        </div>
    );
  }
}

export default CssRedux;