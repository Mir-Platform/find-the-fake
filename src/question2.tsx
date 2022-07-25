import React, {useContext} from "react"
import Context from "./context";
import {FAIL, NEXT} from "./types";

type Question2Props = {
    time: number
    photos: any[]
}

export function Question2(props: Question2Props) {
    const dispatch = useContext(Context)

    return (
        <>
            <div className="row">
                <div className="col">
                    Найдите 2 фейковые фотографию
                </div>
                <div className="col">
                    Время: {props.time}ms
                </div>
            </div>
            <div className="row">
                <div className="col">{props.photos[0]}</div>
                <div className="col">{props.photos[1]}</div>
                <div className="col">{props.photos[2]}</div>
                <div className="col">{props.photos[3]}</div>
                <div className="col">{props.photos[4]}</div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <button type="button" className="btn btn-secondary btn-lg" onClick={() => dispatch({type: FAIL})}>Я всё(</button>
                </div>
                <div className="col text-center">
                    <button type="button" className="btn btn-primary btn-lg" onClick={() => dispatch({type: NEXT})}>Подтвердить!</button>
                </div>
            </div>
        </>
    )
}