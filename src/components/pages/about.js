import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
       <p>Hello! I am Beatriz García, <b>full stack developer</b>. Recently I have finished the full stack development bootcamp at the Bottega University. I invite you to check in this portfolio my projects and all the technologies I have applied to them.
       </p>
       <p>Along my working experience I had the chance to develop in two main fields: Communication & Marketing and Social Services. My first approach to technology started when I built my first websites with WordPress. Then I designed and built an <b>online shop</b> with WooCommerce which I have been managing for more than <b>5 years</b>. My values drove me to work as a diversity consultant and cooperation officer. 
       </p>
       <p>Now it is time <b>to merge social impact with technology</b> and continue developing my IT skills.
       </p>
      </div>
    </div>
  );
}