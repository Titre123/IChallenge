import React from "react";
import { Button, Col, Row, Card, CardBody, Form, FormGroup, InputGroup, Input, FormText } from "reactstrap";
import "./sign.styles.scss";
import { GiSlumberingSanctuary } from "react-icons/gi";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {

    const [statedType, setstatedType] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    let type;
    if (statedType == true){
        type = 'text';
    }
    else{
        type = 'password'
    }
    return(
        <div className="Sign_up container">
            <div className="sign_row">
                <div></div>
                <div className="col1" style={{'display': 'flex', 'justifyContent': 'center'}}>
                    <div md="6" sm="12" className="sign_col1">
                    <div className="d-flex align-items-center name_heading" style={{'width': '25em'}}>
                        <GiSlumberingSanctuary className="ic_icon"/>
                        <h2 className="name">IChallenge</h2>
                    </div>
                    <div className="welcome_back">
                        <h2>Welcome back <br /> to IChallenge</h2>
                    </div>
                    <div className="text">
                        <p className="paragraph">
                            Stop wasting time with frustrating platforms.<br /> Build beautiful courses & contents with ease. Get started<br /> in minutes with our unique & simple authoring tool. 
                        </p>
                    </div>
                </div>
                </div>
                <div></div>
                <div md="6" sm="12" className="sign_col2">
                    <div></div>
                    <Card className="sign_form">
                        <CardBody className="sign_card_body">
                            <h2>Sign In</h2>
                            <p>Don't have an account? <Link to="/signUp" className="signup_link"> sign up</Link></p>
                            <Form onSubmit={() => handleSubmit}>
                                <FormGroup className="card_form_group">
                                    <Input type="email" placeholder="Enter your email" className="input-input" name="email" required />
                                </FormGroup>
                                <FormGroup className="card_form_group1">
                                    <InputGroup className="i_group" >
                                        <Input type={type} placeholder="password" className="input-input" name='password' required />
                                        <AiFillEye className="eye" onClick={() => setstatedType(prev => !prev)}/>
                                    </InputGroup>
                                </FormGroup>
                                <div><FormText><a href="#" className="f_password">Forgot password?</a></FormText></div>
                                <Button type="submit" value="submit" className="form_submit_btn">Submit</Button>
                            </Form>
                            <div className="line">
                                <hr style={{width:"50%", marginRight: "4px"}}/> or <hr style={{width:"50%", marginLeft: "4px"}}/>
                            </div>
                            <div className="auth-btn">
                                <Button className="git"><AiFillGithub  style={{width: "30px", height: "30px"}}/> Continue with GitHub</Button>
                            </div>
                            <hr />
                            <div className="c_write">
                                <p>Protected by recaptcha and subject to the  <span className="c_color">Fenkai Privacy Policy</span> and <span className="c_color">Terms of Service</span>.</p>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default SignIn