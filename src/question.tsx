import React, {useContext} from "react"
import {CLICK_ON_PHOTO, INIT, NEXT} from "./types"
import Context from "./context"
import Photo from "./photo"

type QuestionProps = {
	task: string
}

export function Question(props: QuestionProps) {
	const [state, dispatch] = useContext(Context)

	const photos = state.photos.map(photo => {
		photo.url = (photo.isTrue ? "./img/true.jpg" : "./img/fake.jpg")
		return photo
	}
	).map((photo, index) =>
		<Photo key={index} photo={photo} onClick={() => dispatch({type: CLICK_ON_PHOTO, index: index})}/>
	)

	return (
		<>
			<div className="row">
				<div className="col">
					Время: {state.time / 1000.0}ms
				</div>
			</div>
			{!state.isFailed &&
				<div className="row">
					<div className="col">
						{props.task}
					</div>
				</div>
			}
			{state.isFailed &&
				<div className="row">
					<div className="col">
						Вы проиграли;(
					</div>
				</div>
			}
			<div className="row justify-content-center">
				{photos}
			</div>
			<div className="row">
				{!state.isFailed &&
					<div className="col text-center">
						<button type="button" className="btn btn-primary btn-lg" onClick={() => dispatch({type: NEXT})}>Проверить!</button>
					</div>
				}
				{state.isFailed &&
					<div className="col text-center">
						<button type="button" className="btn btn-primary btn-lg" onClick={() => dispatch({type: INIT})}>Ещё раз?</button>
					</div>
				}
			</div>
		</>
	)
}