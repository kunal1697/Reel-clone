import React from 'react'
import TextField from '@mui/material/TextField';

import Image from 'next/image';
import img1 from '../../asset/Insta1.jpg';
import Button from '@mui/material/Button';
function index() {
  return (
    <div className='signup-container'>
    <div className='signup-card'>
    <Image src={img1}></Image>
    <TextField id="outlined-basic" size="small"  fullWidth label="Email" type="email" variant="outlined" style={{marginTop:"0.5rem"}} />
    <TextField id="outlined-basic" size="small"  fullWidth label="password" type="password" variant="outlined" style={{marginTop:"0.5rem"}} />
    <TextField id="outlined-basic" size="small"  fullWidth label="Name" tupe="text" variant="outlined" style={{marginTop:"0.5rem"}} />
    <Button variant="outlined" fullWidth component="label" style={{marginTop:"1rem"}}>
    <input type="file" accept="image/*" style={{display:"none"}} />
          Upload
        </Button>
        <Button variant="contained" fullWidth component="span" style={{marginTop:"1rem"}}>
    
          Sign up
        </Button>

    </div>
    <div className='bottom-card'>
    Already Have an Account? <span style={{color:"blue"}}>Login</span>

    </div>
    </div>
    
  )
}

export default index