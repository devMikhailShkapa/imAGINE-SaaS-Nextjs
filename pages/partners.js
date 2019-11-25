import React, { useState } from 'react'
import Head from 'next/head'

import Layout from "../components/layout/layout";
import Hero from "../components/hero";
import Brands from "../components/brands";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import Link from 'next/link'

import instagram from "../public/images/instagram.png"

import { Row, Col, Container } from 'reactstrap';

import Lottie from 'react-lottie';
import * as starsLottie from '../public/animations/stars.json'

const Partners = () => {
	const starsLottieOptions = {
      loop: true,
      autoplay: true, 
      animationData: starsLottie.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  return (
  <div className="partners">
    <Head>
      <title>Partners | imGINE</title>
    </Head>

    <Layout>
      
      <Hero />
      <Brands />

		<div className="reviews">
			<Container>
				<Row>
				<Col className="text-center">
					<h3>5star reviews</h3>
					<Lottie options={starsLottieOptions}
					height={65}
					width={200} />
				</Col>
				</Row>

				<Row>
					<Col>
						<p>"Paul and his team are always a pleasure to work with, nothing is too much trouble, and I can trust they will always deliver."</p>
						<span>★★★★★</span>
						<div className="client-name">Daniil</div>
						<div className="client-position">Freelancer</div>
					</Col>

					<Col>
						<p>"Paul and his team are always a pleasure to work with, nothing is too much trouble, and I can trust they will always deliver."</p>
						<span>★★★★★</span>
						<div className="client-name">Daniil</div>
						<div className="client-position">Freelancer</div>
					</Col>
				</Row>
			</Container>
		</div>

		<div className="reseller-benefit">
			<Container>
				<Row>
					<Col>
						<h4 className="text-center">Reseller Benefits</h4>
						<Row className="mt-4">
							<Col>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</Col>

							<Col>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</Col>
						</Row>
						<Row className="mt-4">
							<Col>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</Col>
							
							<Col>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</Col>
						</Row>
					</Col>

					<Col>
						<img src={instagram} alt="image" />
					</Col>
				</Row>
			</Container>
		</div>

      <DemoRequest />
      <SliderFlow />
    </Layout>
  </div>
)}

export default Partners
