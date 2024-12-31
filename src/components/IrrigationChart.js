import React from 'react';

const IrrigationChart = ({ cycles }) => {
    return ( <
        table >
        <
        thead >
        <
        tr >
        <
        th > Index < /th> <
        th > Plot < /th> <
        th > Start Time < /th> <
        th > End Time < /th> <
        th > Run By < /th> <
        /tr> <
        /thead> <
        tbody > {
            cycles.map((cycle, idx) => ( <
                tr key = { idx } >
                <
                td > { cycle.index } < /td> <
                td > { cycle.plot } < /td> <
                td > { cycle.startTime } < /td> <
                td > { cycle.endTime } < /td> <
                td > { cycle.RunBy } < /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table>
    );
};

export default IrrigationChart;