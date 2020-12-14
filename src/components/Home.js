import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Image, Grid, Segment, Container, List, Header, Divider } from 'semantic-ui-react';

export default class Home extends Component {
    render() {
        return (
          <div>
            <Grid  className='home-content'>
              <Grid.Row>
                <Grid.Column width={16}>
                  <Carousel autoPlay={true} interval={2000} showArrows={true} dynamicHeight={true} showThumbs={false} swipeable={true} infiniteLoop={true} showIndicators={false} emulateTouch={true} className="presentation-mode">
                    <div>
                        <img src="construction.jpg"/>
                    </div>
                    <div>
                        <img src="construction1.jpg"/>
                    </div>
                    <div>
                        <img src="interior.png" />
                    </div>
                    <div>
                        <img src="interior1.jpg" />
                    </div>
                    <div>
                        <img src="interior2.jpg" />
                    </div>
                    <div>
                        <img src="interior3.jpg" />
                    </div>
                  </Carousel>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                <Container text>
                  <h3 className="company-info">
                  1976 EAE Corporation  has the very self-motivated history since it started construction business in  2016. 
The company is a new business establishment engaging in the Construction and General Merchandise known for its quality of its work and promoting and excellence of its workforce for engineering and construction services
</h3><h3 className="company-info">
With the expertise of during construction over the years as our past business we already built some houses, schools and renovation of condominium unit.
We would appreciate very much if you give us the opportunity to prove our competence.
                  </h3>
                </Container>
                </Grid.Column>
              </Grid.Row>
              <br></br>
              <br></br>
              <br></br>
              <Grid.Row>
                <Grid.Column width={7}>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h2' dividing textAlign='center' className="our-team-text">
                      Our Team
                    </Header>
                </Grid.Column>
                <Grid.Column width={7}>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={2}></Grid.Column>
                <Grid.Column width={12}>
                  <Carousel autoPlay={true} interval={3000} showArrows={true} dynamicHeight={true} showThumbs={false} swipeable={true} infiniteLoop={true} showIndicators={false} emulateTouch={true}>
                    <div className="our-team"> 
                        <img src="team3.jpg" className="our-team"/>
                    </div>
                    <div className="our-team"> 
                        <img src="team4.jpg" className="our-team"/>
                    </div>
                    <div className="our-team"> 
                        <img src="team5.jpg" className="our-team"/>
                    </div>
                    <div className="our-team"> 
                        <img src="team6.jpg" className="our-team"/>
                    </div>
                    <div className="our-team"> 
                        <img src="team7.jpg" className="our-team"/>
                    </div>
                  </Carousel>
                </Grid.Column>
                <Grid.Column width={2}></Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                <Container text>
                  <h3 className="company-info">
                    Our people are who ultimately set us apart from other builders. 1976 EAE employs incredible individuals with the same vision – to build exceptional projects alongside an exceptional team. We believe in hard work, integrity, and lasting relationships. Throughout our 4 years of building custom homes, we have maintained a culture of collaboration, uncompromised quality, continuous improvement and a true desire to master our craft.
                  </h3>
                </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign='center'>
              <Grid divided inverted stackable>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Group 1' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Group 2' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Group 3' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header inverted as='h4' content='Footer Header' />
                  <p>
                    Extra space for a call to action inside the footer that could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid>
                    
              <Divider inverted section />
              <Image centered size='mini' src='/logo.png' />
              <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='#'>
                  Site Map
                </List.Item>
                <List.Item as='a' href='#'>
                  Contact Us
                </List.Item>
                <List.Item as='a' href='#'>
                  Terms and Conditions
                </List.Item>
                <List.Item as='a' href='#'>
                  Privacy Policy
                </List.Item>
              </List>
            </Container>
            </Segment>
          </div>
        );
    }
}