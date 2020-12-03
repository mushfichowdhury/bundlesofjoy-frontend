import React from 'react'
import ms from 'pretty-ms'
import { Button, Header } from 'semantic-ui-react'
    
class Timer extends React.Component {
    state = {
        time: 0,
        start: 0,
        isOn: false
    }

    startTimer = () => {
        this.setState({
        time: this.state.time,
        start: Date.now() - this.state.time,
        isOn: true
        })
        this.timer = setInterval(() => this.setState({
        time: Date.now() - this.state.start
        }), 1);
    }

    stopTimer = () => {
        this.setState({isOn: false})
        console.log(ms(this.state.time))
        clearInterval(this.timer)
    }

    resetTimer = () => {
        this.setState({time: 0})
    }
    localTimerHandler = () => {
        console.log(this.state.time)
        this.props.timerHandler(ms(this.state.time))
        this.setState({time: 0})
    }
    render() {
        let start = (this.state.time == 0) ?
        <Button style={{background: "rgb(207, 207, 250)", color: "white"}} onClick={this.startTimer}>start</Button> :
        null
        let stop = (this.state.isOn) ?
        <Button style={{background: "rgb(207, 207, 250)", color: "white"}} onClick={this.stopTimer}>stop</Button> :
        null
        let reset = (this.state.time != 0 && !this.state.isOn) ?
        <Button style={{background: "rgb(207, 207, 250)", color: "white"}} onClick={this.resetTimer}>reset</Button> :
        null
        let resume = (this.state.time != 0 && !this.state.isOn) ?
        <Button style={{background: "rgb(207, 207, 250)", color: "white"}} onClick={this.startTimer}>resume</Button> :
        null
        let submit = (this.state.time != 0 && !this.state.isOn) ?
        <Button style={{background: "rgb(207, 207, 250)", color: "white"}} onClick={this.localTimerHandler}>enter</Button> :
        null
        return(
        <div>
            <Header as="h1" style={{marginTop: "1%"}} >Timer: {ms(this.state.time)} {start}</Header>
            {/* {start} */}
            {resume}
            {stop}
            {reset}
            {submit}
        </div>
        )
    }
    }

export default Timer