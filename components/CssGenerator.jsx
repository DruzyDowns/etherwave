import React, { useState } from 'react';
import StaticFormCSS from "./StaticFormCSS";
import BadgeFormCSS from "./BadgeFormCSS";

function FormCodeStyling(props) {
  const isClassic = props.isClassic;
  if (isClassic) {
    return <StaticFormCSS />;
  }
  return <BadgeFormCSS />;
}

class CssRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isClassic: true};
  }

  render() {
      const isClassic = this.state.isClassic;
    return (
        <div className="">
          <div className=" h-72 flex justify-between mb-4">
            <div className={`p-4 mr-2 overflow-hidden flex flex-col justify-between w-1/2 rounded-sm shadow-md h-full transform transition cursor-pointer ring-2 ${isClassic ? "-translate-y-1 ring-current" : "opacity-50 ring-gray-200"}`} onClick={() => this.setState({ isClassic: true })}>
              <h3 className="text-2xl">static form</h3>
              <p className="">This is the description of the form.</p>
              <img className="w-full rounded-sm" src="/example-static.png" alt="example of static etherwave form" />
            </div>
            <div className={`p-4 ml-2 overflow-hidden flex flex-col justify-between w-1/2 rounded-sm shadow-md h-full transform transition cursor-pointer ring-2 ${isClassic ? "opacity-50 ring-gray-200" : "-translate-y-1 ring-current"}`} onClick={() => this.setState({ isClassic: false })}>
              <h3 className="text-2xl">popup modal form</h3>
              <p className="">This is the description of the form.</p>
              <div className="flex w-full justify-center ">
              <img className="w-2/3 rounded-sm" src="/example-popup-modal.gif" />
              </div>
            </div>
            </div>
            <div className="athens bg-oxford p-4 rounded-lg h-64 overflow-y-scroll">
                <FormCodeStyling isClassic={isClassic} />
            </div> 
        </div>
    );
  }
}

export default CssRedux;