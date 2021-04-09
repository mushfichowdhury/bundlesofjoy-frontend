import React from 'react'
import { Statistic } from 'semantic-ui-react';

function DailyStats(props) {
    return (
        <>
            <Statistic >
                    <Statistic.Value className="floating">{props.feedings.filter(feeding => new Date(Date.parse(feeding.created_at)).toDateString() === new Date(Date.parse(props.feedings[props.feedings.length-1].created_at)).toDateString()).length}</Statistic.Value>
                    <Statistic.Label>Feedings Today</Statistic.Label>
            </Statistic>
            <Statistic>
                    <Statistic.Value className="floating">{props.diapers.filter(diaper => new Date(Date.parse(diaper.created_at)).toDateString() === new Date(Date.parse(props.diapers[props.diapers.length-1].created_at)).toDateString()).length}</Statistic.Value>
                    <Statistic.Label>Diaper Changes Today</Statistic.Label>
            </Statistic>
            <Statistic style={{marginTop: "1%"}}>
                    <Statistic.Value className="floating">{props.naps.filter(nap => new Date(Date.parse(nap.created_at)).toDateString() === new Date(Date.parse(props.naps[props.naps.length-1].created_at)).toDateString()).length}</Statistic.Value>
                    <Statistic.Label>Naps Today</Statistic.Label>
            </Statistic>
        </>
    )
}

export default DailyStats
