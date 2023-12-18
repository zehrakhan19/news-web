import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Modal from "react-bootstrap/Modal";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function NewsCard({ size, article }) {
  const [fullscreen, setFullscreen] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
  }

  const handleExpandClick = () => {
    setExpanded(true);
    handleShow(true);
  };
  return (
    <>
      {size === "large" ? (
        <Card
          sx={{
            width: 570,
            height: 695,
            margin: 2,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <CardMedia
            component="img"
            height="400"
            image={article?.img}
            alt="Article"
          />
          <div style={{ textAlign: "right" }}>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </div>
          <CardContent>
            <Typography variant="subtitle2" color="text.dark">
              {article?.headline.split(" ").slice(0, 20).join(" ")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article?.timespan}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse
            in={expanded}
            timeout="auto"
            unmountOnExit
            style={{
              position: "absolute",
              bottom: -40,
              backgroundColor: "#fff",
              zIndex: 9,
            }}
          >
            <Modal
              show={expanded}
              fullscreen={fullscreen}
              onHide={() => {
                setExpanded(false);
              }}
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  <Typography paragraph>{article?.headline}</Typography>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Typography paragraph>{article?.article}</Typography>
              </Modal.Body>
            </Modal>
          </Collapse>
        </Card>
      ) : (
        <Card
          sx={{
            maxWidth: size === "big" ? 600 : 215,
            height: size === "big" ? 630 : 300,
            margin: 2,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <CardMedia
            component="img"
            height={size === "big" ? "410" : "100"}
            image={article?.img}
            alt="Article"
          />
          <div style={{ textAlign: "right" }}>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </div>
          <CardContent>
            <Typography variant="subtitle2" color="text.dark">
              {article?.headline.split(" ").slice(0, 5).join(" ") + "..."}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article?.timespan}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse
            in={expanded}
            timeout="auto"
            unmountOnExit
            style={{
              position: "absolute",
              bottom: -40,
              backgroundColor: "#fff",
              zIndex: 9,
            }}
          >
            <Modal
              show={expanded}
              fullscreen={fullscreen}
              onHide={() => {
                setExpanded(false);
              }}
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  <Typography paragraph>{article?.headline}</Typography>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Typography paragraph>{article?.article}</Typography>
              </Modal.Body>
            </Modal>
          </Collapse>
        </Card>
      )}
    </>
  );
}
