import React from 'react'
import { connect } from 'react-redux'
import { deleteDiaperChange } from '../../redux/actions'
import blackpoop from '../images/blackpoop.png'
import darkgreenpoop from '../images/darkgreenpoop.png'
import darkyellowpoop from '../images/darkyellowpoop.png'
import greentanpoop from '../images/greentanpoop.png'
import orangepoop from '../images/orangepoop.png'
import redpoop from '../images/redpoop.png'
import whitepoop from '../images/whitepoop.png'
import yellowpoop from '../images/yellowpoop.png'
import { Button, Image, Modal, Table } from 'semantic-ui-react'


const DiaperRow = (props) => {
    const [open, setOpen] = React.useState(false)

    const deleteHandler = () => {
        console.log("deleting diaper", props.change.id)
        props.reduxDeleteHandler(props.change.id)
    }
    return (
        <Table.Row style={{textAlign: "center"}}>
            <Table.Cell>
                <span>{ new Date(Date.parse(props.change.created_at)).toDateString() }</span>
            </Table.Cell>
            <Table.Cell>
                <span>{ new Date(Date.parse(props.change.created_at)).toLocaleTimeString() }</span>
            </Table.Cell>
            <Table.Cell>
                <span>{ props.change.texture }</span>
            </Table.Cell>
            <Table.Cell>
                { props.change.color === "olive" ? <div className="floating" ><img className="floating-size" src={greentanpoop} alt="" /></div> :
                props.change.color === "dark green" ? <div className="floating" ><img className="floating-size" src={darkgreenpoop} alt=""/></div>: 
                props.change.color === "red" ? <div className="floating" ><img className="floating-size" src={redpoop} alt=""/></div>: 
                props.change.color === "yellow" ? <div className="floating" ><img className="floating-size" src={yellowpoop} alt=""/></div>: 
                props.change.color === "white" ? <div className="floating"> <img className="floating-size" src={whitepoop} alt=""/> </div>: 
                props.change.color === "black" ? <div className="floating" ><img className="floating-size" src={blackpoop} alt=""/></div>: 
                props.change.color === "orange" ? <div className="floating" ><img className="floating-size" src={orangepoop} alt=""/></div>: 
                props.change.color === "dark yellow" ? <div className="floating" ><img className="floating-size" src={darkyellowpoop} alt=""/></div>: 
                <b>{props.change.color}</b>
                }
                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button >Show Info</Button>}
                >
                    <Modal.Header>{ new Date(Date.parse(props.change.created_at)).toDateString() }</Modal.Header>
                    <Modal.Content image>
                        <Image size='large' src={props.change.image} wrapped />
                        <Modal.Description>
                        <h3>Time of Poop: { new Date(Date.parse(props.change.created_at)).toLocaleTimeString() }</h3>
                        <h3>Texture: {props.change.texture }</h3>
                        <h3>Color: {props.change.color}</h3>
                        {props.change.color === "olive" ? <h3><strong>What does this color mean?</strong><br/>Formula-fed babies may have poop that’s a combination of greenish tan and yellow. The poop is also firmer than that of a breastfed baby.</h3> :
                        props.change.color === "dark green" ? <h3><strong>What does this color mean?</strong><br/>Dark-green poop is most common in babies who are starting solid foods that are green in color, such as spinach and peas. Iron supplements can also cause your baby’s poop to turn green.</h3>: 
                        props.change.color === "red" ? <h3><strong>What does this color mean?</strong><br/>Sometimes your baby’s poop can also turn red from dark-red foods and drinks they have consumed, such as tomato juice or beets. Red poop could also mean there’s blood in your baby’s bowel movements from an intestinal infection that should be addressed by a pediatrician.

                        Red blood in a baby’s poop can also occur from milk allergies or from an anal fissure.
                        
                        <strong> It’s a good idea to call your pediatrician if your baby has red stool.</strong> If they’ve recently eaten red food, you may consider waiting to see if the next stool returns to its normal color before calling your pediatrician.</h3>: 
                        props.change.color === "yellow" ? <h3><strong>What does this color mean?</strong><br/>It’s normal to see bright-yellow poop in breastfed (and sometimes formula-fed) babies. Bright-yellow poop that’s much more frequent than usual and extremely runny, though, could be diarrhea. Diarrhea can increase the risk for dehydration.</h3>: 
                        props.change.color === "white" ? <h3><strong>What does this color mean?</strong><br/><strong>Call your pediatrician. </strong>White poop can indicate that your baby isn’t producing enough bile in their liver to help them digest food properly. This is a serious problem. White poop at any stage should be addressed by a pediatrician.</h3>: 
                        props.change.color === "black" ? <h3><strong>What does this color mean?</strong><br/>A newborn’s first stool is likely to be black with a tar-like consistency. This is called meconium, and it contains mucus, skin cells, and amniotic fluid. Black stool shouldn’t last more than a couple of days.</h3>: 
                        props.change.color === "orange" ? <h3><strong>What does this color mean?</strong><br/>Orange poop occurs from pigments picked up in your baby’s digestive tract. It can occur in both breastfed and formula-fed babies.</h3>: 
                        props.change.color === "dark yellow" ? <h3><strong>What does this color mean?</strong><br/>Once the meconium passes, a newborn’s stool may be a mustard-yellow color. This color of stool is also most common in breastfed babies.</h3>: 
                        null
                        }

                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button style={{background: "rgb(207, 207, 250)", color: "white"}} onClick={() => setOpen(false)}>Close</Button>
                    </Modal.Actions>
                </Modal>
            </Table.Cell>
            <Table.Cell>
                <Button style={{background: "rgb(207, 207, 250)", color: "white"}} onClick={deleteHandler}>Delete</Button>
            </Table.Cell>
        </Table.Row>
    )
}
// props.change.color === "dark yellow" ? <div><b><span style={{color: "darkyellow"}}>dark yellow</span></b> <img src={darkyellowpoop} alt=""/></div>: 


function mdp(dispatch) {
    return {
        reduxDeleteHandler: (diaperObj) => dispatch(deleteDiaperChange(diaperObj)),
    }
}

export default connect(null, mdp)(DiaperRow)