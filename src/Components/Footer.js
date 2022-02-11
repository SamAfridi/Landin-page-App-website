import logo from "../images/logo.png";
import * as React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%);",
          width: "100%",
          height: "600px",
          marginTop: "100px",
          padding: "30px",
        }}
      >
        <Grid className="Footer" container rowSpacing={0}>
          <Grid item xs={6} lg={3}>
            <ul style={{padding:"30px"}}>
              <li>
                {" "}
                <a href="#" className="logo">
                  <img src={logo} alts="" />
                </a>
              </li>
              <li>
                Easy-to-use and thoughtfully designed, the new Inspiron keeps
                you connected to what matters most.
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} lg={3}>
            <ul>
              <li>
                <h4>Our Company</h4>
              </li>
              <li>About</li>
              <li>Testmonial</li>
              <li>Investor</li>
              <li>NewsRooms</li>
            </ul>
          </Grid>
          <Grid item xs={6} lg={3}>
            <ul>
              <li>
                <h4>Our Partner</h4>
              </li>
              <li>Find A Partner</li>
              <li>OEM Solution</li>
              <li>Partner Program</li>
            </ul>
          </Grid>
          <Grid item xs={6} lg={3}>
            <ul>
              <li>
                <h4>Resources</h4>
              </li>
              <li>Event</li>
              <li>Glossary</li>
              <li>Resources Library</li>
              <li>Software Download</li>
            </ul>
          </Grid>
          <ul>
            <li>
              <h4>Dell.com</h4>
            </li>
            <li>2022 Dell</li>
          </ul>
          <ul>
            <li>
              <h4>Dell Technologoies</h4>
            </li>
            <li>Term for sale</li>
          </ul>
          <ul>
            <li>
              <h4>Premier</h4>
            </li>
            <li>Privacy Statmen</li>
          </ul>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
