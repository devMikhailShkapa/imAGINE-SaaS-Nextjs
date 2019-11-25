import React, { useState } from 'react'
import Head from 'next/head'

import Layout from "../components/layout/layout";
import Hero from "../components/hero";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import Link from 'next/link'

import instagram from "../public/images/instagram.png"

import { Row, Col, Container } from 'reactstrap';

const Clients = () => {
  return (
  <div className="clients">
    <Head>
      <title>Clients | imGINE</title>
    </Head>

    <Layout>
      
      <Hero />

		<div className="corporate">
			<Container>
				<h3 className="text-center">Corporate Offices</h3>
				<Row>
					<Col>
						<div className="text-center"><img src={instagram} alt="image" /></div>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
						<div className="company">HP</div>
						<div className="man-name">LUKE THOMAS</div>
						<div className="man-position">Senior Technology Strategist</div>
					</Col>
					<Col>
						<div className="text-center"><img src={instagram} alt="image" /></div>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
						<div className="company">HP</div>
						<div className="man-name">LUKE THOMAS</div>
						<div className="man-position">Senior Technology Strategist</div>
					</Col>
					<Col>
						<div className="text-center"><img src={instagram} alt="image" /></div>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
						<div className="company">HP</div>
						<div className="man-name">LUKE THOMAS</div>
						<div className="man-position">Senior Technology Strategist</div>
					</Col>
				</Row>
			</Container>
		</div>

		<div className="hospitality">
			<Container>
				<h3 className="text-center">Hospitality & Entertainment</h3>
				<Row>
					<Col>
						<div className="text-center"><img src={instagram} alt="image" /></div>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
						<div className="company">HP</div>
						<div className="man-name">LUKE THOMAS</div>
						<div className="man-position">Senior Technology Strategist</div>
					</Col>
					<Col>
						<div className="text-center"><img src={instagram} alt="image" /></div>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
						<div className="company">HP</div>
						<div className="man-name">LUKE THOMAS</div>
						<div className="man-position">Senior Technology Strategist</div>
					</Col>
					<Col>
						<div className="text-center"><img src={instagram} alt="image" /></div>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
						<div className="company">HP</div>
						<div className="man-name">LUKE THOMAS</div>
						<div className="man-position">Senior Technology Strategist</div>
					</Col>
				</Row>
			</Container>
		</div>

		<div className="retail">
			<Container>
				<h3 className="text-center">Retail</h3>
				<Row>
					<Col>
						<div className="text-center"><img src={instagram} alt="image" /></div>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
						<div className="company">HP</div>
						<div className="man-name">LUKE THOMAS</div>
						<div className="man-position">Senior Technology Strategist</div>
					</Col>
					<Col>
						<div className="text-center"><img src={instagram} alt="image" /></div>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
						<div className="company">HP</div>
						<div className="man-name">LUKE THOMAS</div>
						<div className="man-position">Senior Technology Strategist</div>
					</Col>
					<Col>
						<div className="text-center"><img src={instagram} alt="image" /></div>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
						<div className="company">HP</div>
						<div className="man-name">LUKE THOMAS</div>
						<div className="man-position">Senior Technology Strategist</div>
					</Col>
				</Row>
			</Container>
		</div>

      <DemoRequest />
      <SliderFlow />
    </Layout>
  </div>
)}

export default Clients
