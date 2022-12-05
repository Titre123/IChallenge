import { React, useEffect } from "react"
import { Button, Col, Row, Card, CardBody, Form, FormGroup, InputGroup, Input, FormText } from "reactstrap";
import "./sign.styles.scss";
import { GiSlumberingSanctuary } from "react-icons/gi";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGitHub } from '../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase"

const SignIn = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
        // maybe trigger a loading screen
        return;
        }
        if (user) navigate("/");
        }, [user, loading]);

    const handleSubmit = (event) => {
        event.preventDefault();

    }
    const [ Type, setType ] = useState(false);
    const toggle = () => setType(!Type)
    let type;

    if (Type == true) {
        type = "text"
    } else {
        type = "password"
    }

    return(
        <div className="Sign_up">
            <Row className="sign_row">
                <Col md="6" sm="12" className="sign_col1">
                    <div>
                        <div className="d-flex align-items-center name_heading">
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
                </Col>
                <Col md="6" sm="12" className="sign_col2">
                    <Card className="sign_form">
                        <CardBody className="sign_card_body">
                            <h2>Sign In</h2>
                            <p>Don't have an account? <Link to="/signUp" className="signup_link"> sign up</Link></p>
                            <Form onSubmit={() => handleSubmit}>
                                <FormGroup className="card_form_group">
                                    <Input type="email" placeholder="Enter your email" className="input-input" name="email" required />
                                </FormGroup>
                                <FormGroup className="card_form_group1">
                                    <InputGroup className="i_group">
                                        <Input type={type} placeholder="password" className="input-input" name="password" required />
                                        <AiFillEye className="eye" onClick={toggle}/>
                                    </InputGroup>
                                </FormGroup>
                                <div><FormText><a href="#" className="f_password">Forgot password?</a></FormText></div>
                                <Link to="/dashboard"><Button type="submit" value="submit" className="form_submit_btn">Submit</Button></Link>
                            </Form>
                            <div className="line">
                                <hr style={{width:"50%", marginRight: "4px"}}/> or <hr style={{width:"50%", marginLeft: "4px"}}/>
                            </div>
                            <div className="auth-btn">
                                <Button className="git" onClick={signInWithGitHub}><AiFillGithub  style={{width: "30px", height: "30px"}} /> Continue with GitHub</Button>
                            </div>
                            <hr />
                            <div className="c_write">
                                <p>Protected by recaptcha and subject to the  <span className="c_color">Fenkai Privacy Policy</span> and <span className="c_color">Terms of Service</span>.</p>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default SignIn