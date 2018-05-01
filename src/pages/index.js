import React from 'react'
import { Container, Navbar, NavbarItem, NavbarMenu, NavbarStart, NavbarBurger } from 'bloomer'
import About from '../components/Body/about'
import Portfolio from '../components/Body/portfolio'
import Contact from '../components/Body/contact'
import { Link, Element } from 'react-scroll'

import 'font-awesome/css/font-awesome.css'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileMenuVisible: false
    }
  }

  toggleMenu() {
    this.setState({ mobileMenuVisible: !this.state.mobileMenuVisible });
  }

  onClickNav() {
    this.setState({ mobileMenuVisible: false });
  }

  render() {
    return (
      <div>
        <Container>
          <Navbar className="is-fixed-top is-dark">
          <NavbarBurger isActive={this.state.mobileMenuVisible} onClick={this.toggleMenu.bind(this)} />
            <NavbarMenu isActive={this.state.mobileMenuVisible}>
              <NavbarStart style={{ margin:'auto'}}>
                <Link onClick={this.onClickNav.bind(this)} activeClass="is-active" className="navbar-item" to="about" spy={true} smooth={true} duration={350}>About</Link>
                <Link onClick={this.onClickNav.bind(this)} activeClass="is-active" className="navbar-item" to="portfolio" spy={true} smooth={true} duration={350}>Portfolio</Link>
                <Link onClick={this.onClickNav.bind(this)} activeClass="is-active" className="navbar-item" to="contact" spy={true} smooth={true} duration={350}>Contact</Link>
              </NavbarStart>
            </NavbarMenu>
          </Navbar>
        </Container>
        <Element name="about" />
        <About />
        <Element name="portfolio" />
        <Portfolio />
        <Element name="contact" />
        <Contact />
      </div>
    )
  }
}
export default IndexPage
