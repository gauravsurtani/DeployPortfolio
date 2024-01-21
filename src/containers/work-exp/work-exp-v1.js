import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees1 } from "../../portfolio";
import { Fade } from "react-reveal";

class WorkExpV1 extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            {/* <h1 className="educations-header" style={{ color: theme.text }}>
              Degrees Received
            </h1> */}
          </Fade>
        </div>
        <div className="educations-body-div">
          {degrees1.degrees.map((degree) => {
            return <DegreeCard degree={degree} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default WorkExpV1;
