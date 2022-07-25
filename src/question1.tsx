import React, {ReactNode, useContext} from "react"
import {FAIL, NEXT} from "./types"
import Context from "./context"

type Question1Props = {
    time: number
    photos: ReactNode[]
}

export function Question1(props: Question1Props) {
	const dispatch = useContext(Context)

	return (
		<>
			<div className="row">
				<div className="col">
                    Найдите 1 фейковую фотографию
				</div>
				<div className="col">
                    Время: {props.time}ms
				</div>
			</div>
			<div className="row">
				<div className="col">{props.photos[0]}</div>
				<div className="col">{props.photos[1]}</div>
				<div className="col">{props.photos[2]}</div>
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