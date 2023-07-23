import React from 'react'
import { Link } from 'react-router-dom';
import "./greenbutton.css";

function GreenButton({link,text}) {
  return (
        <Link to={link} className='green_button'>
            {text}
        </Link>
  )
}

export default GreenButton