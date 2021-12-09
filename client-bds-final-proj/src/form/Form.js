import React, { useState } from "react";
import classes from './Form.module.css'
import { useForm } from "react-hook-form";
import useApi from "../hooks/use-api";

function Form(props) {
    const { error, sendData: getStrokeData } = useApi();

    const { register, handleSubmit } = useForm()

    const displayStrokeData = (strokeData) => {
        console.log(strokeData)
        props.onProbaChange(strokeData['prediction'])
    }

    const saveData = (data) => {
        console.log(data)

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
                <select {...register("hyperTension")}>
                    <option value='0'>No</option>
                    <option value='1'>Yes</option>
                </select>
                <label>Heart Disease</label>
                <select {...register("heartDisease")}>
                    <option value='0'>No</option>
                    <option value='1'>Yes</option>
                </select>
                <label>Gender</label>
                <select {...register("gender")}>
                    <option value='1'>Male</option>
                    <option value='0'>Female</option>
                    <option value='2'>Other (prefer not to specify)</option>
                </select>
                <label>Ever Married</label>
                <select {...register("everMarried")}>
                    <option value='0'>No</option>
                    <option value='1'>Yes</option>
                </select>
                <label>Work Type</label>
                <select {...register("workType")}>
                    <option value='0'>Government</option>
                    <option value='1'>Never Worked</option>
                    <option value='2'>Private</option>
                    <option value='3'>Self Employed</option>
                    <option value='4'>Work with Children</option>
                </select>
                <label>Smoking Status</label>
                <select {...register("smokingStatus")}>
                    <option value='0'>I am not sure</option>
                    <option value='1'>Former Smoker</option>
                    <option value='2'>Never Smoked</option>
                    <option value='3'>Smoker</option>
                </select>
                <label>Residence Type</label>
                <select {...register("residenceType")}>
                    <option value='0'>Rent</option>
                    <option value='1'>Own</option>
                </select>
                <label>Average Glucose</label>
                <input {...register("avgGlucose")} />
                <input type='submit' className={classes.submitButton} />
            </form>
        </div>
    )
}

export default Form;