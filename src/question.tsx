import React, {useContext} from "react"
import {CLICK_ON_PHOTO, Files, INIT, NEXT} from "./types"
import Context from "./context"
import Photo from "./photo"

type QuestionProps = {
	task: string
}

export function Question(props: QuestionProps) {
	const [state, dispatch] = useContext(Context)

	const message = state.isFailed ? <h4>Вы проиграли;(</h4> : <h4>{props.task}</h4>

	const photos = state.photos.map((photo, index) =>
		<Photo key={index} photo={photo} onClick={() => dispatch({type: CLICK_ON_PHOTO, index: index})}/>
	)

	return (
		<>
			<div className="row question">
				<div className="col-10">
					{message}
				</div>
				<div className="col-2 justify-content-center">
					<h4>{(state.time / 1000.0).toFixed(3)} ms</h4>
				</div>
			</div>
			<div className="row justify-content-center">
				{photos}
			</div>
			<div className="row">
				{!state.isFailed &&
					<div className="col text-center">
						<button type="button" className="btn btn-primary btn-lg fw-bolder" onClick={() => dispatch({type: NEXT})}>Проверить!</button>
					</div>
				}
				{state.isFailed &&
					<div className="col text-center">
						<button type="button" className="btn btn-primary btn-lg fw-bolder" onClick={() => dispatch({type: INIT})}>Ещё раз?</button>
					</div>
				}
			</div>
		</>
	)
}