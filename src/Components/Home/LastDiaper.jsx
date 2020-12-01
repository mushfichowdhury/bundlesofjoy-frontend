import React from 'react'

class LastDiaper extends React.Component {

    capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
    }

    render() {
        let dateCreated = new Date(Date.parse(this.props.diapers[this.props.diapers.length-1].created_at))
        let dateNow = Date.now()
        let difference = new Date(dateNow - dateCreated).getMinutes()
        let texture = this.capitalizeFirstLetter(this.props.diapers[this.props.diapers.length-1].texture)
        let color = this.capitalizeFirstLetter(this.props.diapers[this.props.diapers.length-1].color)
        let name = this.capitalizeFirstLetter(this.props.diapers[this.props.diapers.length-1].child.name)
    return (
        <div>
            <h1>Last Diaper Change</h1>
            <h3>{difference} minutes ago</h3>
            <strong>Child: {name}</strong>            
            <p>Texture: <strong>{texture}</strong></p>      
            <p>Color: <strong>{color}</strong></p>
            
        </div>
    )}
}

export default LastDiaper