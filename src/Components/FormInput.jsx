import React, { useState } from 'react';
import LinkButton from './Button';
import Button from '@mui/material/Button';

import '../App.css'

const Validtion = (players) => {
    if (players > 5 || players < 2) {
        return false;
    }
    return true;
}

export default function FormInput(props) {
    return (
        <div className="GameForm">
            <div className="form">
                <div>
                    <h3>כמות המשתתפים צריכה להיות בין 2 ל-5 </h3>
                </div>
                <div>
                    <label > כמות משתתפים - </label>
                    <input type="number" value={props.players} onChange={
                        e => {
                            if (Validtion(e.target.value)) {
                                props.setPlayers(e.target.value);
                            } else {
                                e.target.value = props.players;
                                alert("מספר המשתתפים צריך להיות גדול מ2 וקטן מ5");
                            }
                        }
                    } />
                </div>
                <div className="center">
                    <LinkButton enabled={Validtion(props.players)} route="/RandomNumber" text="הגרל!"></LinkButton>
                </div>
            </div>
        </div>
    );
}
