import React from "react";
import { Card } from "react-bootstrap";

const Card4 = () => {
  const places = [
    {
      name: "Mattanchery Palace",
      img: "https://cdn.getyourguide.com/img/location/5f93e14b8ddd4-small.jpeg/70.webp",
      activity: "12 activities",
    },
    {
      name: "ST Francis Church",
      img: "https://cdn.getyourguide.com/img/location/5d525c23d1c6d-small.jpeg/70.webp",
      activity: "5 activities",
    },
    {
      name: "Cochin International Airport",
      img: "https://cdn.getyourguide.com/img/location/5d42d51aeef72-small.jpeg/70.webp",
      activity: "3 activities",
    },
    {
      name: "Chinese Fishing Nets",
      img: "https://cdn.getyourguide.com/img/location/5d525cfee5f64-small.jpeg/70.webp",
      activity: "8 activities",
    },
  ];

  return (
    <div className="headd hover">
      <h2>TOP SIGHTS IN KERALA</h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "35px",
          marginLeft: "25px",
        }}
      >
        {places.map((data) => (
          <div key={data.name}>
            <Card
              className="cards"
              style={{ width: "18rem", borderRadius: "10px" }}
            >
              <Card.Img variant="top" src={data.img} />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>{data.activity}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card4;
