import React, { useState } from "react";
import classes from './Form.module.css'
import { useForm } from "react-hook-form";

function Form() {
    const { register, handleSubmit } = useForm()
    const [bmi, setBmi] = useState()
    const [age, setAge] = useState()
    const [hypertension, setHypertension] = useState()
    const [heartDisease, setHeartDisease] = useState()
    const [avgGlucose, setAvgGlucose] = useState()
    const [stroke, setStroke] = useState()

    const saveData = (data) => {
        console.log(data);
    }

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit(data => saveData(data))}>
                <label>BMI</label>
                <input {...register("example")} />
                <label>Age</label>
                <input {...register("age")} />
                <label>Hyper Tension</label>
                <input {...register("hypertension")} />
                <label>Heart Disease</label>
                <input {...register("heart disease")} />
                <label>BMI</label>
                <input {...register("avg glucose")} />
                <input type='submit' className={classes.submitButton}/>
            </form>
        </div>

    )
}

export default Form;