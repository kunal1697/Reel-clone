import React from 'react'
import TextField from '@mui/material/TextField';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import img1 from '../../asset/Insta1.jpg';
import bg1 from '../../asset/bg1.jpg';
import bg2 from '../../asset/bg2.jpg';
import bg3 from '../../asset/bg3.jpg';
import Button from '@mui/material/Button';
function index() {
  return (
    <div className='login-container'>
    <div className='carbg'>
      <div className='car'>
      <Carousel
      showIndicators={false}
         showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                interval={2000}
                autoPlay={true}
                showArrows={false}
      >
      
          <Image src={bg1} ></Image>
          <Image src={bg2} ></Image>
          <Image src={bg3} ></Image>
     
      </Carousel>
      </div>
    </div>
    <div>
    <div className='login-card'>
    <Image src={img1}></Image>
    <TextField id="outlined-basic" size="small"  fullWidth label="Email" type="email" variant="outlined" style={{marginTop:"0.5rem"}} />
    <TextField id="outlined-basic" size="small"  fullWidth label="password" type="password" variant="outlined" style={{marginTop:"0.5rem"}} />
        <div style={{color:"red"}}>Error sathi</div>
        <Button variant="contained" fullWidth component="span" style={{marginTop:"1rem"}}>
    
          Login
        </Button>
        <div style={{color:"blue",marginTop:"0.5rem"}}>Forgot Password ?</div>

    </div>
    <div className='bottom-card'>
    Don't Have an Account? <span style={{color:"blue"}}>Sign up</span>

    </div>
    </div>
    </div>
    
  )
}

export default index