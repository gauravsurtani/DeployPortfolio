import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
// import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
// import { experience } from "../../portfolio.js";
// import { Fade } from "react-reveal";
import WorkExpV1 from "../../containers/work-exp/work-exp-v1.js";




class Experience extends Component {
  render() {
    const theme = this.props.theme;
    
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">

        </div>
        <WorkExpV1 theme={this.props.theme} />
        {/* <ExperienceAccordion sections={experience["sections"]} theme={theme} /> */}
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
