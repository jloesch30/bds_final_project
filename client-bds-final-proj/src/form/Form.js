import React, { useState } from "react";
import classes from './Form.module.css'
import { useForm } from "react-hook-form";
import useApi from "../hooks/use-api";

function Form() {
    const { error, sendData: getStrokeData } = useApi();

    const { register, handleSubmit } = useForm()
    const [bmi, setBmi] = useState()
    const [age, setAge] = useState()
    const [hypertension, setHypertension] = useState()
    const [heartDisease, setHeartDisease] = useState()
    const [avgGlucose, setAvgGlucose] = useState()
    const [stroke, setStroke] = useState()

    const displayStrokeData = (strokeData) => {
        console.log(strokeData)
    }

    const saveData = (data) => {

        getStrokeData({
            url: '/stroke/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        }, displayStrokeData)
    }

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit(data => saveData(data))}>
                <label>BMI</label>
                <input {...register("bmi")} />
                <label>Age</label>
                <input {...register("age")} />
                <label>Hyper Tension</label>
                <input {...register("hyperTension")} />
                <label>Heart Disease</label>
                <input {...register("heartDisease")} />
                <label>Average Glucose</label>
                <input {...register("avgGlucose")} />
                <input type='submit' className={classes.submitButton} />
            </form>
        </div>
    )
}

export default Form;