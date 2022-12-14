import React, {useState} from "react";
import { Button, Col, Row, Card, CardBody, Form, FormGroup, InputGroup, Input, FormText } from "reactstrap";
import "./sign.styles.scss";
import { GiSlumberingSanctuary } from "react-icons/gi";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { auth, registerWithEmailANdPassword, signInWithGitHub } from "../../firebase"

const SignIn = () => {
    const [statedType, setstatedType] = useState(false)
    const [input, setInput] = useState({'email': '', 'password': ''})


    const handleSubmit = (event) => {
        event.preventDefault()
        registerWithEmailANdPassword(auth, input.email, input.password)
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
    console.log(input)
    const type = statedType ? 'text' : 'password'
    
    return(
        <div className="Sign_up">
            <div className="sign_row">
                <div></div>
                <div className="col1" style={{'display': 'flex', 'justifyContent': 'center', minWidth: '20em', maxWidth: '25em'}}>
                    <div className="sign_col1">
                    <div className="d-flex align-items-center name_heading" style={{'width': '25em'}}>
                        <GiSlumberingSanctuary className="ic_icon"/>
                        <h2 className="name">IChallenge</h2>
                    </div>
                    <div className="welcome_back">
                        <h2>Welcome <br /> to IChallenge</h2>
                    </div>
                    <div className="text">
                        <p className="paragraph">
                            Stop wasting time with frustrating platforms.<br /> Challenge your colleagues to a coding Challenge and improve your consistency skills and become a better programmer.
                        </p>
                    </div>
                </div>
                </div>
                <div></div>
                <div md="6" sm="12" className="sign_col2">
                    <div></div>
                    <Card className="sign_form">
                        <CardBody className="sign_card_body">
                            <h2>Sign Up</h2>
                            <p>Don't have an account? <Link to="/signIn" className="signup_link"> sign in</Link></p>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup className="card_form_group">
                                    <Input type="email" placeholder="Enter your GitHub email" className="input-input" name="email" onChange={handleChange}  required />
                                </FormGroup>
                                <FormGroup className="card_form_group1">
                                    <InputGroup className="i_group">
                                        <Input type={type} placeholder="password" className="input-input" name="password" onChange={handleChange} required />
                                        <AiFillEye className="eye" onClick={() => setstatedType(!statedType)}/>
                                    </InputGroup>
                                </FormGroup>
                                <div><FormText><a href="#" className="f_password">Forgot password?</a></FormText></div>
                                <Button type="submit" value="submit" className="form_submit_btn">Submit</Button>
                            </Form>
                            <div className="line">
                                <hr style={{width:"50%", marginRight: "4px"}}/> or <hr style={{width:"50%", marginLeft: "4px"}}/>
                            </div>
                            <div className="auth-btn">
                                <Button className="git"><AiFillGithub  style={{width: "30px", height: "30px"}} onClick={signInWithGitHub}/> Continue with GitHub</Button>
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