import React, { Component } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import "./example.css"


export default class HomepageFeedings extends Component {

    state = {
        testdata: [
            {
            "country": "AD",
            "hot dog": 169,
            "hot dogColor": "hsl(121, 70%, 50%)",
            "burger": 13,
            "burgerColor": "hsl(216, 70%, 50%)",
            "sandwich": 87,
            "sandwichColor": "hsl(321, 70%, 50%)",
            "kebab": 190,
            "kebabColor": "hsl(107, 70%, 50%)",
            "fries": 59,
            "friesColor": "hsl(290, 70%, 50%)",
            "donut": 78,
            "donutColor": "hsl(49, 70%, 50%)"
            },
            {
            "country": "AE",
            "hot dog": 184,
            "hot dogColor": "hsl(246, 70%, 50%)",
            "burger": 85,
            "burgerColor": "hsl(33, 70%, 50%)",
            "sandwich": 53,
            "sandwichColor": "hsl(203, 70%, 50%)",
            "kebab": 168,
            "kebabColor": "hsl(6, 70%, 50%)",
            "fries": 20,
            "friesColor": "hsl(274, 70%, 50%)",
            "donut": 86,
            "donutColor": "hsl(215, 70%, 50%)"
            },
            {
            "country": "AF",
            "hot dog": 187,
            "hot dogColor": "hsl(185, 70%, 50%)",
            "burger": 137,
            "burgerColor": "hsl(77, 70%, 50%)",
            "sandwich": 52,
            "sandwichColor": "hsl(237, 70%, 50%)",
            "kebab": 47,
            "kebabColor": "hsl(71, 70%, 50%)",
            "fries": 172,
            "friesColor": "hsl(119, 70%, 50%)",
            "donut": 25,
            "donutColor": "hsl(21, 70%, 50%)"
            },
            {
            "country": "AG",
            "hot dog": 123,
            "hot dogColor": "hsl(89, 70%, 50%)",
            "burger": 178,
            "burgerColor": "hsl(71, 70%, 50%)",
            "sandwich": 1,
            "sandwichColor": "hsl(343, 70%, 50%)",
            "kebab": 147,
            "kebabColor": "hsl(286, 70%, 50%)",
            "fries": 192,
            "friesColor": "hsl(129, 70%, 50%)",
            "donut": 85,
            "donutColor": "hsl(282, 70%, 50%)"
            },
            {
            "country": "AI",
            "hot dog": 62,
            "hot dogColor": "hsl(69, 70%, 50%)",
            "burger": 40,
            "burgerColor": "hsl(33, 70%, 50%)",
            "sandwich": 195,
            "sandwichColor": "hsl(134, 70%, 50%)",
            "kebab": 127,
            "kebabColor": "hsl(177, 70%, 50%)",
            "fries": 45,
            "friesColor": "hsl(341, 70%, 50%)",
            "donut": 123,
            "donutColor": "hsl(191, 70%, 50%)"
            },
            {
            "country": "AL",
            "hot dog": 200,
            "hot dogColor": "hsl(294, 70%, 50%)",
            "burger": 25,
            "burgerColor": "hsl(61, 70%, 50%)",
            "sandwich": 134,
            "sandwichColor": "hsl(12, 70%, 50%)",
            "kebab": 199,
            "kebabColor": "hsl(26, 70%, 50%)",
            "fries": 129,
            "friesColor": "hsl(348, 70%, 50%)",
            "donut": 139,
            "donutColor": "hsl(293, 70%, 50%)"
            },
            {
            "country": "AM",
            "hot dog": 157,
            "hot dogColor": "hsl(149, 70%, 50%)",
            "burger": 56,
            "burgerColor": "hsl(322, 70%, 50%)",
            "sandwich": 23,
            "sandwichColor": "hsl(210, 70%, 50%)",
            "kebab": 150,
            "kebabColor": "hsl(47, 70%, 50%)",
            "fries": 108,
            "friesColor": "hsl(116, 70%, 50%)",
            "donut": 18,
            "donutColor": "hsl(50, 70%, 50%)"
            }
        ]
    } 

    render() {
    return (
            <ResponsiveBar
            data= {this.state.testdata}
            keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            colors={{ scheme: 'nivo' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />   
    )}
}
