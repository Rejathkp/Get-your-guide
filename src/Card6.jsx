import React from "react";
import { Card } from "react-bootstrap";

const Card6 = () => {
  const tittle= {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    padding: "10px",
    background: "rgba(0, 0, 0, 0.7)",
    color: "#fff",
    zIndex: "1",
  };

  const crd = {
    width: "18rem",
    margin: "10px", 
    borderRadius: "10px", 
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
  };

  const data = [
    { name: "Boats & Yachts",
      img: 'https://cdn.getyourguide.com/img/tour/2e262deecdcedd1f.jpeg/86.webp' },
    { name: "Architecture", 
      img: 'https://cdn.getyourguide.com/img/tour/60ed5ea07ae57.jpeg/86.webp' },
    { name: "Sightseeing Cruises", 
      img: 'https://cdn.getyourguide.com/img/tour/5d1110a38539e.jpeg/86.webp' },
    { name: "Bus & Minivan Tours",
      img: 'https://cdn.getyourguide.com/img/tour/5d012949dc758.jpeg/86.webp' },
  ];

  return (
    <div className="card6-sec">
        <h2>Immersive Experiences</h2>
      {data.map((item) => (
        <div className="d-inline-flex" key={item.name}>
          <Card style={crd}>
            <div style={{ position: "relative" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Title className="tit" style={tittle}>
                {item.name}
              </Card.Title>
            </div>
            <Card.Body>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Card6;