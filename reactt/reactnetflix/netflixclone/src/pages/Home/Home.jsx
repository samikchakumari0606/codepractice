import React from 'react'
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar"
import hero_banner from "../../../public/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/Play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
      
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum inventore, eum voluptatem assumenda quasi quo illum hic. Commodi voluptatem quis voluptatibus eveniet ullam tenetur, provident ut labore debitis itaque veniam.</p>
          <div className="hero-btns">
          <button className='btn'><img src={play_icon}/>Play</button>
          <button className='btn dark-btn'><img src={info_icon}/>More Info</button>
          </div>

         <TitleCards/>

        </div>
         
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} />
      <TitleCards title={"Only on Netflix"}  />
      <TitleCards title={"Upcoming"}  />
      <TitleCards title={"Top Pics for You"}  />
      </div>
      <Footer/>
     
    </div>
  )
}

export default Home
