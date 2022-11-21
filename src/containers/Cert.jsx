import React from 'react'
import './css/cert.css'
import m1 from '../assets/images/m1.png'
import m2 from '../assets/images/m2.png'
import i1 from '../assets/images/i1.png'
import { useParams } from 'react-router-dom'
function Cert() {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="certs">
        <div className="cert">
          <div className="cert-img">
            <img src={m1} alt="" />
          </div>
          <div className="cert-link">
            <a href="https://coursera.org/verify/UJ9PFP9XX2D5" target="_blank">Click to see more</a>
          </div>
        </div>
        <div className="cert">
          <div className="cert-img">
            <img src={m2} alt="" />
          </div>
          <div className="cert-link">
            <a href="https://coursera.org/verify/V97W9BQ3K9EZ" target="_blank">Click to see more</a>
          </div>
        </div>
        <div className="cert">
          <div className="cert-img">
            <img src={i1} alt="certificate" />
          </div>
          <div className="cert-link">
            <a href="coursera.org/verify/85G7X2YW3G4T" target="_blank">Click to see more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cert