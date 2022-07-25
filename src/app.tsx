import React, {useEffect, useReducer} from "react"

import Welcome from "./welcome"
import {Question1} from "./question1"
import {Question2} from "./question2"
import {Question3} from "./question3"
import {Win} from "./win"
import {Lose} from "./lose"
import {ActionType, CLICK_ON_PHOTO, INIT, StateType, TICK} from "./types"
import Context from "./context"

type AppProps = {
	reducer: (state: StateType, action: ActionType) => StateType
}

export default function App(props: AppProps) {
	const [state, dispatch] = useReducer(props.reducer, {}, () => props.reducer({step: 0, time: 0, photos: []}, {type: INIT}))

	useEffect(() => {
		if (state.step >= 1 && state.step <= 3) {
			const timerID = setInterval(() => dispatch({type: TICK}), 1)
			return () => clearTimeout(timerID)
		}
	}, [state])


	const photos = state.photos.map((photo, index) =>
		<div key={index} className="col">
			<img
				alt=""
				width="150px"
				style={{border: photo.isChecked ? "1px #0f0 solid" : "1px #fff solid"}}
				src={photo.isTrue ? "./img/true.jpg" : "./img/fake.jpg"}
				onClick={() => dispatch({type: CLICK_ON_PHOTO, index: index})}
			/>
		</div>
	)

	const showStep = () => {
		switch (state.step) {
		case 1:
			return <Question1 time={state.time / 1000.0} photos={photos}/>
		case 2:
			return <Question2 time={state.time / 1000.0} photos={photos}/>
		case 3 :
			return <Question3 time={state.time / 1000.0} photos={photos}/>
		case  4:
			return <Win time={state.time / 1000.0}/>
		case -1:
			return <Lose/>
		default:
			return <Welcome/>
		}
	}

	return (
		<Context.Provider value={dispatch}>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="text-center">Найди фейки</h1>
					</div>
				</div>
				{showStep()}
			</div>
		</Context.Provider>
	)

}

