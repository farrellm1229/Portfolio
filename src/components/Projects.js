import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import sonic1 from "../assets/img/sonic3.jpg";
import sonic2 from "../assets/img/sonic2.jpg";
import sonic4 from "../assets/img/sonic4.jpg";
import sonic3 from "../assets/img/sonic1.jpg";

import sonic5 from "../assets/img/sonic5.mov";
import sleep from "../assets/img/sleepAnalysisWebsite.png";
import compiler1 from "../assets/img/compiler1.png";
import compiler2 from "../assets/img/compiler2.png";
import compiler4 from "../assets/img/compiler4.png";
import compiler5 from "../assets/img/compiler5.png";
import compiler6 from "../assets/img/compiler6.png";
import compiler7 from "../assets/img/compiler7.png";
import compiler8 from "../assets/img/compiler8.png";
import compiler9 from "../assets/img/compiler9.png";





import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                
                <h2>Projects</h2>
                <p>Here are my favorite projects I have developed!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Online Coin Selling Business</Nav.Link>
                      
                    </Nav.Item>
                    
                    <Nav.Item>
                      <Nav.Link eventKey="second">Client Applications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Compiler Design</Nav.Link>
                    </Nav.Item>
                  </Nav>
                                                                         
                     
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  
                    <Tab.Pane eventKey="first">
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <h2>Here is how I created a very successful business and brand at the age of 14.</h2>
                    </div>
                    
                    <h3 id="wrapper">
                    
      <img id="blurred" src={sonic4} alt="" />
      <img id="cover" src={sonic4} alt="" />
   
                    
                    
             
                    </h3>
               
                    
                    <p> It started with a very simple problem, paired with a slightly immoral solution. I was getting frustrated that these "bots" were getting in the way of me getting coins in my favorite game at the time, Madden Mobile. So, I thought; if you can't beat them, join them!<br>
                      </br>
                      <br></br>
                      The game had an auction house where players were sold for a certain number of coins, correlating with their value and skillset. Sometimes, people who didn't care much about the game would post a valuable player for very little, 
                      and whoever was the first to click "Buy Now" made a massive profit.
                      <br></br>
                      <br></br>
                     
                     
                      </p>
                      <span id="wrapper">
                    
                    <img id="blurred" src={sonic1} alt="" />
                    <img id="cover" src={sonic1} alt="" />
                    </span>
                      
  
                     <p>
                      After researching how these people were able to buy these players at low prices instantaneously, I bought my first iPad and began jailbreaking and writing a script/code for my bot. This is where my empire began.
                      <br></br>
                      <br></br>
                      </p>
                      <h3 id="wrapper">
                    
      <img id="blurred" src={sonic2} alt="" />
      <img id="cover" src={sonic2} alt="" />
                    
                    </h3>
                    <p>

                      I created a username within the Madden Mobile app under the name "Sonic", representing the elusive speed and efficiency of my program. After months of writing and improving upon my code, it was evident there was no one out there who could compete with me.
                      A 99 overall would be posted for auction at 101 coins, and 9 times out of 10 I would be the one who was the first to purchase it and sell for millions of coins.
                      <br></br>
                      <br></br>

                      </p>
                      
                      <span id="wrapper">
                    
                    <img id="blurred" src={sonic3} alt="" />
                    <img id="cover" src={sonic3} alt="" />
                    
                    </span>
                     
                    <p>
                      After establishing a name for myself in the community via Instagram and other social media platforms, I began selling my in-game coins to people who were seeking to buy better players, and create a stronger team for themselves.
                      I amassed over 15,000 followers and became the most trusted coin seller in the community, with hundreds of customers weekly. 
                      
                      <br></br><br></br>This domination continued to reign for two years, until the developers of the game, "EA Sports", finally figured out how to remove this ability for "bots" to function. They would continuously attempt
                      to fix this, but I would go into the app files to revert whatever "fix" they hoped could stop me.
                      
                    </p>
                    
                    
                   
                    
                      
                    </Tab.Pane>
                    
                   
                    <Tab.Pane eventKey="second">
                      <h2>Full Stack Application</h2>
                      <p>Here is a sleep analsyis web application I designed and created for a client. They wanted to be able to connect their Oura Ring with their account, which is a popular sleep tracking device. <br></br><br></br>The data was then analyzed through a machine learning algorithm utilizing the python library, "pandas", and an overall sleep quality report was given to the user.
                        
                        </p>
                      <img src={sleep}></img>
                        <p>
                          <br></br>
                      <h2>What did I use to create this?</h2>
                        <br></br>
                       I utilized <u><strong>PostgreSQL</strong></u> to store the user and account information securely, <u><strong>FLASK</strong></u> to create and navigate app routes, and <u><strong>Bootstrap</strong></u> to create the visually pleasing aesthetic I insisted on having!
                    </p>

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h2>Backend</h2>
                      <p>I created a fully functional compiler from scratch, that took in a modified version of the programming language "C" and output 6502 OpCodes. 
                        The code generated was then ran through an operating system, 
                        and if the program passed all four stages of compilation, the OS would output the correct result.<br></br><br></br>
                        Here is the LL1 grammar this compiler was based around as well as a sample input program.
                      <img src={compiler9}></img><br></br><br></br>
                      <img src={compiler8}></img>

<br></br>
                      After passing the Lexical Analysis, Parsing, and Semantic Analysis stages (as well as creating Abstract and Concrete Syntax Trees), the code is finally generated!
                      
                      <img src={compiler6}></img>
                      
<br></br><br></br>
                     
                      <img src={compiler7}></img>


                         </p>
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
         
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>

    </section>
  )
}