import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar';


class HomepageNaps extends React.Component {	

	state = {
		diapers: [],
		diaperData: [],
		currentDate: ""
	}

	componentDidMount = () => {
		fetch("http://localhost:3000/diapers")
		.then(resp => resp.json())
		.then((data) => {
			this.setState({
				diapers: data
			})
		})
	}

	dataRender = () => {
		
	}

render() {
	const diapers = this.state.diapers
	// console.log(diapers)
	diapers.forEach(obj => {
		let diaperData = {
			"date": new Date(Date.parse(obj.created_at)).toDateString(),
			"Wet Diapers": 2,
			"WetDiaperColor": "hsl(312, 70%, 50%)",
			"Dry Diapers": 2,
			"DryDiapersColor": "hsl(208, 70%, 50%)"
		}
		this.state.diaperData.push(diaperData)
		console.log(this.state.diaperData.count)
	})

	// const data = [
	// 	{
	// 		"date": "Nov. 12",
	// 		"Wet Diapers": 2,
	// 		"WetDiaperColor": "hsl(312, 70%, 50%)",
	// 		"Dry Diapers": 2,
	// 		"DryDiapersColor": "hsl(208, 70%, 50%)"
	// 	},
	// 	{
	// 		"date": "Nov. 13",
	// 		"Wet Diapers": 3,
	// 		"WetDiaperColor": "hsl(312, 70%, 50%)",
	// 		"Dry Diapers": 2,
	// 		"DryDiapersColor": "hsl(208, 70%, 50%)"
	// 	},
	// 	{
	// 		"date": "Nov. 14",
	// 		"Wet Diapers": 1,
	// 		"WetDiaperColor": "hsl(312, 70%, 50%)",
	// 		"Dry Diapers": 4,
	// 		"DryDiapersColor": "hsl(208, 70%, 50%)"
	// 	},
	// 	{
	// 		"date": "Nov. 15",
	// 		"Wet Diapers": 2,
	// 		"WetDiaperColor": "hsl(312, 70%, 50%)",
	// 		"Dry Diapers": 2,
	// 		"DryDiapersColor": "hsl(208, 70%, 50%)"
	// 	},
	// 	{
	// 		"date": "Nov. 16",
	// 		"Wet Diapers": 3,
	// 		"WetDiaperColor": "hsl(312, 70%, 50%)",
	// 		"Dry Diapers": 3,
	// 		"DryDiapersColor": "hsl(208, 70%, 50%)"
	// 	},
	// 	{
	// 		"date": "Nov. 17",
	// 		"Wet Diapers": 2,
	// 		"WetDiaperColor": "hsl(312, 70%, 50%)",
	// 		"Dry Diapers": 2,
	// 		"DryDiapersColor": "hsl(208, 70%, 50%)"
	// 	},
	// 	{
	// 		"date": "Nov. 18",
	// 		"Wet Diapers": 3,
	// 		"WetDiaperColor": "hsl(312, 70%, 50%)",
	// 		"Dry Diapers": 3,
	// 		"DryDiapersColor": "hsl(208, 70%, 50%)"
	// 	}
	// ];
	return(
	<div style={{ padding: 50 }}>
		<h1>{Date.now}</h1>
	<div style={{ height: 500 }}>
	<ResponsiveBar
		data={this.state.diaperData}
		keys={[
			"Wet Diapers",
			"Dry Diapers"
		]}
		indexBy="date"
		margin={{
			"top": 55,
			"right": 25,
			"bottom": 50,
			"left": 25
		}}
		padding={0.3}
		colors="greens"
		defs={[
			{
				"id": "dots",
				"type": "patternDots",
				"background": "inherit",
				"color": "#38bcb2",
				"size": 4,
				"padding": 1,
				"stagger": true
			},
			{
				"id": "lines-pattern",
				"type": "patternLines",
				"spacing": 6,
				"rotation": -50,
				"lineWidth": 2,
				"background": "#ffffff",
				"color": "#ff0000"
			}
		]}
		fill={[
			{
				"match": {
					"id": "Wet Diapers"
				},
				"id": "lines-pattern"
			}
		]}
		borderColor="none"
		axisBottom={{
			"tickSize": 5,
			"tickPadding": 5,
			"tickRotation": 0,
			"legend": "Date",
			"legendPosition": "middle",
			"legendOffset": 32
		}}
		axisTop={{
			"legend": "Amount of Diaper Changes",
			"legendPosition": "middle",
			"legendOffset": -40
		}}
		left={{
			"tickSize": 5,
			"tickPadding": 5,
			"tickRotation": 0,
			"legend": "Amount of Diaper Changes",
			"legendPosition": "middle",
			"legendOffset": -40
		}}
		labelSkipWidth={12}
		labelSkipHeight={12}
        labelTextColor="white"
		animate={true}
		motionStiffness={90}
		motionDamping={15}
		enableLabel={true}
	/>
	</div>
	</div>
)};
}


export default HomepageNaps
