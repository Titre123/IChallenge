import { React, useEffect } from "react";
import { Button, Col, Row, Card, CardBody, Form, FormGroup, InputGroup, Input, FormText } from "reactstrap";
import "./sign.styles.scss";
import { GiSlumberingSanctuary } from "react-icons/gi";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGitHub, logout } from '../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword } from "../../firebase"
import { useState } from "react";

const SignIn = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const [statedType, setstatedType] = useState(false);
    const [input, setInput] = useState({'email': '', 'password': ''})

    const type = statedType ? 'text' : 'password';

    const handleSubmit = (event) => {
        event.preventDefault()
        logInWithEmailAndPassword(auth, input.email, input.password)
    }

    const handleChange = (e) => {
        const {value, name} = e.target;
        setInput(prev => { 
            return{
                ...prev,
                [name]: value
            }
        })
    }
    useEffect(() => {
        if (loading) {
        // maybe trigger a loading screen
        return;
        }
        if (user) navigate(`/${user.uid}/dashboard`);
        }, [user, loading]);
    return(
        <div className="Sign_up containers">
            <div className="sign_row">
                <div></div>
                <div className="col1" style={{'display': 'flex', 'justifyContent': 'center'}}>
                    <div className="sign_col1">
                    <div className="d-flex align-items-center name_heading" style={{'width': '25em'}}>
                        <GiSlumberingSanctuary className="ic_icon"/>
                        <h2 className="name">IChallenge</h2>
                    </div>
                    <div className="welcome_back">
                        <h2>Welcome back <br /> to IChallenge</h2>
                    </div>
                    <div className="text">
                        <p className="paragraph">
                            Stop wasting time with frustrating platforms.<br /> Challenge your colleagues to a coding Challenge and improve your consistency skills and become a better programmer.
                        </p>
                    </div>
                </div>
                </div>
                <div></div>
                <div className="sign_col2">
                    <div></div>
                    <Card className="sign_form">
                        <CardBody className="sign_card_body">
                            <h2>Sign In</h2>
                            <p>Don't have an account? <Link to="/signUp" className="signup_link"> sign up</Link></p>
                            <Form onSubmit={() => handleSubmit}>
                                <FormGroup className="card_form_group">
                                    <Input type="email" placeholder="Enter your GitHub email" className="input-input" name="email" onChange={handleChange} required />
                                </FormGroup>
                                <FormGroup className="card_form_group1">
                                    <InputGroup className="i_group" >
                                        <Input type={type} placeholder="password" className="input-input" onChange={handleChange} name='password' required />
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
                                <Button className="git" onClick={signInWithGitHub}><AiFillGithub  style={{width: "30px", height: "30px"}} /> Continue with GitHub</Button>
                            </div>
                            <hr />
                            <div className="c_write">
                                <p>Protected by recaptcha and subject to the  <span className="c_color">IChallenge Privacy Policy</span> and <span className="c_color">Terms of Service</span>.</p>
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