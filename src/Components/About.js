import React from "react";
import Grid from "@material-ui/core/Grid";
import image3 from "../images/feature_3.png";
import image from "../images/Frame 19.png";

const About = () => {
  return (
    <>
      <Grid container id="about">
        <Grid item xs={12}>
          <h1>About</h1>
        </Grid>
        <Grid className="About-text" item xs={12} sm={6}>
          <div>
            <h1>
              The City Focused <span>About Us</span> Page
            </h1>
          </div>

          <p>
            If you prefer visual graphics over lengthy texts, you should take a
            look at Huge Inc. and how they have managed to design their About Us
            page. With their unique designs, they have managed to create a link
            with Brooklyn, where the company was founded, while condensing their
            information into visualized diagrams. Huge Inc. manages to get
            across all their messages through some nifty artwork.
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="About-img">
            <img src={image3} alt="img" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="About-img">
            <img src={image} alt="img" />
          </div>
        </Grid>
        <Grid className="About-text" item xs={12} sm={6}>
          <div>
            <h1>
              The <span>Minimalist</span> About Us Page
            </h1>
          </div>

          <p>
            If you are looking for a more minimalistic approach for your About
            Us page, take a look at what Always Creative has to offer. With a
            use of black, white, and grey, they manage to convey their
            sophistication with a simple, yet eye-catching outlook accompanied
            by brief descriptions for their visitors.
          </p>
        </Grid>
      </Grid>
    </>
  );
};
export default About;
