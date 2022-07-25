import React, {useContext} from "react"
import Context from "./context"
import {INIT} from "./types"

type WinProps = {
    time: number
}

export function Win(props: WinProps) {
    const dispatch = useContext(Context)

    return (
        <>
            <div className="row">
                <p>
                    Ура! Вы победили! Ваше время: {props.time}ms

                </p>
            </div>
            <div className="row">
                <div className="col text-center">
                    <button type="button" className="btn btn-primary btn-lg" onClick={() => dispatch({type: INIT})}>Ещё раз?</button>
                </div>
            </div>
        </>
    )
}