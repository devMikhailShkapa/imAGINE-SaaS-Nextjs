import React, { useState } from 'react'
import Head from 'next/head'

import Layout from "../components/layout/layout";
import Hero from "../components/hero";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import Link from 'next/link'

import instagram from "../public/images/instagram.png"

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
const Blog = () => {
	const [activeTab, setActiveTab] = useState('1');

	const toggle = tab => {
		if(activeTab !== tab) setActiveTab(tab);
	}

  return (
  <div className="blog">
    <Head>
      <title>Blog | imGINE</title>
    </Head>

    <Layout>
      
      <Hero />

      <div className="articles">
        <Container>
          <Row>
            <Col md="8">
              <img src={instagram} alt="image" />
              <h2>Contact the team</h2>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Col>
            <Col md="4">
            	<div>
            		<img src={instagram} alt="image" />
            		<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            	</div>
            	<div>
            		<img src={instagram} alt="image" />
            		<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            	</div>
            </Col>
          </Row>
        </Container>
      </div>

		<div className="tab-gallery">
		<Container>
			<Nav tabs>
				<NavItem>
					<NavLink
					className={classnames({ active: activeTab === '1' })}
					onClick={() => { toggle('1'); }}
					>
						<strong>Tools & calculators</strong>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
					className={classnames({ active: activeTab === '2' })}
					onClick={() => { toggle('2'); }}
					>
						<strong>Money made easy</strong>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
					className={classnames({ active: activeTab === '3' })}
					onClick={() => { toggle('3'); }}
					>
						<strong>Money made easy</strong>
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={activeTab}>
				<TabPane tabId="1">
					<Row className="mt-4">
					<Col className="item">
						<img src={instagram} alt="image" />
						<h4>Lorem ipsum</h4>
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</Col>
					<Col className="item">
						<img src={instagram} alt="image" />
						<h4>Lorem ipsum</h4>
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</Col>
					<Col className="item">
						<img src={instagram} alt="image" />
						<h4>Lorem ipsum</h4>
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</Col>
					</Row>

					<Row className="mt-4">
					<Col className="item">
						<img src={instagram} alt="image" />
						<h4>Lorem ipsum</h4>
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</Col>
					<Col className="item">
						<img src={instagram} alt="image" />
						<h4>Lorem ipsum</h4>
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</Col>
					<Col className="item">
						<img src={instagram} alt="image" />
						<h4>Lorem ipsum</h4>
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</Col>
					</Row>
				</TabPane>

				<TabPane tabId="2">
					<Row className="mt-4">
					<Col className="item">
						<img src={instagram} alt="image" />
						<h4>Lorem ipsum</h4>
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</Col>
					<Col className="item">
						<img src={instagram} alt="image" />
						<h4>Lorem ipsum</h4>
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</Col>
					<Col className="item">
						<img src={instagram} alt="image" />
						<h4>Lorem ipsum</h4>
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</Col>
					</Row>
				</TabPane>

				<TabPane tabId="3">
					<Row className="mt-4">
					<Col className="item">
						<img src={instagram} alt="image" />
						<h4>Lorem ipsum</h4>
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</Col>
					<Col className="item">
						<img src={instagram} alt="image" />
						<h4>Lorem ipsum</h4>
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</Col>
					<Col className="item">
						<img src={instagram} alt="image" />
						<h4>Lorem ipsum</h4>
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</Col>
					</Row>
				</TabPane>
			</TabContent>
		</Container>
		</div>

      <div className="latest">
        <Container>
          <Row>
            <Col>
              <img src={instagram} alt="image" />
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Col>
            <Col>
              <img src={instagram} alt="image" />
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Col>
            <Col>
              <img src={instagram} alt="image" />
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Col>
            <Col>
              <img src={instagram} alt="image" />
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Col>
            <Col>
              <img src={instagram} alt="image" />
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Col>
            <Col>
              <img src={instagram} alt="image" />
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Col>
          </Row>
        </Container>
      </div>

      <DemoRequest />
      <SliderFlow />
    </Layout>
  </div>
)}

export default Blog
