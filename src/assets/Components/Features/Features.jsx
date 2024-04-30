import React from "react";
import "./Features.css";
import "../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

function FeaturesDetail(props) {
  return (
    <div className="features-icon">
      <div className="icons">
        <i className={props.icon}></i>
      </div>
      <div className="heading">
        <h1>{props.heading}</h1>
      </div>
      <div className="para">
        <p>{props.para}</p>
      </div>
    </div>
  );
}

function Features() {
  const featuresData = [
    {
      icon: "bi bi-window",
      heading: "Fully Responsive",
      para: "This theme will look great on any device, no matter the size!",
    },
    {
      icon: "bi bi-star",
      heading: "Bootstrap 5 Ready",
      para: "Featuring the latest build of the new Bootstrap 5 framework!",
    },
    {
      icon: "bi bi-speedometer",
      heading: "Easy to Use",
      para: "Ready to use with your own content, or customize the source files!",
    },
  ];
  return (
    <div className="icon-container">
      {featuresData.map((data, index) => (
        <FeaturesDetail key={index} {...data} />
      ))}
    </div>
  );
}

export default Features;
