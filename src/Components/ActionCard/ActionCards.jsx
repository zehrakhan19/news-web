import React, { useState } from "react";
import "./ActionCard.css";
import Modal from "react-bootstrap/Modal";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";

const ActionCards = ({ size, data }) => {
  const [expanded, setExpanded] = useState(Array({ data }.length).fill(false));

  const handleExpandClick = (index) => {
    const updatedExpanded = [...expanded];
    updatedExpanded[index] = !updatedExpanded[index];
    setExpanded(updatedExpanded);
  };
  return (
    <>
      {data?.map((item, id) => (
        <div
          className="card-wrapper"
          key={id}
          style={{
            height: size === "big" ? "466px" : "340px",
            maxWidth: size === "big" ? "348px" : "270px",
          }}
          onClick={() => handleExpandClick(id)}
        >
          <div className="img-box">
            <img src={item?.img} alt="img" />
          </div>
          <div className="content-wrapper">
            <h5 className="article-type">{item?.topic}</h5>
            {size === "big" && <h3>{item?.headline}</h3>}
            <p>{item?.timespan}</p>
            <p className="detailed-news">
              {item?.article.split(" ").slice(0, 30).join(" ") + "..."}
            </p>
          </div>
          <Collapse in={expanded[id]} timeout="auto" unmountOnExit>
            <Modal
              show={expanded[id]}
              fullscreen={true}
              onHide={() => {
                handleExpandClick(id);
              }}
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  <Typography paragraph>{item?.headline}</Typography>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Typography paragraph>{item?.article}</Typography>
              </Modal.Body>
            </Modal>
          </Collapse>
        </div>
      ))}
    </>
  );
};

export default ActionCards;
