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

const Industries = () => {

  return (
  <div className="industries">
    <Head>
      <title>Industries | imGINE</title>
    </Head>

    <Layout>
      
      <Hero />
      <Brands />

      <div className="reviews">
        <Container>
          <Row>
            <h3>5star reviews</h3>
            {/*<Lottie options={starsLottieOptions}
            height={65}
  width={200} />*/}
          </Row>
          
          <Row>

          </Row>
        </Container>
      </div>

      <DemoRequest />
      <SliderFlow />
    </Layout>
  </div>
)}

export default Industries
