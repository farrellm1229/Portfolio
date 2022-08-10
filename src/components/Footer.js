import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/resumeSymbol.svg';
import resume from "../assets/img/Resume.pdf";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <a href="#home"></a><img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href={resume} target="_blank"><img src={navIcon4} alt="Icon" /></a>
                <a href="https://www.instagram.com/matt_farrell_/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
                <a href="https://www.linkedin.com/in/matt-farrell-b70aa0205/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
