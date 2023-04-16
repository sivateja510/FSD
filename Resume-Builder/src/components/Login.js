import React from "react";
import '../App.css';
import '../components/resume.css';
import { Container, Row, Col, Form, Button, Nav, Navbar } from 'react-bootstrap';

const Login=()=>{


  const inputStylee = {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    marginBottom: "15px",
    width: "50%",
  };
    return (
        <div id='conta1' >
        
        <div id='home'>
        <Container fluid>
          <Row>
            <Col md={6} className="mx-auto">
              <div className="card">
                <div className="card-body">
                  <h1 id='backk'>Login</h1>
                  <form>
                    <div id='marg'>
                      <label id='labelStyle'>Username</label>
                      <input  type="text" name="email" placeholder="UserName" style={inputStylee} />
                    </div>
                    <div id='marg'>
                      <label id='labelStyle'>Password</label>
                      <input  type="password" name="phone" placeholder="Password" style={inputStylee}  />
                    </div>
                    
                    <button variant="primary" type="submit" className='btn'>Login</button>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
          <div>
          </div>
        </div>
      </div>
    );
}
export default Login;