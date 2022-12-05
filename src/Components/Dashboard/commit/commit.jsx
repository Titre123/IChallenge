import React from 'react';
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import "./commit.styles.scss";

const Commits = () => {
    return(
        <Row className='commit'>
            <Col sm="12" md="12" lg="12">
                <Card className='commit_card'>
                    <CardTitle className='commit_title'>GitHub Traffic</CardTitle>
                    <CardBody className='divBody'>
                        <div className="row fill_row">
                            <div className='fill1'></div>
                            <div className='fill'></div>
                            <div className='fill2'></div>
                            <div className='fill2'></div>
                            <div className='fill'></div>
                            <div className='fill2'></div>
                            <div className='date'>3</div>
                        </div>
                        <div className="row fill_row">
                            <div className='fill'></div>
                            <div className='fill2'></div>
                            <div className='fill1'></div>
                            <div className='fill'></div>
                            <div className='fill'></div>
                            <div className='fill'></div>
                            <div className='date'>5</div>
                        </div>
                        <div className="row fill_row">
                            <div className='fill'></div>
                            <div className='fill'></div>
                            <div className='fill1'></div>
                            <div className='fill2'></div>
                            <div className='fill'></div>
                            <div className='fill2'></div>
                            <div className='date'>7</div>
                        </div>
                        <div className="row fill_row">
                            <div className='fill2'></div>
                            <div className='fill'></div>
                            <div className='fill1'></div>
                            <div className='fill'></div>
                            <div className='fill'></div>
                            <div className='fill'></div>
                            <div className='date'>9</div>
                        </div>
                        <div className="row fill_row">
                            <div className='fill'></div>
                            <div className='fill'></div>
                            <div className='fill'></div>
                            <div className='fill2'></div>
                            <div className='fill1'></div>
                            <div className='fill'></div>
                            <div className='date'>11</div>
                        </div>
                        <div className="row fill_row">
                            <div className='fill2'></div>
                            <div className='fill2'></div>
                            <div className='fill'></div>
                            <div className='fill'></div>
                            <div className='fill2'></div>
                            <div className='fill1'></div>
                            <div className='date'>13</div>
                        </div>
                        <div className="row fill_row">
                            <div className='fill2'></div>
                            <div className='fill'></div>
                            <div className='fill1'></div>
                            <div className='fill2'></div>
                            <div className='fill2'></div>
                            <div className='fill1'></div>
                            <div className='date'>15</div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Commits;