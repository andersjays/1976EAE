import React, { Component } from "react";
import { Sidebar, Container, Image, Menu, Grid, Icon, Segment } from 'semantic-ui-react';
import Home from './Home';

const NavBarMobile = ({
  onPusherClick,
  onToggle,
  onMenuClick,
  visible,
  activeItem
}) => (
  <Grid columns={1}>
      <Grid.Column>
      <Menu fixed='top' size="large" color="grey" inverted pointing secondary>
          <Container>
            <Menu.Item as="a" header>
              <Image
                className="logo"
                size="tiny"
                src="companylogo.jpg"
              />
              1976 EAE <br></br> Corporation
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item onClick={onToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Sidebar.Pushable as={Grid} className='home-content'>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            vertical
            direction="right"
            visible={visible}
          >
              <Menu.Item
                as='a'
                name='portfolio'
                active={activeItem === 'portfolio'}
                onClick={onMenuClick}
              />
              <Menu.Item
                as='a'
                name='profile'
                active={activeItem === 'profile'}
                onClick={onMenuClick}
              />
              <Menu.Item
                as='a'
                name='services'
                active={activeItem === 'services'}
                onClick={onMenuClick}
              />
              <Menu.Item
                as='a'
                name='contact'
                active={activeItem === 'contact'}
                onClick={onMenuClick}
              />
          </Sidebar>
          <Sidebar.Pusher>
        <Grid>
        <Grid.Row>
      <Grid.Column>
            <Home />
            </Grid.Column>
    </Grid.Row>
  </Grid>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
  </Grid>
);

const NavBarDesktop = ({
  onMenuClick,
  activeItem
}) => (
  <div>
  <Menu fixed='top' size="large" pointing secondary className="navbar-menu">
    <Container>
      <Menu.Item header>
        <Image
          className="logo"
          size="tiny"
          src="companylogo.jpg"
        />
        1976 EAE <br></br> Corporation
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={onMenuClick}
        />
        <Menu.Item
          name='profile'
          active={activeItem === 'profile'}
          onClick={onMenuClick}
        />
        <Menu.Item
          name='services'
          active={activeItem === 'services'}
          onClick={onMenuClick}
        />
        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={onMenuClick}
        />
      </Menu.Menu>
    </Container>
  </Menu>
  <Home />
      
  </div>
);

export default class Navbar extends Component {
    state = { activeItem: "", visible: false };
  
    handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
    };
    handlePusher = () => {
      const { activeItem, visible } = this.state;
  
      if (visible) this.setState({ visible: false });
    };
    handleToggle = () => this.setState({ visible: !this.state.visible });

    render() {
      const { activeItem, visible } = this.state
      return (
        <Grid>
          <Grid.Row only='mobile tablet' mobile={16} tablet={16}>
            <Grid.Column>
          
            <NavBarMobile
              onPusherClick={this.handlePusher}
              onToggle={this.handleToggle}
              onMenuClick={this.handleItemClick}
              visible={visible}
              activeItem={activeItem}
            >
            </NavBarMobile>
          
          </Grid.Column>
          </Grid.Row>
          <Grid.Row only='computer' computer={16}>
            <Grid.Column>
          
            <NavBarDesktop  onMenuClick={this.handleItemClick} activeItem={activeItem} />
          
            </Grid.Column>
          </Grid.Row>
          </Grid>
      );
    }
  }
  