import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import image1 from "../images/feature_1.png";
import image2 from "../images/feature_2.png";
import image3 from "../images/feature_3.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(5),
      width: theme.spacing(45),
      height: theme.spacing(50),
    },
  },
}));

const Contant = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className="grid-container" id="contant">
        <Grid className="sub-grid" item xs={12} sm={12} md={12} lg={12}>
          <h1 style={{ marginBottom: "50px" }}>Feature</h1>
          <div className={classes.root}>
            <Paper className="paper-class" elevation={1}>
              <img className="f-img" src={image1} alt="img" />
              <h3>Development Course</h3>
              <p>
                {" "}
                Lanuch your App with the confidence and creativity Lanuch your
                App with the confidence and creativity
              </p>
            </Paper>
            <Paper className="paper-class" elevation={1}>
              <img className="f-img" src={image2} alt="img" />
              <h3>Money Saving Services</h3>
              <p>
                {" "}
                Lanuch your App with the confidence and creativity Lanuch your
                App with the confidence and creativity
              </p>
            </Paper>
            <Paper className="paper-class" elevation={1}>
              <img className="f-img" src={image3} alt="img" />
              <h3>Usability Interface</h3>
              <p>
                {" "}
                Lanuch your App with the confidence and creativity Lanuch your
                App with the confidence and creativity
              </p>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Contant;
