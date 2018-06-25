import React from 'react'
import { 
  Container, 
  Title, 
  Subtitle, 
  Hero, 
  HeroHeader, 
  HeroFooter,
  HeroBody, 
  Button, 
  Icon, 

 } from 'bloomer'
import Scroll from 'react-scroll'
let Link = Scroll.Link
import aboutStyles from './about.module.css'

export default () =>
    <Hero isColor="dark" hasTextAlign="centered" isFullHeight="true">
    <HeroHeader>
      <Container>
        <Title isSize="1" hasTextAlign="centered">Hadyn</Title>
        <Subtitle isSize="3" hasTextAlign="centered" hasTextColor="success">/*&nbsp;Who am I?&nbsp;*/</Subtitle>
      </Container>
    </HeroHeader>
    <HeroBody>
      <Container hasTextAlign="left">
        <img className={aboutStyles.profile} src="https://web.psy.otago.ac.nz/_img/profile.jpg?" alt="Profile Picture" />
        <p>Hi there, I'm Hadyn. I'm a full stack web developer living in Dunedin, New Zealand. I love making life easier for people through technology, specifically the web. I currently work at the <a href="https://www.otago.ac.nz" target="_blank">University of Otago</a>,
        in the <a href="https://www.otago.ac.nz/psychology" target="_blank">Psychology Department</a>, writing software to aid in post-graduate research.
      </p>
      <p>I have written a range of software, from small online surveys to large multi-user databases, and pretty much everything in between. I love learning new things and keeping up with the latest in web technology. If you need something done in this area,
        feel free to <Link to="contact" spy={true} smooth={true} duration={350}>contact</Link> me and I'd be keen to help out.
      </p>
      <p>
        I love coding at both the back and front end, and my experience includes: SQL Server, C# .NET, MVC, PHP, MySQL, jQuery, a bit of Angular and React, LESS/SASS, and Bootstrap.
      </p>
      <p>
        I don't really have a lot of free time, but outside of work hours I love spending time with my family, running marathons, and being involved in church. If I find myself at a loose end you might also find me reading books.
      </p>
      <HeroFooter>
          <Container hasTextAlign="centered">
            <p>
              <Button className={aboutStyles.backButton} isOutlined isColor="primary" href="/about">Find out more &raquo;</Button>
            </p>
        </Container>
      </HeroFooter>
      </Container>
    </HeroBody>
  </Hero>