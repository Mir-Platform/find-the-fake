import {ActionType, FAIL, INIT, NEXT, SET_PHOTO, StateType, TICK} from "./types"
import photoGenerator from "./photo-generator";
import React from "react";

export default function Reducer() {
    return (state: StateType, action: ActionType) => {
        switch (action.type) {
            case INIT:
                return state = {...state, step: 0, time: 0}
            case FAIL:
                return {...state, step: state.step = -1}
            case NEXT:
                let photos = []
                const step = state.step + 1
                if (step >= 1 && step <= 3) {
                    photos = photoGenerator(step * 2 + 1, step).map(isTrue =>
                        <div className="col">
                            <img width="150px" src={isTrue ? "./img/true.jpg" : "./img/fake.jpg"} alt=""/>
                        </div>
                    )
                }
                return {...state, step: step, photos: photos}
            case TICK:
                return {...state, time: state.time + 1}
            default: {
                return state
            }
        }
    }
}