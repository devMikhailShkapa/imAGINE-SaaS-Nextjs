import React from 'react'
import Head from 'next/head'

import Layout from "../components/layout/layout";
import Hero from "../components/hero";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import { Row, Col, Container } from 'reactstrap'
import Link from 'next/link'

import feature03 from "../public/images/feature03.svg"
import feature01 from "../public/images/feature01.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faCalculator, faUsers, faGift, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const Features = () => (
  <div className="features">
    <Head>
      <title>Features | imGINE</title>
    </Head>

    <Layout>
      <Hero />
      
      <div className="list">
        <Container>
          <Row>
            <Col>
              <div className="item text-center">
                <FontAwesomeIcon icon={faClipboardList} className="font-icon"/>
                <div className="name">
                  <strong>CHECKLIST</strong>
                </div>
                <Link href="/"><a className="view">view -></a></Link>
              </div>
            </Col>
            <Col>
              <div className="item text-center">
                <FontAwesomeIcon icon={faCalculator} className="font-icon"/>
                <div className="name">
                  <strong>CHECKLIST</strong>
                </div>
                <Link href="/"><a className="view">view -></a></Link>
              </div>
            </Col>
            <Col>
              <div className="item text-center">
                <FontAwesomeIcon icon={faUsers} className="font-icon"/>
                <div className="name">
                  <strong>CHECKLIST</strong>
                </div>
                <Link href="/"><a className="view">view -></a></Link>
              </div>
            </Col>
            <Col>
              <div className="item text-center">
                <FontAwesomeIcon icon={faGift} className="font-icon"/>
                <div className="name">
                  <strong>CHECKLIST</strong>
                </div>
                <Link href="/"><a className="view">view -></a></Link>
              </div>
            </Col>
            <Col>
              <div className="item text-center">
                <FontAwesomeIcon icon={faCalendarCheck} className="font-icon"/>
                <div className="name">
                  <strong>CHECKLIST</strong>
                </div>
                <Link href="/"><a className="view">view -></a></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="compare">
        <Container>
          <Row>
            <Col className="text-center">
              <h3>Compare credit cards</h3>
              <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <p className="description"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</i></p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="score">
        <Container>
          <Row>
            <Col>
              <h3>
                You could get better offers by imporvongio your credit
              </h3>
              <div className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="description">
                <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i>
              </div>
              <Link href="/"><a className="btn fill-btn">Get my score</a></Link>
            </Col>
              
            <Col className="text-center">
              <img src={feature03} alt="image" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="purchase">
        <Container>
          <Row>
            <Col>
              <h3>You could get better offer</h3>
              <p>You could get better offers by imporvongio your creditYou could get better offers by imporvongio your creditYou could get better offers by imporvongio your credit</p>
              <p>You could get better offers by imporvongio your creditYou could get better offers by imporvongio your creditYou could get better offers by imporvongio your credit</p>
            </Col>
            <Col className="text-center">
              <img src={feature01} alt="image" />
              <Link href="/"><a className="btn fill-btn">Find Balance</a></Link>
            </Col>
            <Col>
              <h3>You could get better offer</h3>
              <p>You could get better offers by imporvongio your creditYou could get better offers by imporvongio your creditYou could get better offers by imporvongio your credit</p>
              <p>You could get better offers by imporvongio your creditYou could get better offers by imporvongio your creditYou could get better offers by imporvongio your credit</p>
            </Col>
            <Col className="text-center">
              <img src={feature01} alt="image" />
              <Link href="/"><a className="btn fill-btn">Find Balance</a></Link>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="credit-card">
        <Container>
          <Row>
            <Col>
              <h3>You could get better offers by imporvongio your credit</h3>
              <div className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <Link href="/"><a className="btn line-btn">Find out more</a></Link>
            </Col>
              
            <Col className="text-center">
              <img src={feature03} alt="image" />
            </Col>
          </Row>

          <hr />

          <Row>
            <Col className="text-center">
              <img src={feature03} alt="image" />
            </Col>
            <Col>
              <h3>You could get better offers by imporvongio your credit</h3>
              <div className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <Link href="/"><a className="btn line-btn">Find out more</a></Link>
            </Col>
          </Row>
          
          <hr />
          
          <Row>
            <Col>
              <h3>You could get better offers by imporvongio your credit</h3>
              <div className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <Link href="/"><a className="btn line-btn">Find out more</a></Link>
            </Col>
              
            <Col className="text-center">
              <img src={feature03} alt="image" />
            </Col>
          </Row>
        </Container>
      </div>

      <DemoRequest />
      <SliderFlow />
    </Layout>
  </div>
)

export default Features
