import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Image, Grid, Segment, Container, List, Header, Icon } from 'semantic-ui-react';

export default class Home extends Component {
    render() {
        return (
          <div>
            <Grid>
              <Grid.Row>
                <Grid.Column width={1}></Grid.Column>
                <Grid.Column width={14}>
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
                <Grid.Column width={1}></Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  <Container text>
                    <h3 className="company-info">
                      1976 EAE Corporation  has the very self-motivated history since it started construction business in  2016.
                    </h3>
                    <h3 className="company-info">
                      The company is a new business establishment engaging in the Construction and General Merchandise known for its quality of its work and promoting and excellence of its workforce for engineering and construction services
                    </h3>
                    <h3 className="company-info">
                      With the expertise of during construction over the years as our past business we already built some houses, schools and renovation of condominium unit.
We would appreci  ate very much if you give us the opportunity to prove our competence.
                    </h3>
                  </Container>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
              <Grid.Column width={1}></Grid.Column>
              <Grid.Column width={14} >
                <Image src="interior.png" fluid />
                <Container text className="company-goal">
                  <Header as='h2' textAlign='center' className="company-goal-text">
                    With Creative Mind and Challenge Mind, we will provide services that give our customers  best value of their compelling interest of their investment, we uplift the quality of life in the communities we serve.
                  </Header>
                </Container>
              </Grid.Column>
              <Grid.Column width={1}></Grid.Column>
              </Grid.Row>
              <Grid.Row></Grid.Row>
              <Grid.Row></Grid.Row>
              <Grid.Row>
                <Grid.Column width={7}>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h2' dividing textAlign='center' className="our-team-header">
                      Our Team
                    </Header>
                </Grid.Column>
                <Grid.Column width={7}>
                </Grid.Column>
              </Grid.Row>
              
              <Grid.Row>
                <Grid.Column width={1}></Grid.Column>
                <Grid.Column width={5}>
                
                  <h3 className="our-team-text">
                    Our people are who ultimately set us apart from other builders. 1976 EAE employs incredible individuals with the same vision – to build exceptional projects alongside an exceptional team. We believe in hard work, integrity, and lasting relationships. Throughout our 4 years of building custom homes, we have maintained a culture of collaboration, uncompromised quality, continuous improvement and a true desire to master our craft.
                  </h3>
                
                </Grid.Column>
                <Grid.Column width={9}>
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
                <Grid.Column width={1}></Grid.Column>
              </Grid.Row>
              <Grid.Row></Grid.Row>
              <Grid.Row></Grid.Row>
              <Grid.Row></Grid.Row>
              <Grid.Row></Grid.Row>
              <Grid.Row>
                <Grid.Column width={1}>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Header as='h2' dividing className="our-team-header">
                      Send Us a Message
                    </Header>
                </Grid.Column>
                <Grid.Column width={11}>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={1}></Grid.Column>
                <Grid.Column width={14}>
                
              <List horizontal divided size='large'>
                <List.Item as='a' href='#'>
                  <List.Content>
                    <Icon name='facebook' size='large' color='blue'/>
                  </List.Content>
                </List.Item>
                <List.Item as='a' href='#'>
                  <List.Content>
                    <Icon name='facebook messenger' size='large' color='blue' />
                  </List.Content>
                </List.Item>
                <List.Item as='a' href='#'>
                  <List.Content>
                    <Icon name='twitter' size='large' color='blue'/>
                  </List.Content>
                </List.Item>
                <List.Item as='a' href='#'>
                  <List.Content>
                    <Icon name='instagram' size='large' color='red' />
                  </List.Content>
                </List.Item>
                <List.Item as='text'>
                  <List.Content>1976eae@gmail.com</List.Content>
                </List.Item>
                <List.Item as='text'>
                  <List.Content>09123456789</List.Content>
                </List.Item>
              </List>
            
                </Grid.Column>
                <Grid.Column width={1}></Grid.Column>
              </Grid.Row>
            </Grid>
            <Segment inverted vertical style={{ margin: '5em 0em 0em' }}>
            <Container textAlign='center'>
              © 2021 by 1976 EAE Corporation.
            </Container>
            </Segment>
          </div>
        );
    }
}