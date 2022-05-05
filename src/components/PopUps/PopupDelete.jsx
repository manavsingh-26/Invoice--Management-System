import  React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Alert, Snackbar, Button, Typography } from '@mui/material';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,

    bgcolor: 'background.paper',
    background: '#2c3d4d',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    flexGrow: 1,
};


export default function DeletePopup(props) {

    const [openAddAlert,setOpenAddAlert] = useState(false);

//--------------------------------------------------------------Send Delete Request-----------------------------------------

    function handleDelete(){
        const url = "http://localhost:8080/HRC_Project/DeleteData?";

        let data = JSON.stringify(props.data);
        console.log(data);
        const str = `sl_no=${props.data[0]}`;

        axios
        .post(url+str)
        .then((res) => {
          if(res.status === 200){
            setOpenAddAlert(true);
            props.setTrigger(false);
          }
  
        })
        .catch((error) => console.log(error));

        props.refreshh();


    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.trigger}
                onClose={() => props.setTrigger(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.trigger}>

                    <Box sx={style}>
                        <Typography color={'white'} id="modal-modal-title" variant="h6" component="h2">
                            Delete Records?
                        </Typography>
                        <Typography color={'white'} id="modal-modal-description" sx={{ mt: 2 }}>
                            Are you sure you want to delete these records?
                        </Typography>
{/*-------------------------------------------------------Cancel Button------------------------------------------------------------------  */  }

                        <div style={{ margin: "5% 0 1%" }} class="row">
                            <div class="col">
                                <Button onClick={() => props.setTrigger(false)} style={{ minWidth: '100%', minHeight: '50px', color: 'white', borderColor : 'white' }} variant="outlined">Cancel</Button>
                            </div>
{/*-------------------------------------------------------Delete Button------------------------------------------------------------------  */  }

                            <div class="col">
                                <Button onClick={ () =>{
                                
                                     handleDelete();
                                     props.setTrigger(false);
                                }} style={{ minWidth: '100%', minHeight: '50px', color: 'white' , borderColor : 'white' }} variant="outlined">Delete</Button>
                            </div>
                        </div>

                    </Box>
                </Fade>
            </Modal>
{/*-------------------------------------------------------Snack-Bar------------------------------------------------------------------  */  }

            <Snackbar open={openAddAlert} autoHideDuration={6000} onClose={() => setOpenAddAlert(false)}>
                <Alert onClose={() => setOpenAddAlert(false)} severity="success" sx={{ width: '100%' }}>
                    Row Deleted Successfully!
                </Alert>
            </Snackbar>
        </div>
    );

}