import React from 'react'
import Head from 'next/head'

import Layout from "../components/layout/layout";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import { Row, Col, Container } from 'reactstrap'
import Link from 'next/link'

import instagram from "../public/images/instagram.png"

import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import UseAnimations from 'react-useanimations'

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
)

const Contact = () => (
  <div className="contact">
    <Head>
      <title>Contact | imGINE</title>
    </Head>

    <Layout>
      
      <div className="google-map">
	    <MyMapComponent
	        isMarkerShown = { true }
	    />
	  </div>

      <div className="contact-team">
        <Container>
          <Row>
            <Col className="text-center">
              <h2>Contact the team</h2>
              <p className="description1">Contact the team Contact the team Contact the team C team Contact the team Contact the team C ontact the team Contact the team Contact the team</p>
              <p className="description2">Contact the team Contact the team Contact the team Contact the team Contact the team</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="what">
        <Container>
          <Row>
            <Col className="text-center">
              <h3>What do you want to do?</h3>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="item text-center">
              	<img src={instagram} alt="image" />
              	<p className="name">General enquiry</p>
              </div>
            </Col>
            <Col>
              <div className="item text-center">
              	<img src={instagram} alt="image" />
              	<p className="name">General enquiry</p>
              </div>
            </Col>
            <Col>
              <div className="item text-center">
              	<img src={instagram} alt="image" />
              	<p className="name">General enquiry</p>
              </div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <div className="item text-center">
              	<img src={instagram} alt="image" />
              	<p className="name">General enquiry</p>
              </div>
            </Col>
            <Col>
              <div className="item text-center">
              	<img src={instagram} alt="image" />
              	<p className="name">General enquiry</p>
              </div>
            </Col>
            <Col>
              <div className="item text-center">
              	<img src={instagram} alt="image" />
              	<p className="name">General enquiry</p>
              </div>
            </Col>
          </Row>

        </Container>
      </div>

      <div className="otherways">
      	<Container>
			<Row>
				<Col className="text-center">
					<h3>Other ways to contact us</h3>
				</Col>
			</Row>
      		<Row className="block">
      			<Col md="3" className="p-3 text-center">
      				<img src={instagram} alt="image" />
      				<p><strong>Call us</strong></p>
      			</Col>
      			<Col md="9" className="p-3">
      				<p>Contact the team Contact the team Contact the</p>
      				<p><strong>Contact the team Contact the team Contact the</strong></p>
      				<p>method</p>
      			</Col>
      		</Row>
      		<Row className="block">
      			<Col md="3" className="p-3 text-center">
      				<img src={instagram} alt="image" />
      				<p><strong>Call us</strong></p>
      			</Col>
      			<Col md="9" className="p-3">
      				<p>Contact the team Contact the team Contact the</p>
      				<p><strong>Contact the team Contact the team Contact the</strong></p>
      				<p>method</p>
      			</Col>
      		</Row>
      		<Row className="block">
      			<Col md="3" className="p-3 text-center">
      				<img src={instagram} alt="image" />
      				<p><strong>Call us</strong></p>
      			</Col>
      			<Col md="9" className="p-3">
      				<p>Contact the team Contact the team Contact the</p>
      				<p><strong>Contact the team Contact the team Contact the</strong></p>
      				<p>method</p>
      			</Col>
      		</Row>
      		<Row className="block">
      			<Col md="3" className="p-3 text-center">
      				<img src={instagram} alt="image" />
      				<p><strong>Call us</strong></p>
      			</Col>
      			<Col md="9" className="p-3">
      				<p>Contact the team Contact the team Contact the</p>
      				<p><strong>Contact the team Contact the team Contact the</strong></p>
      				<p>method</p>
      			</Col>
      		</Row>
      	</Container>
      </div>

      <div className="more-help">
      	<Container>
      		<Row>
      			<Col className="text-center">
	      			<h4>How do I find more help?</h4>
	      			<p>If you need more help, our help center has all the information</p>
	      		</Col>
      		</Row>

      		<Row className="pt-5">
      			<Col className="text-center">
	      			<h4>Say hello</h4>
	      			<p>If you need more help, our help center has all the information</p>

	      			<ul className="social">
	    				<li>
	    					<Link href="/"><a><UseAnimations animationKey="facebook" size={50} style={{ "padding": 5 }} /></a></Link>
	    				</li>
	    				<li>
	    					<Link href="/"><a><UseAnimations animationKey="linkedin" size={50} style={{ "padding": 5 }} /></a></Link>
	    				</li>
	    				<li>
	    					<Link href="/"><a><UseAnimations animationKey="twitter" size={50} style={{ "padding": 5 }} /></a></Link>
	    				</li>
	    				<li>
	    					<Link href="/"><a><UseAnimations animationKey="instagram" size={50} style={{ "padding": 5 }} /></a></Link>
	    				</li>
	    			</ul>
	    		</Col>
      		</Row>
      	</Container>
      </div>

      <DemoRequest />
      <SliderFlow />
    </Layout>
  </div>
)

export default Contact
