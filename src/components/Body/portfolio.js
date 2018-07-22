import React from 'react'
import { 
    Container, 
    Title, 
    Subtitle, 
    Hero, 
    HeroHeader, 
    HeroBody,
    HeroFooter,
    Column,
    Columns,
    Button,
    Modal,
    ModalBackground,
    ModalCard,
    ModalCardBody,
    ModalCardFooter,
    ModalCardHeader,
    ModalCardTitle
   } from 'bloomer'

import portfolioStyles from './portfolio.module.css'

class Portfolio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibleModal: 0
        }
    }

    showModal(modalNumber) {
        this.setState({ visibleModal: modalNumber });
    }

    closeModal() {
        this.setState({ visibleModal: 0 });
    }

    render() {
        return (
            <div>
            <Hero isColor="light" hasTextAlign="centered" isFullHeight="true">
            <HeroHeader>
                <Container>
                <Title isSize="1" hasTextAlign="centered">Portfolio</Title>
                <Subtitle isSize="3" hasTextAlign="centered" hasTextColor="success">/*&nbsp;Here is a sample of some of my work&nbsp;*/</Subtitle>
                </Container>
            </HeroHeader>
            <HeroBody>
                <Container>
                <Columns isCentered isMobile isMultiline>
                    <Column isSize="narrow">
                    <img id="drinkingintervention" onClick={() => this.showModal(1)} className={portfolioStyles.portfolioImg} src="https://web.psy.otago.ac.nz/_img/drinkingintervention.jpg" alt="Drinking Intervention Study" />
                    </Column>
                    <Column isSize="narrow">
                    <img id="animaldatabase" onClick={() => this.showModal(2)} className={portfolioStyles.portfolioImg} src="https://web.psy.otago.ac.nz/_img/animaldb.jpg" alt="The Animal Database" />
                    </Column>
                    <Column isSize="narrow">
                    <img id="kiwifruit" onClick={() => this.showModal(3)} className={portfolioStyles.portfolioImg} src="https://web.psy.otago.ac.nz/_img/kiwifruit.jpg" alt="Kiwifruit Study" />
                    </Column>
                    <Column isSize="narrow">
                    <img id="productchoices" onClick={() => this.showModal(4)} className={portfolioStyles.portfolioImg} src="https://web.psy.otago.ac.nz/_img/productchoices.jpg" alt="Product Choices Study" />
                    </Column>
                    <Column isSize="narrow">
                    <img id="prp" onClick={() => this.showModal(5)} className={portfolioStyles.portfolioImg} src="https://web.psy.otago.ac.nz/_img/prp.jpg" alt="Paid Research Participation" />
                    </Column>
                    <Column isSize="narrow">
                    <img id="stroop" onClick={() => this.showModal(6)} className={portfolioStyles.portfolioImg} src="https://web.psy.otago.ac.nz/_img/stroop.jpg" alt="Numerical Stroop Test" />
                    </Column>
                </Columns>
                </Container>
            </HeroBody>
            <HeroFooter>
                
            </HeroFooter>
            </Hero>

            <Modal className="drinkingintervention" isActive={this.state.visibleModal == 1}>
            <ModalBackground />
            <ModalCard>
                <ModalCardHeader>
                <ModalCardTitle>Drinking Intervention</ModalCardTitle>
                <button onClick={this.closeModal.bind(this)} className="delete" aria-label="close"></button>
                </ModalCardHeader>
                <ModalCardBody>
                <p>
                    This study gathers information about how first year university students perceive their own drinking habits, and the drinking habits of their fellow students. From this they will receive feedback on how much they drink compared to other students, and how
                    much they drink compared to what is considered a safe level. They will also receive encouragement to drink responsibly and information on where to find help if they need it. This study also optionally collects phone numbers of people who are willing
                    to receive sms messages during orientation week, and throughout the year. The purpose of these messages is to provide encouragement to drink responsibly. A raspberry pi has been used to send out these messages through the web api.
                </p>
                <div className="source-link">
                    <Button isOutlined isColor="primary" href="https://github.com/hadyny/DrinkingIntervention" target="_blank">Source Code</Button>
                </div>
                </ModalCardBody>
                <ModalCardFooter>
                <div className="tags">
                    <span className="tag is-info">C#</span>
                    <span className="tag is-info">.NET</span>
                    <span className="tag is-info">MVC</span>
                    <span className="tag is-info">Entity Framework</span>
                    <span className="tag is-info">SQL Server</span>
                    <span className="tag is-info">Bootstrap</span>
                    <span className="tag is-info">Web API</span>
                </div>
                </ModalCardFooter>
            </ModalCard>
            </Modal>

            <Modal className="animaldatabase" isActive={this.state.visibleModal == 2}>
            <ModalBackground />
            <ModalCard>
                <ModalCardHeader>
                <ModalCardTitle>The Animal Database</ModalCardTitle>
                <button onClick={this.closeModal.bind(this)} className="delete" aria-label="close"></button>
                </ModalCardHeader>
                <ModalCardBody>
                <p>
                    This a database designed specifically to keep the medical records of animals used to research purposes. It keeps logs of feeding, location, surgeries etc, and runs various reports. It connects to Active Directory via LDAP to authenticate the different
                    types of users.
                </p>
                <div className="source-link">
                    <Button isOutlined isColor="primary" href="https://github.com/hadyny/AnimalDB" target="_blank">Source Code</Button>
                </div>
                </ModalCardBody>
                <ModalCardFooter>
                <div className="tags">
                    <span className="tag is-info">C#</span>
                    <span className="tag is-info">.NET</span>
                    <span className="tag is-info">MVC</span>
                    <span className="tag is-info">Entity Framework</span>
                    <span className="tag is-info">SQL Server</span>
                    <span className="tag is-info">Bootstrap</span>
                    <span className="tag is-info">jQuery</span>
                    <span className="tag is-info">Knockout</span>
                    <span className="tag is-info">DDD</span>
                    <span className="tag is-info">Active Directory</span>
                </div>
                </ModalCardFooter>
            </ModalCard>
            </Modal>

            <Modal className="kiwifruit" isActive={this.state.visibleModal == 3}>
            <ModalBackground />
            <ModalCard>
                <ModalCardHeader>
                <ModalCardTitle>The Kiwifruit Study</ModalCardTitle>
                <button onClick={this.closeModal.bind(this)} className="delete" aria-label="close"></button>
                </ModalCardHeader>
                <ModalCardBody>
                <p>
                    The Kiwifruit study consists of an initial survey where potential participants are screened to see whether they are eligible to continue on to the main part of the study, a daily survey where the screened participants enter information about their day through a mobile website, and an administration website where those running the study can view and export data, and view the progress of each participant.
                </p>
                </ModalCardBody>
                <ModalCardFooter>
                <div className="tags">
                    <span className="tag is-info">C#</span>
                    <span className="tag is-info">.NET</span>
                    <span className="tag is-info">MVC</span>
                    <span className="tag is-info">Entity Framework</span>
                    <span className="tag is-info">SQL Server</span>
                    <span className="tag is-info">Bootstrap</span>
                    <span className="tag is-info">jQuery</span>
                </div>
                </ModalCardFooter>
            </ModalCard>
            </Modal>

            <Modal className="productchoices" isActive={this.state.visibleModal == 4}>
            <ModalBackground />
            <ModalCard>
                <ModalCardHeader>
                <ModalCardTitle>Product Choices Study</ModalCardTitle>
                <button onClick={this.closeModal.bind(this)} className="delete" aria-label="close"></button>
                </ModalCardHeader>
                <ModalCardBody>
                <p>
            This study aids researchers in determining what drives a consumer to buy the products they do. Participants are asked to choose between two products by looking at the packaging. They can optionally choose to turn the product over, following that they can optionally choose to read the nutritional information. All interactions are recorded, as is the time taken to make the decision.
                </p>
                <div className="source-link">
                    <Button isOutlined isColor="primary" href="https://github.com/hadyny/ProductChoices" target="_blank">Source Code</Button>
                </div>
                </ModalCardBody>
                <ModalCardFooter>
                <div className="tags">
                    <span className="tag is-info">C#</span>
                    <span className="tag is-info">.NET</span>
                    <span className="tag is-info">MVC</span>
                    <span className="tag is-info">Entity Framework</span>
                    <span className="tag is-info">SQL Server</span>
                    <span className="tag is-info">Bootstrap</span>
                    <span className="tag is-info">jQuery</span>
                </div>
                </ModalCardFooter>
            </ModalCard>
            </Modal>

            <Modal className="prp" isActive={this.state.visibleModal == 5}>
            <ModalBackground />
            <ModalCard>
                <ModalCardHeader>
                <ModalCardTitle>Paid Research Participation</ModalCardTitle>
                <button onClick={this.closeModal.bind(this)} className="delete" aria-label="close"></button>
                </ModalCardHeader>
                <ModalCardBody>
                <p>
                    This is a website where academics and research students can advertise studies to potential participants. Each study can be given certain pre-requisites, and once participants have completed their demographic information, they will only see studies that they are eligible to participate in. Participants can sign up for the study online, and choose which timeslot they would like to attend.
                </p>
                <div className="source-link">
                    <Button isOutlined isColor="primary" href="https://web.psy.otago.ac.nz/prp" target="_blank">Website</Button>
                </div>
                </ModalCardBody>
                <ModalCardFooter>
                <div className="tags">
                    <span className="tag is-info">C#</span>
                    <span className="tag is-info">.NET</span>
                    <span className="tag is-info">MVC</span>
                    <span className="tag is-info">Entity Framework</span>
                    <span className="tag is-info">SQL Server</span>
                    <span className="tag is-info">Bootstrap</span>
                    <span className="tag is-info">jQuery</span>
                    <span className="tag is-info">Web API</span>
                </div>
                </ModalCardFooter>
            </ModalCard>
            </Modal>

            <Modal className="stroop" isActive={this.state.visibleModal == 6}>
            <ModalBackground />
            <ModalCard>
                <ModalCardHeader>
                <ModalCardTitle>Numerical Stroop Test</ModalCardTitle>
                <button onClick={this.closeModal.bind(this)} className="delete" aria-label="close"></button>
                </ModalCardHeader>
                <ModalCardBody>
                <p>
                    This is an online version of the <a href="https://en.wikipedia.org/wiki/Stroop_effect" target="_blank">Stroop</a> test using numbers instead of colours. For example, the digit 3 is displayed 5 times on the screen, and the participant needs to enter how many occurences of the digit there are. Each trial is timed and is recorded with the response. Preceding the test are some manipulation questions, and a memory task.
                </p>
                <div className="source-link">
                    <Button isOutlined isColor="primary" href="https://github.com/hadyny/NumericalStroop" target="_blank">Source Code</Button>
                </div>
                </ModalCardBody>
                <ModalCardFooter>
                <div className="tags">
                    <span className="tag is-info">C#</span>
                    <span className="tag is-info">.NET</span>
                    <span className="tag is-info">MVC</span>
                    <span className="tag is-info">Entity Framework</span>
                    <span className="tag is-info">SQL Server</span>
                    <span className="tag is-info">Bootstrap</span>
                    <span className="tag is-info">jQuery</span>
                </div>
                </ModalCardFooter>
            </ModalCard>
            </Modal>
            </div>
        );
    }
}

export default Portfolio