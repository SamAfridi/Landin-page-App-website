import { Grid, Button } from "@material-ui/core";
import image12 from "../images/image12.jpg";
import img15 from "../images/img15.jpg";
import download from "../images/download.jpg";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),

    color: theme.palette.text.secondary,
    width: "300px",
    borderRadius: "10px",
  },
}));

const Article = () => {
  const classes = useStyles();
  return (
    <>
    <h2 style={{padding:"20px"}}>Check Out Our Latest Article</h2>
    <Grid id="article" container className="Container" spacing={4}>
      <Grid className="grid-class" item xs={12} lg={3}>
        <Paper className={classes.paper}>
          <img className="img" src={image12} alt="img" />
          <h3 className="h3Class">The mobile performance standard</h3>
          <p className="paragraphClass">
            {" "}
            With data on over 8 million apps and thousands of websites, get the
            complete picture of the mobile .
          </p>
          <div className="paragraphClass">
            <Button color="primary">
              Read more
              <ArrowRightAltIcon />{" "}
            </Button>
          </div>
        </Paper>
      </Grid>
      <Grid className="grid-class" item xs={12} lg={3}>
        <Paper className={classes.paper}>
          <img className="img" src={img15} alt="img" />
          <h3 className="h3Class">The mobile performance standard</h3>
          <p className="paragraphClass">
            {" "}
            With data on over 8 million apps and thousands of websites, get the
            complete picture of the mobile .
          </p>
          <div className="paragraphClass">
            <Button color="primary">
              Read more
              <ArrowRightAltIcon />{" "}
            </Button>
          </div>
        </Paper>
      </Grid>
      <Grid className="grid-class" item xs={12} lg={3}>
        <Paper className={classes.paper}>
          <img className="img" src={download} alt="img" />
          <h3 className="h3Class">The mobile performance standard</h3>
          <p className="paragraphClass">
            {" "}
            With data on over 8 million apps and thousands of websites, get the
            complete picture of the mobile.
          </p>
          <div className="paragraphClass">
            <Button color="primary">
              Read more
              <ArrowRightAltIcon />{" "}
            </Button>
          </div>
        </Paper>
      </Grid>
    </Grid>
    </>
    
  );
};
export default Article;
