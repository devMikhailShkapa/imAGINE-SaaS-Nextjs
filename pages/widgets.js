import React, { useState } from 'react'
import Head from 'next/head'

import Layout from "../components/layout/layout";
import Hero from "../components/hero";
import Brands from "../components/brands";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import Link from 'next/link'

import feature03 from "../public/images/feature03.svg"

import { Row, Col, Container } from 'reactstrap';

const Widgets = () => {
  return (
  <div className="widgets">
    <Head>
      <title>Widgets | imGINE</title>
    </Head>

    <Layout>
      
      <Hero />
      <Brands />

		<div className="free">
			<Container className="text-center">
				<h3 className="text-center py-3">Free</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<Row>
					<Col>
						<img src={feature03} alt="image" />
					</Col>
					<Col>
						<img src={feature03} alt="image" />
					</Col>
					<Col>
						<img src={feature03} alt="image" />
					</Col>
					<Col>
						<img src={feature03} alt="image" />
					</Col>
				</Row>
				<Row>
					<Col>
						<img src={feature03} alt="image" />
					</Col>
					<Col>
						<img src={feature03} alt="image" />
					</Col>
					<Col>
						<img src={feature03} alt="image" />
					</Col>
					<Col>
						<img src={feature03} alt="image" />
					</Col>
				</Row>
			</Container>
		</div>

		<div className="premium text-center">
			<Container>
				<h3 className="text-center py-3">Premium</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<Row>
					<Col>
						<img src={feature03} alt="image" />
					</Col>
					<Col>
						<img src={feature03} alt="image" />
					</Col>
					<Col>
						<img src={feature03} alt="image" />
					</Col>
					<Col>
						<img src={feature03} alt="image" />
					</Col>
				</Row>
				<Row>
					<Col>
						<img src={feature03} alt="image" />
					</Col>
					<Col>
						<img src={feature03} alt="image" />
					</Col>
					<Col>
						<img src={feature03} alt="image" />
					</Col>
					<Col>
						<img src={feature03} alt="image" />
					</Col>
				</Row>
			</Container>
		</div>

      <DemoRequest />
      <SliderFlow />
    </Layout>
  </div>
)}

export default Widgets
