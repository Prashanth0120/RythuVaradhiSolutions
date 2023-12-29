
import Navbar from "../Navbar/Navbar"
import { TbRobot } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { TfiSignal } from "react-icons/tfi";
import { FaHandshake } from "react-icons/fa6";



import './Home.css'
import ScrollRevealSection from '../ScrollRevealSection/ScrollRevealSection';

function Home() {
  

  return (
    <>
      <ScrollRevealSection id={"Section-Page1"} url={"https://i.postimg.cc/wxhwH7gz/dji-5331597.jpg"} height={"100vh"}>
        <Navbar />
        <div className="Home-Title">
          <div>
            <h1 style={{fontSize:"40px",color:"white"}}>'Elevating crops, Empowering farmers'</h1>
            <h3 style={{fontSize:"27px",color:"white"}}>"In the hands of a farmer, every crop is a story of dedication and hard work"</h3>
          </div>
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection id={"Section-Page2"} height={"100vh"}>
        <div className="Main-Cards-Container">
        <h1 style={{fontSize:"37px",margin:"15px"}}>Key Services</h1>

       <div className="Cards-Container">
        
        
        <div className="Each-Card">
        <div className="Card-Icons" ><TbRobot className="Icons"/></div>

            <h1 style={{fontSize:"28px",color:"#2E8B57",margin:"7px"}}>Precision Farming </h1>
            <p style={{fontSize:"18px",fontWeight:"normal",margin:"0px 13px"}}>We bring a paradigm shift to agriculture through our precision farming recommendations. By harnessing the power of data analytics, we empower farmers to achieve maximum productivity with minimal costs. From precise planting to chemical application and drone-based remote sensing, our solutions revolutionize every aspect of farming.

</p>
        </div>
        <div className="Each-Card">
        <div className="Card-Icons" ><TiShoppingCart className="Icons"/></div>
            <h1 style={{fontSize:"28px",color:"#2E8B57",margin:"7px"}}>Market Dynamics </h1>
            <h3 style={{fontSize:"18px",fontWeight:"normal",margin:"0px 13px"}}>Navigate the agricultural marketplace effortlessly with our input and output platform. We are the catalyst that shortens supply chains, boosts transparency, and secures better prices for both agricultural inputs and harvested produce. At AgriSense, we believe in connecting farmers directly to global markets, unlocking new opportunities and elevating agricultural economies</h3>
        </div>
        <div className="Each-Card">
        <div className="Card-Icons" ><TfiSignal className="Icons"/></div>
            <h1 style={{fontSize:"28px",color:"#2E8B57",margin:"7px"}}>AI Crafted Crop</h1>
            <h3 style={{fontSize:"18px",fontWeight:"normal",margin:"0px 13px"}}>Discover the future of farming with our AI-powered crop advisory services. We blend artificial intelligence with agricultural expertise to offer data-driven insights. Farmers benefit from informed decisions on resource allocation, crop cycle management, and overall optimization, ensuring sustainable and profitable farming practices.
</h3>
        </div>
        <div className="Each-Card">
        <div className="Card-Icons" ><FaHandshake className="Icons"/></div>

            <h1 style={{fontSize:"28px",color:"#2E8B57",margin:"7px"}}>Hub of Agriculture </h1>
            <h3 style={{fontSize:"18px",fontWeight:"normal",margin:"0px 13px"}}>AgriSense Innovations is your comprehensive source for all things agriculture. Our platforms serve as a knowledge hub, delivering real-time and accurate information on crops, market trends, tools, news, and modern agricultural practices. Stay at the forefront of the industry and cultivate success with AgriSense.</h3>
        </div>
       </div>
       </div>
      </ScrollRevealSection> 

     { /*<ScrollRevealSection id={"Section-Page3"} url={"https://i.postimg.cc/wxhwH7gz/dji-5331597.jpg"}>
        <div className="Home-Page2">
          <div className="Home-Title">
            <div>
              <h1>'Elevating crops, Empowering farmers'</h1>
              <h3>"In the hands of a farmer, every crop is a story of dedication and hard work"</h3>
            </div>
          </div>
        </div>

  </ScrollRevealSection> */}
        <ScrollRevealSection id={"Section-Page3"} backgroundColor={"#E9F9EE"} height={"30vh"}><div style={{height:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}><h1 style={{fontSize:"50px",fontWeight:"bold",color:"#2E8B57"}}>Vision & Mission</h1></div></ScrollRevealSection>


      <ScrollRevealSection id={"Section-Page4"}  height={"140vh"}>
          <div className="Vision-Image">
            <div className="Our-Vision-Container">
            <h1 className="Our-Vision"> Our Vision</h1>
            <p className="Our-Vision-Para">Our startup envisions harnessing cutting-edge technology to propel rural communities towards innovation and transfotmation, empowering them to flourish amidst dynamic challenges.</p>
            </div>
            
          </div>
        
      </ScrollRevealSection>
      <ScrollRevealSection id={"Section-Page5"}  height={"130vh"}>
          <div className="Mission-Image">
            <div className="Our-Mission-Container">
            <h1 className="Our-Vision"> Our Mission</h1>
            <p className="Our-Vision-Para">RYTHU VAARADHI Solutions revolutionizes agriculture through comprehensive services, empowering farmers with technology, skilled labor, and efficient equipment rentals. Our mission is to foster collaboration and innovation, overcoming challenges, enhancing productivity, and contributing to a sustainable agricultural ecosystem.</p>
            </div>
            
          </div>
        
      </ScrollRevealSection>
      <ScrollRevealSection id={"section-Page6"} backgroundColor={"#E9F9EE"} height={"130vh"} >
        <div style={{padding:"20px"}}><h1 style={{fontSize:"50px",fontWeight:"bold",color:"#2E8B57"}}>Our Ecosystem</h1></div>
        
        <img src="https://i.postimg.cc/vHpfnN31/Picsart-23-12-27-23-15-48-553.png" />
      </ScrollRevealSection>
      <ScrollRevealSection id={"section-Page7"} backgroundColor={"#E9F9EE"} height={"100vh"} >
      <h1 style={{fontSize:"40px",fontWeight:"bold",color:"#2E8B57",padding:"30px"}}>Hardships of Farmers :</h1>
        <div>

        <iframe style={{borderRadius:"10px"}} width="820" height="425" src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0" allowfullscreen>
</iframe>

        </div>
      </ScrollRevealSection>
    </>
  )
}

export default Home;
