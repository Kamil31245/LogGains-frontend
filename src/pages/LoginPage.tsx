// import React, {useRef, useState} from 'react';
// import axios from 'axios';
// import {useNavigate} from "react-router-dom";
import LoginForm from "../components/LoginForm.tsx";
import {useState} from "react";
import RegisteringForm from "../components/RegisteringForm.tsx";

export default function LoginPage() {
    const [whichForm, setWhichForm]  = useState("logging");
    return (
        <div className={"row justify-content-center align-items-center m-1"}>
            <div className={"col-4 m-5"}>
                <div className={"row text-white"}>
                    <h1>Welcome to LOGgains</h1>
                    <p>A perfect app if you want to:</p>
                    <ul>
                        <li>Save your measurements</li>
                        <li>Get accurate calculations</li>
                        <li>Make your fitness data clear and readable</li>
                        <li>Stay motivated by viewing your progress</li>
                    </ul>
                </div>
            </div>
            {whichForm === "logging" ?
                <LoginForm setForm={setWhichForm}></LoginForm> :
                <RegisteringForm setForm={setWhichForm}></RegisteringForm>
            }
        </div>
    );
}
