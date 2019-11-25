import React, { useState } from 'react'
import Head from 'next/head'

import Layout from "../components/layout/layout";
import Hero from "../components/hero";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import Link from 'next/link'

import daniil01 from "../public/images/daniil01.jpg"
import daniil02 from "../public/images/daniil02.jpg"
import daniil03 from "../public/images/daniil03.jpg"
import daniil04 from "../public/images/daniil04.jpg"

import { Row, Col, Container } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const AboutUs = () => {

  return (
  <div className="about">
    <Head>
      <title>About Us | imGINE</title>
    </Head>

    <Layout>
      
      <Hero />

		<div className="us">
			<Container>
				<h3 className="text-center my-3">About Us</h3>
				<Row>
					<Col md="4" className="pl-5">
						Our Mission
					</Col>
					<Col md="8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Col>
				</Row>
				<Row>
					<Col md="4" className="pl-5">
						Why us?
					</Col>
					<Col md="8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</Col>
				</Row>
				<Row>
					<Col md="4" className="pl-5">
						The Founder
					</Col>
					<Col md="8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Col>
				</Row>
			</Container>
		</div>

		<div className="team">
			<Container>
				<h3 className="text-center my-3">Meet the team</h3>
				<Row>
					<Col>
						<Card>
							<CardImg top className="card-img" src={daniil01} alt="Card image cap" />
							<CardBody>
								<CardTitle>Daniil L</CardTitle>
								<CardSubtitle>Developer</CardSubtitle>
								<CardText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</CardText>
								★★★★★
							</CardBody>
						</Card>
					</Col>
					<Col>
						<Card>
							<CardImg top className="card-img" src={daniil02} alt="Card image cap" />
							<CardBody>
								<CardTitle>Daniil L</CardTitle>
								<CardSubtitle>Developer</CardSubtitle>
								<CardText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</CardText>
								★★★★★
							</CardBody>
						</Card>
					</Col>
					<Col>
						<Card>
							<CardImg top className="card-img" src={daniil03} alt="Card image cap" />
							<CardBody>
								<CardTitle>Daniil L</CardTitle>
								<CardSubtitle>Developer</CardSubtitle>
								<CardText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</CardText>
								★★★★★
							</CardBody>
						</Card>
					</Col>
					<Col>
						<Card>
							<CardImg top className="card-img" src={daniil04} alt="Card image cap" />
							<CardBody>
								<CardTitle>Daniil L</CardTitle>
								<CardSubtitle>Developer</CardSubtitle>
								<CardText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</CardText>
								★★★★★
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>

      <DemoRequest />
      <SliderFlow />
    </Layout>
  </div>
)}

export default AboutUs
