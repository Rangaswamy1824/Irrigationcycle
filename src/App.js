// App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import InputForm from './components/InputForm';
import IrrigationChart from './components/IrrigationChart';

const App = () => {
        const [cycleData, setCycleData] = useState([]);

        const generateCycle = ({ plots, motors, startTime, endTime, motorRuntime, cycleInterval }) => {
            let schedule = [];
            let currentTime = parseInt(startTime, 10);
            const endInt = parseInt(endTime, 10);
            let motorIndex = 0;

            while (currentTime < endInt) {
                for (let i = 0; i < plots; i++) {
                    const plot = `D${(i % plots) + 1}`;
                    const motor = `M${(motorIndex % motors) + 1}`;
                    const cycleEnd = currentTime + motorRuntime * 100;

                    if (cycleEnd > endInt) break;

                    schedule.push({
                        index: schedule.length,
                        plot,
                        startTime: currentTime.toString().padStart(6, '0'),
                        endTime: cycleEnd.toString().padStart(6, '0'),
                        RunBy: motor,
                    });

                    motorIndex++;
                    if (motorIndex % motors === 0) {
                        currentTime += cycleInterval * 100;
                    }
                }
            }

            setCycleData(schedule);
        };

        return ( <
                div >
                <
                h1 > Irrigation Cycle < /h1> <
                Routes >
                <
                Route path = "/"
                element = { < InputForm onSubmit = { generateCycle }
                    />} / >
                    <
                    Route path = "/result"
                    element = { < IrrigationChart cycles = { cycleData }
                        />} / >
                        <
                        /Routes> <
                        /div>
                    );
                };

                export default App;