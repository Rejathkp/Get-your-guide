import React from "react";

import { Button, Card } from "react-bootstrap";

const Card5 = () => {
  const datas = [
    {
      name: "DAY TRIP",
      titlee: " Cochin Backwater village",
      activity: "12 activities",
      cost: "From ₹ 5,800 per person",
      img: "https://cdn.getyourguide.com/img/tour/5d61265520a91.jpeg/132.webp",
    },
    {
      name: "WATER ACTIVITY",
      titlee: "Backwater Village Kayaking",
      activity: "10 activities",
      cost: "From ₹ 3,800 per person",
      img: "https://cdn.getyourguide.com/img/tour/649934b93da39.jpeg/132.webp",
    },
    {
      name: "GUIDED TOUR",
      titlee: "Kochi City Tour",
      activity: "12 activities",
      cost: "From ₹ 5,800 per person",
      img: "https://cdn.getyourguide.com/img/tour/5f61ed406dae1.jpeg/132.webp",
    },
    {
      name: "PRIVATE TOUR",
      titlee: "Alleppey Backwater",
      activity: "12 activities",
      cost: "From ₹ 5,800 per person",
      img: "https://cdn.getyourguide.com/img/tour/50b656475c1c0.jpeg/132.webp",
    },
    {
      name: "WATER ACTIVITY",
      titlee: "Alappuzha Backwater Canoe",
      activity: "12 activities",
      cost: "From ₹ 5,800 per person",
      img: "https://cdn.getyourguide.com/img/tour/50cb571df411a.jpeg/132.webp",
    },
    {
      name: "MULTI DAY TRIP",
      titlee: "Backwater Houseboat",
      activity: "12 activities",
      cost: "From ₹ 5,800 per person",
      img: "https://cdn.getyourguide.com/img/tour/5d876ba925fc7.jpeg/132.webp",
    },
    {
      name: "PRIVATE TOUR",
      titlee: "Munnar",
      activity: "12 activities",
      cost: "From ₹ 5,800 per person",
      img: "https://cdn.getyourguide.com/img/tour/5976f106db741.jpeg/132.webp",
    },
    {
      name: "DAY TRIP",
      titlee: "Fort Kochi",
      activity: "12 activities",
      cost: "From ₹ 5,800 per person",
      img: "https://cdn.getyourguide.com/img/tour/56c711d2f41a9.jpeg/132.webp",
    },
    {
      name: "DAY TRIP",
      titlee: " Cochin Backwater village",
      activity: "12 activities",
      cost: "From ₹ 5,800 per person",
      img: "https://cdn.getyourguide.com/img/tour/5d61265520a91.jpeg/132.webp",
    },
    {
      name: "WATER ACTIVITY",
      titlee: "Backwater Village Kayaking",
      activity: "10 activities",
      cost: "From ₹ 3,800 per person",
      img: "https://cdn.getyourguide.com/img/tour/649934b93da39.jpeg/132.webp",
    },
    {
      name: "GUIDED TOUR",
      titlee: "Kochi City Tour",
      activity: "12 activities",
      cost: "From ₹ 5,800 per person",
      img: "https://cdn.getyourguide.com/img/tour/5f61ed406dae1.jpeg/132.webp",
    },
    {
      name: "PRIVATE TOUR",
      titlee: "Alleppey Backwater",
      activity: "12 activities",
      cost: "From ₹ 5,800 per person",
      img: "https://cdn.getyourguide.com/img/tour/50b656475c1c0.jpeg/132.webp",
    },
    {
      name: "WATER ACTIVITY",
      titlee: "Alappuzha Backwater Canoe",
      activity: "12 activities",
      cost: "From ₹ 5,800 per person",
      img: "https://cdn.getyourguide.com/img/tour/50cb571df411a.jpeg/132.webp",
    },
    {
      name: "MULTI DAY TRIP",
      titlee: "Backwater Houseboat",
      activity: "12 activities",
      cost: "From ₹ 5,800 per person",
      img: "https://cdn.getyourguide.com/img/tour/5d876ba925fc7.jpeg/132.webp",
    },
    {
      name: "PRIVATE TOUR",
      titlee: "Munnar",
      activity: "12 activities",
      cost: "From ₹ 5,800 per person",
      img: "https://cdn.getyourguide.com/img/tour/5976f106db741.jpeg/132.webp",
    },
    {
      name: "DAY TRIP",
      titlee: "Fort Kochi",
      activity: "12 activities",
      cost: "From ₹ 5,800 per person",
      img: "https://cdn.getyourguide.com/img/tour/56c711d2f41a9.jpeg/132.webp",
    },
  ];
  return (
    <div className="card-container">
      {datas.map((data) => {
        return (
          <div className="card-wrapper">
            <Card className="crad-6" style={{ width: "18rem", overflow: "hidden"}}>
              <Card.Img variant="top" src={data.img} />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>{data.titlee}</Card.Text>
                <Card.Text>{data.activity}</Card.Text>
                <Card.Text>{data.cost}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Card5;
