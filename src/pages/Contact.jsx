import * as React from "react";
import ContactBlock from "../components/common/ContactBlock";
import { Grid } from "semantic-ui-react";
import "./contact.scss";

const contactItems = [
  {
    key: 1,
    width: 13,
    textAlign: "left",
    title: "Schedule Appointment",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra cursus quam eu eleifend. Duis volutpat accumsan odio volutpat congue. Ut euismod interdum urna eu tristique. Maecenas ut arcu purus. Vestibulum sit amet dui ac justo varius malesuada. Nulla vitae nulla",
    button: true,
  },

  {
    key: 2,
    width: 3,
    title: "Contact",
    textAlign: "right",
    name: "Nathan Stojanovic",
    street: "672 Something St",
    city: "Sydney",
    state: "NSW, ",
    postCode: "2222",
  },
];
const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h3 className="contact-mini-heading">Get in contact</h3>
        <Grid columns={2} stackable>
          <Grid.Row className="grid-row">
            {contactItems.map((i) => (
              <Grid.Column width={i.width} key={i.key}>
                <h1 className="contact-page-heading">{i.title}</h1>
                <p className="contact-page-about">
                  {i.content}
                  {i.name}
                  <br /> {i.street}
                  <br /> {i.city}
                  <br /> {i.state}
                  {i.postCode}
                </p>
                {i.button && (
                  <a href="mailto:njs@test.com" className="contact-page-button">
                    Contact
                  </a>
                )}
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </div>
      <ContactBlock />
    </>
  );
};

export default Contact;
