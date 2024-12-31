import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputForm = ({ onSubmit }) => {
    const [plots, setPlots] = useState('');
    const [motors, setMotors] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [motorRuntime, setMotorRuntime] = useState('');
    const [cycleInterval, setCycleInterval] = useState('');
    const navigate = useNavigate(); // Get the navigate function

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            plots: Number(plots),
            motors: Number(motors),
            startTime,
            endTime,
            motorRuntime: Number(motorRuntime),
            cycleInterval: Number(cycleInterval),
        });
        navigate('/result'); // Navigate to the result page after submission
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "number"
        placeholder = "Number of Plots"
        value = { plots }
        onChange = {
            (e) => setPlots(e.target.value) }
        /> <
        input type = "number"
        placeholder = "Number of Motors"
        value = { motors }
        onChange = {
            (e) => setMotors(e.target.value) }
        /> <
        input type = "text"
        placeholder = "Start Time (HHMMSS)"
        value = { startTime }
        onChange = {
            (e) => setStartTime(e.target.value) }
        /> <
        input type = "text"
        placeholder = "End Time (HHMMSS)"
        value = { endTime }
        onChange = {
            (e) => setEndTime(e.target.value) }
        /> <
        input type = "number"
        placeholder = "Motor Runtime (minutes)"
        value = { motorRuntime }
        onChange = {
            (e) => setMotorRuntime(e.target.value) }
        /> <
        input type = "number"
        placeholder = "Cycle Interval (minutes)"
        value = { cycleInterval }
        onChange = {
            (e) => setCycleInterval(e.target.value) }
        /> <
        button type = "submit" > Generate Cycle < /button> <
        /form>
    );
};

export default InputForm;