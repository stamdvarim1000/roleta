import React from 'react';
import LinkButton from './Button';

import '../App.css'

const Validtion = (players) => {

    if (players > 5 || players < 2) {
        return false;
    }
    return true;
}

const ValidtionBalss = (sumBalls) => {

    if (sumBalls > 3 || sumBalls < 1) {
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
                    <h3>כמות הכדורים צריכה להיות בין 1 ל 3 </h3>

                </div>
                <div>
                    <label > כמות משתתפים - </label>
                    <input type="number" placeholder={props.players} value={props.players} onFocus={(e) => { e.target.value = "" }} onChange={
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
                <div>
                    <label > כמות כדורים לשחקן - </label>
                    <input type="number" placeholder={props.sumBalls} value={props.sumBalls} onFocus={(e) => { e.target.value = "" }} onChange={
                        e => {
                            if (ValidtionBalss(e.target.value)) {
                                props.setBalls(e.target.value);
                            } else {
                                e.target.value = props.sumBalls;
                                alert("כמות הכדורים חייבת להיות בין 1 ל 3 ");
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
