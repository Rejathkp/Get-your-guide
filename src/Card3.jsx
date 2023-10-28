import React from "react";
import { Card } from "react-bootstrap";

const Card3 = () => {
  const imagess = [
    {
      name: "WATER ACTIVITY",
      titlee: "Alappuzha Backwater",
      image:
        "https://cdn.getyourguide.com/img/tour/5d61265520a91.jpeg/132.webp",
      rupees: "From ₹ 5,800 per person",
    },
    {
      name: "PRIVATE TOUR",
      titlee: "Cochin Backwater",
      image:
        "https://cdn.getyourguide.com/img/tour/649934b93da39.jpeg/132.webp",
      rupees: "From ₹ 6,800 per person",
    },
    {
      name: "DAY TRIP",
      titlee: "Munnar Private Day Trip",
      image:
        "https://cdn.getyourguide.com/img/tour/5976f106db741.jpeg/132.webp",
      rupees: "From ₹ 4,800 per person",
    },
    {
      name: "PRIVATE TOUR",
      titlee: "Vembanadu Lake",
      image:
        "https://cdn.getyourguide.com/img/tour/5d876ba925fc7.jpeg/132.webp",
      rupees: "From ₹ 11,800 per person",
    },
  ];

  return (
    <div className="head_sec hover">
      <h2>TOP ACTIVITIES</h2>

      <div className="card-container">
        {imagess.map((data) => (
          <div key={data.titlee} className="card-wrapper">
            <Card className="custom-card">
              <Card.Img variant="top" src={data.image} />
              <Card.Body>
                <Card.Title>{data.titlee}</Card.Title>
                <Card.Text>{data.name}</Card.Text>
                <Card.Text>{data.rupees}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card3;
