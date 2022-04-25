import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModalSupression from "./ModalSupression";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { useState } from "react";
import Button from "@mui/material/Button";
import { addComment } from "../../js/actions/publication";
import LikeButoon from "./LikeButton";
import ModalUpdate from "./ModalUpdate";

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
const Publication = ({ publication }) => {
 
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const user = useSelector((state) => state.userReducer.user);


  const renderComment = (c, index) => (
    <div
      key={`comment-${index}`}
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingInline: 22,
      }}
    >
      <div>{c.content}</div>
      <div>{user.nom}</div>
    </div>
  );

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card
        style={{
          width: "80%",
          marginLeft: "2%",
          marginTop: "5%",
          marginBottom: "20%",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              IMG
            </Avatar>
          }
          title={publication.nom}
          subheader={publication.titre}
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {publication.content}
          </Typography>
        </CardContent>
        <div style={{ marginBottom: "2%" }}>
          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <LikeButoon publication={publication} />
            </IconButton>
          
              <IconButton aria-label='share'>
                <ModalUpdate pub={publication._id} />
                <ModalSupression pub={publication._id} />
              </IconButton>
      
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        </div>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {publication.comments
                .filter((c, i) => (c.length > 0 ? c.key : i < 3))
                .map((c) => ({
                  content: c.content,
                  user: c.user,
                  publication: c.publication,
                }))
                .map(renderComment)}
              {comments.map((c) => ({ content: c })).map(renderComment)}
            </Typography>
            <TextField
              required
              id='outlined-required'
              label='commenter'
              defaultValue=''
              onChange={(e) => setComment(e.target.value)}
              InputProps={{
                readOnly: false,
              }}
            />
            <Button
              variant='text'
              onClick={() => {
                setComments([...comments, comment]);
                addComment({
                  user: user._id,
                  publication: publication._id,
                  content: comment,
                });
                setComment("");
              }}
            >
              {" "}
              add comment
            </Button>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Publication;
