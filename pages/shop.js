import React from 'react'
import Head from 'next/head'

import Layout from "../components/layout/layout";
import Hero from "../components/hero";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import Link from 'next/link'
import { Container, Row, Col } from 'reactstrap'

import instagram from "../public/images/instagram.png"
import feature03 from "../public/images/feature01.png"
import feature01 from "../public/images/feature03.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoundSign } from '@fortawesome/free-solid-svg-icons'

const Shop = () => (
  <div className="shop">
    <Head>
      <title>Shop | imAGINE</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Layout>
      <Hero />

      <div className="compare">
	      <Container>
		      <Row>
		      	<Col>
		      		<h3 className="text-center py-3">Compare the best Pay Monthly phone deals</h3>
		      	</Col>
		      </Row>

		      <Row>
		      	<Col md="2" className="sidebar text-center">
		      		<div className="top-square">Filter the results</div>
		      		<Link href="/"><a className="btn line-btn">Lorem ipsum</a></Link>
		      		<Link href="/"><a className="btn fill-btn">Lorem ipsum</a></Link>
		      		<Link href="/"><a className="btn line-btn">Lorem ipsum</a></Link>

		      		<h6>Phone details</h6>
		      		<h6>Cost details</h6>
		      	</Col>

		      	<Col md="10" className="items">
		      		<Row className="item">
		      			<Col className="section1">
		      				<img src={feature01} alt="image" />
		      			</Col>
		      			<Col className="section2">
		      				<img src={feature03} alt="image" />
		      			</Col>
		      			<Col className="section3">
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      			</Col>
		      			<Col className="section4">
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      			</Col>
		      			<Col className="section5">
		      				<p><FontAwesomeIcon icon={faPoundSign} className="awesome-font" className="awesome-font" />36</p>
		      				<p>per month</p>
		      				<p>$70 upfront</p>
		      				<p>Total: $1000</p>
		      			</Col>
		      			<Col className="section6 text-center">
		      				<img src={instagram} alt="image" />
		      				<Link href="/"><a className="btn fill-btn">Visit Now</a></Link>
		      			</Col>
		      		</Row>

		      		<Row className="item">
		      			<Col className="section1">
		      				<img src={feature01} alt="image" />
		      			</Col>
		      			<Col className="section2">
		      				<img src={feature03} alt="image" />
		      			</Col>
		      			<Col className="section3">
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      			</Col>
		      			<Col className="section4">
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      			</Col>
		      			<Col className="section5">
		      				<p><FontAwesomeIcon icon={faPoundSign} className="awesome-font" className="awesome-font" />36</p>
		      				<p>per month</p>
		      				<p>$70 upfront</p>
		      				<p>Total: $1000</p>
		      			</Col>
		      			<Col className="section6 text-center">
		      				<img src={instagram} alt="image" />
		      				<Link href="/"><a className="btn fill-btn">Visit Now</a></Link>
		      			</Col>
		      		</Row>

		      		<Row className="item">
		      			<Col className="section1">
		      				<img src={feature01} alt="image" />
		      			</Col>
		      			<Col className="section2">
		      				<img src={feature03} alt="image" />
		      			</Col>
		      			<Col className="section3">
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      			</Col>
		      			<Col className="section4">
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      				<p>Lorem ipsum</p>
		      			</Col>
		      			<Col className="section5">
		      				<p><FontAwesomeIcon icon={faPoundSign} className="awesome-font" className="awesome-font" />36</p>
		      				<p>per month</p>
		      				<p>$70 upfront</p>
		      				<p>Total: $1000</p>
		      			</Col>
		      			<Col className="section6 text-center">
		      				<img src={instagram} alt="image" />
		      				<Link href="/"><a className="btn fill-btn">Visit Now</a></Link>
		      			</Col>
		      		</Row>
		      	</Col>
		      </Row>
	      </Container>
      </div>

      <DemoRequest />
      <SliderFlow />
    </Layout>
  </div>
)

export default Shop
