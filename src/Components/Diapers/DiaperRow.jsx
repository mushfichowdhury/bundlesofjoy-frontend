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
import Modal from 'react-modal';


const DiaperRow = (props) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    
    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal(){
        setIsOpen(false);
    }

    const deleteHandler = () => {
        console.log("deleting diaper", props.change.id)
        props.reduxDeleteHandler(props.change.id)
    }
    return (
        <tr>
            <td>
                <span>{ new Date(Date.parse(props.change.created_at)).toDateString() }</span>
            </td>
            <td>
                <span>{ new Date(Date.parse(props.change.created_at)).toLocaleTimeString() }</span>
            </td>
            <td>
                <span>{ props.change.texture }</span>
            </td>
            <td className="hover-action">
                { props.change.color === "olive" ? <div><img src={greentanpoop} alt="" /></div> :
                props.change.color === "dark green" ? <div><img src={darkgreenpoop} alt=""/></div>: 
                props.change.color === "red" ? <div><img src={redpoop} alt=""/></div>: 
                props.change.color === "yellow" ? <div><img src={yellowpoop} alt=""/></div>: 


                props.change.color === "white" ? <div class="container"> <img className="image" src={whitepoop} alt=""/> </div>: 


                props.change.color === "black" ? <div><img src={blackpoop} alt=""/></div>: 
                props.change.color === "orange" ? <div><img src={orangepoop} alt=""/></div>: 
                props.change.color === "dark yellow" ? <div><img src={darkyellowpoop} alt=""/></div>: 
                <b>{props.change.color}</b>
                }
                <button onClick={openModal}>Show Photo</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    style={{
                        overlay: {
                            backgroundColor: 'lavender'
                        },
                        content: {
                            color: 'lightsteelblue',
                            justifyContent: 'center',
                            display: 'block',
                            margin: 'auto',
                            width: '50'
                    }}}
                >
                    <img src={props.change.image} />
                    <button onClick={closeModal}>Close Modal</button>
                </Modal>
            </td>
            <td>
                <button onClick={deleteHandler}>Delete</button>
            </td>
        </tr>
    )
}
// props.change.color === "dark yellow" ? <div><b><span style={{color: "darkyellow"}}>dark yellow</span></b> <img src={darkyellowpoop} alt=""/></div>: 


function mdp(dispatch) {
    return {
        reduxDeleteHandler: (diaperObj) => dispatch(deleteDiaperChange(diaperObj)),
    }
}

export default connect(null, mdp)(DiaperRow)