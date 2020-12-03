// import React from 'react';
// import { PieChart, Pie, Cell, Tooltip } from 'recharts';
// import { connect } from 'react-redux'
// import { getDiapers } from '../../redux/actions'

// class HomepageDiaperChanges extends React.Component {

//     componentDidMount() {
//         this.props.getDiapers()
//     }
//     render () {
//     const diapers = this.props.diapers
//     const lastSeven = [diapers[diapers.length-1], diapers[diapers.length-2], diapers[diapers.length-3], diapers[diapers.length-4], diapers[diapers.length-5], diapers[diapers.length-6], diapers[diapers.length-7]]
//     console.log(lastSeven)

//     const data01 = [
//         { name: 'Soft', value: lastSeven.filter(diaper => diaper.texture === "soft").length },
//         { name: 'Watery', value: lastSeven.filter(diaper => diaper.texture === "watery").length },
//         { name: 'Hard', value: lastSeven.filter(diaper => diaper.texture === "hard").length },
//         { name: 'Firm', value: lastSeven.filter(diaper => diaper.texture === "firm").length },
//         { name: 'Pellets', value: lastSeven.filter(diaper => diaper.texture === "pellets").length }
//     ];
//     const colors = [
//         "#B088F9",
//         "#F9AFC8",
//         "#FBCDD5",
//         "#BEDCFA",
//         "#98ACFA"
//     ]
//     return (
//         <PieChart width={2000} height={2000}>
//         <Pie 
//         data={data01} 
//         cx={500} 
//         cy={200} 
//         innerRadius={40} 
//         outerRadius={80} 
//         fill="#82ca9d">

//         {
//         data01.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={colors[index]}/>
//         ))
//         }
//         </Pie>
//         <Tooltip/>

//     </PieChart>
//     );
// }
// }


// function mdp(dispatch) {
//     return {
//         getDiapers: () => dispatch(getDiapers()),
//     }
// }

// function msp(state) {
//     return {diapers: state.diapers}
// }

// export default connect(msp,mdp)(HomepageDiaperChanges)