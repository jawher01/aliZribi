import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Modal from "./modalFormation"
import ModalSup from "./ModalSupFor"

export default function MultiActionAreaCard({formation}) {
  return (
    <div style={{marginBottom:"5%"}}>
    <Card  style={{ height: "500px",width: "60%",marginLeft:"20%"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          width= "200"
          image="https://d7ieeqxtzpkza.cloudfront.net/wp-content/uploads/2020/09/Formation.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {formation.nom}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {formation.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" >
          <Modal formation={formation}/>
        </Button>
       <ModalSup formation={formation._id}/>
      </CardActions>
    </Card>
    </div>
  );
}
