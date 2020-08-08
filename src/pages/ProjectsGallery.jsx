import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import ContactBlock from "../components/common/ContactBlock";
import "./projectsGallery.scss";

const ProjectsGallery = () => {
  const [imgs] = useState([
    "https://source.unsplash.com/featured/?construction1",
    "https://source.unsplash.com/featured/?construction2",
    "https://source.unsplash.com/featured/?construction3",
    "https://source.unsplash.com/featured/?construction4",
    "https://source.unsplash.com/featured/?construction5",
    "https://source.unsplash.com/featured/?construction6",
    "https://source.unsplash.com/featured/?construction7",
    "https://source.unsplash.com/featured/?construction8",
  ]);

  return (
    <>
      <div className="gallery-container" style={{ textAlign: "center" }}>
        <h3 className="gallery-mini-heading">Past</h3>
        <h2
          className="heading"
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          Projects
        </h2>
        <Grid columns={2} stackable>
          <Grid.Row className="grid-row">
            {imgs.map((i) => (
              <Grid.Column className="grid-column" key={i}>
                <img className="gallery-img" src={i} alt="gallery-shot" />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </div>
      <ContactBlock />
    </>
  );
};

export default ProjectsGallery;
