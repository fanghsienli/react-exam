import * as React from "react";

/** Context */
/** Presentation */
import { Wrapper, ProgressCircle, LeftHalfClipper, First50Bar, ValueBar } from "../components/Styles";
import { Container, Row, Col } from "react-bootstrap";
import './RootContainer.css'


function RootContainer() {
    return (
        <Wrapper>
            <Container className="root " >
                <Row>
                    <Col sm={2}>
                        <Container className="nav">
                            <Row>
                                <Col md={12} xs={6}>
                                    <ProgressCircle>
                                        <span className="title">ACCURACY</span>
                                        <span className="value">75
                                            <span className="percent">%</span>
                                        </span>
                                        <LeftHalfClipper>
                                            <First50Bar></First50Bar>
                                            <ValueBar></ValueBar>
                                        </LeftHalfClipper>
                                    </ProgressCircle>
                                </Col>
                                <Col md={12} xs={6}>
                                    <Container>
                                        <Row className="info">
                                            <Col md={12} sm={6}>
                                                <Container className="info">
                                                    <Row>
                                                        <span className="title">COMPLETE</span>
                                                    </Row>
                                                    <Row>
                                                        <span className="value">100
                                                            <span className="percent">PROBLEMS</span>
                                                        </span>
                                                    </Row>
                                                </Container>
                                            </Col>
                                            <Col md={12} sm={6}>
                                                <Container>
                                                    <Row>
                                                        <span className="title">CORRECT</span>
                                                    </Row>
                                                    <Row>
                                                        <span className="value">75
                                                            <span className="percent">PROBLEMS</span>
                                                        </span>
                                                    </Row>
                                                </Container>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm={10}>
                        <Container className="content">
                            <Row>
                                <Col md={12} xs={6}></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default RootContainer;
