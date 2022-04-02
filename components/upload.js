import React from 'react'
import {Button} from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';


function upload() {
  return (
    <div className='upload-button'>
         <Button startIcon={<MovieIcon/>} variant="outlined" fullWidth component="label" style={{marginTop:"1rem"}}>
    <input type="file" accept="image/*" style={{display:"none"}} />
          Upload
        </Button>
        <LinearProgress variant="determinate" value={50} style={{marginTop:'0.2rem'}} />
    </div>
  )
}

export default upload