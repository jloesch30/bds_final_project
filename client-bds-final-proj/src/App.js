import React, { useEffect, useState } from "react";
import classes from './App.module.css';
import Form from "./form/Form";

function App() {
    const [strokeProba, setStrokeProba] = useState(null)

    return (
        <div className={classes['container']}>
            <h1 className={classes['headers']}>BDS Final Project Showcase</h1>
            <p>
                Below will be the findings and examples for our final project in BDS
            </p>
            <div>
                <Form onProbaChange={setStrokeProba}></Form>
            </div>
            <div>
                { strokeProba && <p> Your stroke probability is: %{strokeProba} </p>}
            </div>
        </div>
    )
};

export default App;