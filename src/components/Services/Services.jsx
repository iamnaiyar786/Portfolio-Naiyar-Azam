import React from 'react'
import './Services.css';
import heartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
export const Services = () => {
  return (
    <div className="services">
        <div className="awesome">
            <span>My Awesome</span>
            <span>services</span>
            <span>Lorem ispum is simpley dummy text of printing lorem 
            <br />
            ispum is simpley dummy text of priting
            </span>
            <button className="button s-button">Download CV</button>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        <div className="cards">
          <div style={{left:'14rem'}}>
            <Card
            emoji = {heartEmoji}
            heading = {'Design'}
            detail = {"figma, Sketch, Photoshop, Adobe, xd"}
            />
          </div>

        </div>
    </div>
  )
}
export default Services;
