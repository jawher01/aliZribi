import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from "react-redux";
import {
    postFormation
   
  } from "../../js/actions/formation";
  

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalAjoutFormation () {
    const dispatch = useDispatch();
  
    
    const [nom, setNom] = useState("")
    const [description, setDescription] = useState('')
    const [type , setType] = useState('')
    const [duree , setDuree] = useState('')
    const [prix , setPrix] = useState('')
    const [date_debut , setDate_debut] = useState('')
    const [date_fin , setDate_fin] = useState('')
    
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

 
  return (
    
    <div>
      <Button onClick={handleOpen} >Ajouter un formation</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >

          <Typography id="modal-modal-title" variant="h6" component="h2">
            ajouter un formation
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          
        >
          
            <TextField
              required
              id="outlined-required"
              label="nom"
              defaultValue=""
              onChange={(e) => setNom(e.target.value)}
              InputProps={{
                readOnly: false,
              }}
            />
            <TextField
              required
              id="outlinre"
              label="Description"
              defaultValue=""
              onChange={(e) => setDescription(e.target.value)}
              InputProps={{
                readOnly: false,
              }}
             
              
            />
         
            <TextField
             
              id="filled-reqed"
              label="Type"
              defaultValue=""
              onChange={(e) => setType(e.target.value)}
              InputProps={{
                readOnly: false,
              }}
             
             
            />
            <TextField
             
            id="fed-required"
            label="Duree"
            defaultValue=""
            onChange={(e) => setDuree(e.target.value)}
            InputProps={{
              readOnly: false,
            }}
           
           
          />
          <TextField
             
            id="filled-reqd"
            label="Prix"
            defaultValue=""
            onChange={(e) =>  setPrix(e.target.value)}
            InputProps={{
              readOnly: false,
            }}
           
           
          />
          <TextField
             
          id="filled-rquired"
          label="Date_debut"
          defaultValue=""
          onChange={(e) =>  setDate_debut(e.target.value)}
          InputProps={{
            readOnly: false,
          }}
         
         
        />
        <TextField
             
        id="filled-requed"
        label="Date_fin"
        defaultValue=""
        onChange={(e) =>  setDate_fin(e.target.value)}
        InputProps={{
          readOnly: false,
        }}
        />
       
         
        
         
         
        </Box>
      
        <Button variant="contained" 
        type="submit"
        onClick={() =>
            dispatch(postFormation({nom,description,type,duree,prix,date_debut,date_fin}))
          
        }   
        >
        ajouter</Button>
       
          </Typography>
        </Box>
      </Modal>
     
    </div>
  );
}
