import React from 'react'
import './css/contacts.css'

function Contacts() {
  return (
    <div className='container'>
        <div className="form-box">
            <h1>Get in Touch </h1>
            <form action="" method="post">
                <input type="text" name="name" id="name" placeholder='Enter Name' />
                <p><input type="email" name="email" id="email" placeholder='Enter Email'/> <s>.</s> <input type="tel" name="tel" id="tel" placeholder='Enter Phone Number' /></p>
                <textarea name="message" id="msg" cols="30" rows="10" placeholder='Enter Message'></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
        <div className="location">
            <div className="map">
            <div className="mapouter"><div className="gmap_canvas">
                <iframe width="1450" height="417" id="gmap_canvas" src="https://maps.google.com/maps?q=KG%20348%20St,%20Kigali&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                    </iframe>
                    </div></div>
            </div>
        </div>
    </div>
  )
}

export default Contacts