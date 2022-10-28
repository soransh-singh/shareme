import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'

import shareVideo from "../../assets/share.mp4"
import logo from "../../assets/logowhite.png"

import "./style.css"

export default function Login() {
  const login = useGoogleLogin({
    onSuccess: response => {
      console.log(response)
      
      localStorage.setItem('user', JSON.stringify())
    },
  });
  return (
    <div>
        <div>
          <video 
            src={shareVideo}
            type="video/mp4"
            loop
            muted
            autoPlay="autoplay"
            controls={false}

          />
          <div>
            <div>
              <img src={logo} alt="logo"/>
            </div>
            <div>
              <button onClick={() => login()}>
                Sign in with Google 🚀{' '}
              </button>;
            </div>
          </div>
        </div>
    </div>
  )
}




