import React from "react";
import { Card, Image } from 'semantic-ui-react'
import '../Entries/JournalEntries.css'

const ChildJournalEntries = (props) => {

    const clickHandler = () => {
        console.log("clicking")
    }
    console.log(props.entry)

        return (
            <>
            <Card>
                <Image className="item" onClick={clickHandler} src={props.entry.image} wrapped ui={true} />
                <Card.Content>
                    <Card.Header>{props.entry.title}</Card.Header>
                    <Card.Meta>{ new Date(Date.parse(props.entry.created_at)).toDateString() }</Card.Meta>
                    <Card.Description>
                        {props.entry.content}
                    </Card.Description>
                </Card.Content>
            </Card>

            {/* <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    // trigger={clickHandler}
                >
                    <Modal.Header>{ new Date(Date.parse(props.entry.created_at)).toDateString() }</Modal.Header>
                    <Modal.Content image>
                        <Image size='medium' src={props.entry.image} wrapped />
                        <Modal.Description>
                        <p>{props.entry.content}</p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button style={{background: "rgb(207, 207, 250)", color: "white"}} onClick={() => setOpen(false)}>Close</Button>
                    </Modal.Actions>
                </Modal> */}
                </>
        );
    }

export default ChildJournalEntries
