import React from 'react'
import Link from 'gatsby-link'
import {Columns,Column,Container,Button,Title,Progress,Subtitle} from 'bloomer'
import aboutStyles from './about.module.sass'

export default () =>
    <Container style={{ margin: "20px"}}>
        <Columns>
            <Column isSize="1/2" isOffset="1/4">
                <Button className={aboutStyles.backButton} isOutlined isColor="primary" href="/">&laquo; Back</Button>
                <hr />
                <Title isSize={1}>Education</Title>
                <dl>
                    <dt>University of Otago</dt>
                    <dd>Bachelor of Science (Computer Science)</dd>
                    <dd>Bachelor of Commerce (Information Science & Management)</dd>
                    <dd>2000-2004</dd>
                </dl>

                <Title isSize={1}>Experience</Title>
                <dl>
                    <dt>Psychology Department, University of Otago</dt>
                    <dd>Analyst Programmer</dd>
                    <dd>2006-Present</dd>
                </dl>
                <dl>
                    <dt>University of Otago Library</dt>
                    <dd>Computer Technician</dd>
                    <dd>2004-2006</dd>
                </dl>

                <Title isSize={1}>Skills</Title>
                <Subtitle isSize={3}>Strong in:</Subtitle>
                <ul>
                    <li>HTML <Progress isColor="primary" value={85} max={100} /></li>
                    <li>Javascript <Progress isColor="primary" value={80} max={100} /></li>
                    <li>Bootstrap <Progress isColor="primary" value={80} max={100} /></li>
                    <li>C# <Progress isColor="primary" value={80} max={100} /></li>
                    <li>MVC <Progress isColor="primary" value={80} max={100} /></li>
                    <li>MySQL <Progress isColor="primary" value={75} max={100} /></li>
                    <li>SQL Server <Progress isColor="primary" value={75} max={100} /></li>
                </ul>
                <Subtitle isSize={3}>Familiar with:</Subtitle>
                <ul>
                <li>jQuery <Progress isColor="info" value={70} max={100} /></li>
                    <li>Entity Framework <Progress isColor="info" value={70} max={100} /></li>
                    <li>Bulma <Progress isColor="info" value={70} max={100} /></li>
                    <li>LESS <Progress isColor="info" value={65} max={100} /></li>
                    <li>SASS <Progress isColor="info" value={60} max={100} /></li>
                    <li>Web API <Progress isColor="info" value={60} max={100} /></li>
                    <li>React <Progress isColor="info" value={55} max={100} /></li>
                </ul>
                <Subtitle isSize={3}>Knowledge of:</Subtitle>
                <ul>
                    <li>Ruby <Progress isColor="warning" value={50} max={100} /></li>
                    <li>PHP <Progress isColor="warning" value={50} max={100} /></li>
                    <li>Knockout <Progress isColor="warning" value={50} max={100} /></li>
                    <li>AngularJS <Progress isColor="warning" value={40} max={100} /></li> 
                </ul>
                <hr />
                <Button isOutlined isColor="primary" href="/">&laquo; Back</Button>
            </Column>
        </Columns>
    </Container>
    