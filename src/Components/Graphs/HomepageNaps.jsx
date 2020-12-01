import React, { Component } from 'react';
import Chart from "chart.js";
import { connect } from 'react-redux'
import { getNaps } from '../../redux/actions'

class HomepageNaps extends Component {	
    state = {
        naps: [],
        lastNaps: [],
        lastDuration: []
    }
    chartRef = React.createRef();

    componentDidMount = () => {
        this.props.getNaps()
        const created = this.props.naps.filter(nap => nap.created_at)
        const duration = this.props.naps.filter(nap => nap.duration)

        this.setState({
            lastNaps: created,
            lastDuration: duration
        })
    }
    checkData() {
        console.log("Label", this.props.lastNaps)
    }

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: this.state.lastNaps,
                datasets: [
                    {
                        label: "Duration",
                        data: this.state.duration,
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }

    render() {
        return (
            <div style={{width: "700px", margin: "auto"}}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}


function mdp(dispatch) {
    return {getNaps: () => dispatch(getNaps())}
}

function msp(state) {
    return {naps: state.naps}
}

export default connect(msp,mdp)(HomepageNaps)