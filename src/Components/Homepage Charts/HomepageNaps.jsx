import React, { Component } from 'react';
import Chart from "chart.js";

class HomepageNaps extends Component {	
    state = {
        diapers: [],
    }
    chartRef = React.createRef();

    checkData() {
        console.log("Label", this.props.diapers)
    }

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: this.props.naps.created_at,
                datasets: [
                    {
                        label: "Duration",
                        data: this.props.naps.duration,
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }

    render() {
        if(this.props.diapers) {
            this.setState({
                diapers: this.props.diapers
            })
        } else {
            this.checkData()
        }
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

export default HomepageNaps
