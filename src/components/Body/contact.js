import React from 'react'
import { 
    Container, 
    Title, 
    Subtitle, 
    Hero, 
    HeroHeader, 
    HeroBody,
    Column,
    Columns,
    Button,
    Field,
    Control,
    Input,
    TextArea,
    Level,
    LevelItem,
    Icon,
    Label
   } from 'bloomer'

import contactStyles from './contact.module.css'

export default () =>
<Hero isColor="dark" hasTextAlign="centered" isFullHeight="true">
  <HeroHeader>
    <Container>
      <Title isSize="1" hasTextAlign="centered">Contact</Title>
      <Subtitle isSize="3" hasTextAlign="centered" hasTextColor="success">/*&nbsp;How to get hold of me&nbsp;*/</Subtitle>
    </Container>
  </HeroHeader>
  <HeroBody>
    <Container>
      <Subtitle isSize="2" hasTextAlign="centered">Find me online:</Subtitle>
      <Level>
        <LevelItem>
          <Button href="https://www.twitter.com/_hadyny_" className={ contactStyles.contact_button }>
              <span><Icon className="fa fa-twitter" /></span>
              <span style={{ marginLeft: '10px'}}>Twitter</span>
          </Button>
        </LevelItem>
        <LevelItem>
          <Button href="https://www.freecodecamp.org/hadyny" className={ contactStyles.contact_button }>
            <span><Icon className="fa fa-free-code-camp" /></span>
            <span style={{ marginLeft: '10px'}}>Free Code Camp</span>
          </Button>
        </LevelItem>
        <LevelItem>
          <Button href="https://github.com/hadyny" className={ contactStyles.contact_button }>
            <span><Icon className="fa fa-github" /></span>
            <span style={{ marginLeft: '10px'}}>Github</span>
          </Button>
        </LevelItem>
      </Level>
      <hr />
      <Title isSize="2">Write me a message:</Title>
      <Columns>
        <Column isSize="1/2" isOffset="1/4">
          <form action="https://formspree.io/hy-portfolio@outlook.com" method="POST" className="has-text-left">
            <Field>
              <label>Your name:</label>
              <Control>
                <Input name="name" />
              </Control>
            </Field>
            <Field>
              <label>Your email address:</label>
              <Control>
                <Input name="_replyto" />
              </Control>
            </Field>
            <Field>
              <label>Your message:</label>
              <Control>
                <TextArea name="message"></TextArea>
              </Control>
            </Field>
            <Button type="submit">Send</Button>
          </form>
        </Column>
      </Columns>
    </Container>
  </HeroBody>
</Hero>