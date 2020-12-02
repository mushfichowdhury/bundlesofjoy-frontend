import React from 'react'
import { Card, Feed, Icon } from 'semantic-ui-react';
import blackpoop from '../images/blackpoop.png'
import darkgreenpoop from '../images/darkgreenpoop.png'
import darkyellowpoop from '../images/darkyellowpoop.png'
import greentanpoop from '../images/greentanpoop.png'
import orangepoop from '../images/orangepoop.png'
import redpoop from '../images/redpoop.png'
import whitepoop from '../images/whitepoop.png'
import yellowpoop from '../images/yellowpoop.png'

class LastDiaper extends React.Component {

    capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
    }

    render() {
        let diaperdateCreated = new Date(Date.parse(this.props.diapers[this.props.diapers.length-1].created_at))
        let diaperdateNow = Date.now()
        let diaperdifference = new Date(diaperdateNow - diaperdateCreated).getMinutes()
        let diapertexture = this.capitalizeFirstLetter(this.props.diapers[this.props.diapers.length-1].texture)
        let diapername = this.capitalizeFirstLetter(this.props.diapers[this.props.diapers.length-1].child.name)
        
        let feedingdateCreated = new Date(Date.parse(this.props.feedings[this.props.feedings.length-1].created_at))
        let feedingdateNow = Date.now()
        let feedingdifference = new Date(feedingdateNow - feedingdateCreated).getMinutes()
        let feedingname = this.props.feedings[this.props.feedings.length-1].child.name
        let feedingamount = this.props.feedings[this.props.feedings.length-1].child.amount
        let feedingternary1 = this.props.feedings[this.props.feedings.length-1].child.food
        let feedingternary2 = this.props.feedings[this.props.feedings.length-1].child.feeding_method 

        let napdateCreated = new Date(Date.parse(this.props.naps[this.props.naps.length-1].created_at))
        let napdateNow = Date.now()
        let napdifference = new Date(napdateNow - napdateCreated).getMinutes()
        let napname = this.props.naps[this.props.naps.length-1].child.name
    return (
        // <div>
        //     <h1>Last Diaper Change</h1>
        //     <h3>{difference} minutes ago</h3>
        //     <strong>Child: {name}</strong>            
        //     <p>Texture: <strong>{texture}</strong></p>      
        //     <p>Color: <strong>{color}</strong></p>
            
        // </div>
        <Card>
            <Card.Content>
                <Card.Header>Recent Activity</Card.Header>
            </Card.Content>
            <Card.Content>
            <Feed>
                <Feed.Event>
                <Feed.Label 
                image={ this.props.diapers[this.props.diapers.length-1].color === "olive" ? <div className="floating" ><img className="floating-size" src={greentanpoop} alt="" /></div> :
                this.props.diapers[this.props.diapers.length-1].color === "dark green" ? <div className="floating" ><img className="floating-size" src={darkgreenpoop} alt=""/></div>: 
                this.props.diapers[this.props.diapers.length-1].color === "red" ? <div className="floating" ><img className="floating-size" src={redpoop} alt=""/></div>: 
                this.props.diapers[this.props.diapers.length-1].color === "yellow" ? <div className="floating" ><img className="floating-size" src={yellowpoop} alt=""/></div>: 
                this.props.diapers[this.props.diapers.length-1].color === "white" ? <div className="floating"> <img className="floating-size" src={whitepoop} alt=""/> </div>: 
                this.props.diapers[this.props.diapers.length-1].color === "black" ? <div className="floating" ><img className="floating-size" src={blackpoop} alt=""/></div>: 
                this.props.diapers[this.props.diapers.length-1].color === "orange" ? <div className="floating" ><img className="floating-size" src={orangepoop} alt=""/></div>: 
                this.props.diapers[this.props.diapers.length-1].color === "dark yellow" ? <div className="floating" ><img className="floating-size" src={darkyellowpoop} alt=""/></div>: 
                <b>{this.props.diapers[this.props.diapers.length-1].color}</b>
                }
                
                />
                <Feed.Content>
                    <Feed.Date>{diaperdifference} minutes ago</Feed.Date>
                    <Feed.Summary>
                    Last Diaper Change<br/>
                    Child: <strong>{diapername}</strong> <br/>       
                    Texture: <strong>{diapertexture}</strong> <br/>  
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                <Feed.Label>
                    <Icon name='food' size='mini' className="floating" />
                </Feed.Label>
                <Feed.Content>
                    <Feed.Date>{feedingdifference} minutes ago</Feed.Date>
                    <Feed.Summary>
                    Last Feeding<br/>
                    Child: <strong>{feedingname}</strong><br/>   
                    Food: <strong>{{feedingternary1} ? <strong>{feedingternary1}</strong> : <strong>{feedingternary2}</strong>}</strong> <br/>   
                    Amount: <strong>{feedingamount}</strong><br/>  
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                <Feed.Label>
                    <Icon name='bed' size='mini' className="floating" />
                </Feed.Label>
                <Feed.Content>
                    <Feed.Date>{napdifference} minutes ago</Feed.Date>
                    <Feed.Summary>
                    Last Nap<br/>
                    Child: <strong>{napname}</strong><br/>
                    Napped for: <strong>{this.props.naps[this.props.naps.length-1].duration}</strong>
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>
            </Feed>
            </Card.Content>
        </Card>
    )}
}

export default LastDiaper