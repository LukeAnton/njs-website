import React from "react";
import { Grid } from "semantic-ui-react";
import "./services.scss";
import ContactBlock from "../components/common/ContactBlock";

const services1 = [
  {
    key: 1,
    title: "Carpentry",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repudiandae sed consectetur animi magni amet maiores qui modi eos. Repellat doloremque numquam neque voluptates, doloribus dignissimos quae architecto magni laborum!",
  },
  {
    key: 2,
    title: "Construction",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt esse officia vitae voluptas? Voluptatibus voluptatum quas repellendus cumque, unde facere neque dolorum cupiditate excepturi sit id exercitationem soluta voluptate.,",
  },
];
const services2 = [
  {
    key: 1,
    title: "Dry wall hanging",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos reprehenderit quam dignissimos, blanditiis error doloribus mollitia porro perspiciatis placeat necessitatibus asperiores iure ad tenetur iusto, provident voluptates ipsum sequi animi.",
  },
  {
    key: 2,
    title: "Plastering",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt esse officia vitae voluptas? Voluptatibus voluptatum quas repellendus cumque, unde facere neque dolorum cupiditate excepturi sit id exercitationem soluta voluptate.",
  },
];

const Services = () => {
  return (
    <>
      <div className="service-container">
        <h3 className="services-mini-heading"> Services</h3>
        <Grid columns={2} stackable divided>
          <Grid.Row className="grid-row">
            {services1.map((i) => (
              <Grid.Column key={i.key}>
                <h2 className="heading">{i.title}</h2>
                <p className="about">{i.about}</p>
              </Grid.Column>
            ))}
          </Grid.Row>
          <Grid.Row>
            {services2.map((i) => (
              <Grid.Column key={i.key}>
                <h2 className="heading">{i.title}</h2>
                <p className="about">{i.about}</p>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </div>
      <ContactBlock />
    </>
  );
};

export default Services;
