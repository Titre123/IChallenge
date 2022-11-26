import React, {useState} from "react";
import Nav from "../Navbar/Navbar";
import { Row, Col, Card, CardBody, Container } from "reactstrap";
import SideNav from "../Sidebar/SideNav";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";
import "./Dashboard.styles.scss";


const DashboardPage = () => {

    return(
        <div className="Dashboard">
            <div className="sideBar"><SideNav /></div>
            <Container className="bd">
                <div className="Dashboard_body">
                    <Nav />
                </div>
                <Row>
                    {/* fisrt colume for the number and chart*/}
                    <Col md="8" sm="12" className="col1">
                        <Row>
                            <Col md="4" sm="12" className="user_numbers">
                                <Card>
                                    <CardBody className="body_B">
                                        <div className="head">
                                            <h5>Daily Commit</h5>
                                            <AiFillQuestionCircle  className="head_text" style={{color: "#CCCCCC", width: "50px", height: "50px"}}/>
                                        </div>
                                        <p className="stat">200k</p>
                                        <p className="graph"><BiTrendingUp  className="icon_bg"/> + 50,3% <span style={{color: "#CCCCCC"}}>vs last week</span></p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4" sm="12" className="user_numbers">
                                <Card>
                                    <CardBody className="body_B">
                                        <div className="head">
                                            <h5>Daily Commit</h5>
                                            <AiFillQuestionCircle  className="head_text" style={{color: "#CCCCCC", width: "50px", height: "50px"}}/>
                                        </div>
                                        <p className="stat">200k</p>
                                        <p className="graph"><BiTrendingUp  className="icon_bg"/> + 50,3% <span style={{color: "#CCCCCC"}}>vs last week</span></p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4" sm="12" className="user_numbers">
                                <Card>
                                    <CardBody className="body_B">
                                        <div className="head">
                                            <h5>Daily Commit</h5>
                                            <AiFillQuestionCircle  className="head_text" style={{color: "#CCCCCC", width: "50px", height: "50px"}}/>
                                        </div>
                                        <p className="stat">200k</p>
                                        <p className="graph1"><BiTrendingUp  className="icon_bg1"/> + 50,3% <span style={{color: "#CCCCCC"}}>vs last week</span></p>
                                    </CardBody>
                                </Card>                             
                            </Col>
                        </Row>
                    </Col>
                    {/* pie chart column */}
                    <Col md="4" sm="12" className="col2"></Col>
                </Row>
            </Container>
        </div>
    )
}

export default DashboardPage;