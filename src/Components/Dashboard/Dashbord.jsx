import React, {useState} from "react";
import Nav from "../Navbar/Navbar";
import { Row, Col, Card, CardBody, Container } from "reactstrap";
import { PieData } from "./pie";
import SideNav from "../Sidebar/SideNav";
import { AiFillQuestionCircle } from "react-icons/ai";
import DChart from "./pieChart";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md"
import "./Dashboard.styles.scss";


const DashboardPage = () => {
    
    const [ pieData, setPieData ] = useState({
        labels: PieData.map((data) => data.label),
        datasets: [{
            label: "statistics",
            data: PieData.map((data) => data.data),
            backgroundColor: ["#FFC152", "#8BBFFD"],
            borderWidth: 10,
            borderColor: "#F0F0F0",
            hoverOffset: 0,
            radius: '70%',
            cutout: '75%'
        }]
    })

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
                            <Col lg="4" md="12" sm="12" className="user_numbers">
                                <Card className="card-card">
                                    <CardBody className="body_B">
                                        <div className="head">
                                            <h5 className="head_text">Daily Commit</h5>
                                            <AiFillQuestionCircle style={{color: "#CCCCCC", width: "30px", height: "30px"}}/>
                                        </div>
                                        <p className="stat">200k</p>
                                        <p className="graph"><BiTrendingUp  className="icon_bg"/> + 50,3% <span style={{color: "#CCCCCC"}}>vs last week</span></p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4" md="12" sm="12" className="user_numbers">
                                <Card className="card-card">
                                    <CardBody className="body_B">
                                        <div className="head">
                                            <h5  className="head_text">Followers</h5>
                                            <AiFillQuestionCircle style={{color: "#CCCCCC", width: "30px", height: "30px"}}/>
                                        </div>
                                        <p className="stat">1.230</p>
                                        <p className="graph"><BiTrendingUp  className="icon_bg"/> + 50,3% <span style={{color: "#CCCCCC"}}>vs last week</span></p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4" md="12" sm="12" className="user_numbers">
                                <Card className="card-card">
                                    <CardBody className="body_B">
                                        <div className="head">
                                            <h5  className="head_text">Repository</h5>
                                            <AiFillQuestionCircle style={{color: "#CCCCCC", width: "30px", height: "30px"}}/>
                                        </div>
                                        <p className="stat">12</p>
                                        <p className="graph1"><BiTrendingDown  className="icon_bg1"/> + 50,3% <span style={{color: "#CCCCCC"}}>vs last week</span></p>
                                    </CardBody>
                                </Card>                             
                            </Col>
                        </Row>
                    </Col>
                    {/* pie chart column */}
                    <Col md="4" sm="12" className="col2">
                        <Row>
                            <Col sm="12" md="12" lg="12">
                                <Card className="card-card1">
                                    <CardBody className="body1">
                                        <div>
                                            <p className="stat_text">GitHub Statistics</p>
                                            <DChart data={pieData} />
                                            <div className="male_stat">
                                                <p style={{textAlign: "center", padding: '15px'}}>
                                                    40 % <br /> <span style={{fontSize: '15px'}}>Male</span>
                                                </p>
                                            </div>
                                            <div className="stat_type">
                                                <div className="d-flex">
                                                    <div className="male">
                                                        <div className="male_color"></div><p className="male_text">Male</p>
                                                    </div>
                                                    <div className="male">
                                                        <div className="female_color"></div> <p className="male_text">Female</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p style={{color: "#CCCCCC"}}>Last 30 days <MdKeyboardArrowDown /> </p>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DashboardPage;