import React, {useEffect, useReducer} from "react"

import Welcome from "./welcome"
import {Win} from "./win"
import {ActionType, DEFAULT_STATE, INIT, StateType, TICK} from "./types"
import Context from "./context"
import {Question} from "./question"

type AppProps = {
	reducer: (state: StateType, action: ActionType) => StateType
}

export default function App(props: AppProps) {
	const [state, dispatch] = useReducer(props.reducer, {}, () => props.reducer(DEFAULT_STATE, {type: INIT}))

	useEffect(() => {
		if (state.isRunning) {
			const timerID = setInterval(() => dispatch({type: TICK}), 1)
			return () => clearTimeout(timerID)
		}
	}, [state])


	const showStep = () => {
		switch (state.step) {
		case 1:
			return <Question task="1 фотографию найти нужно"/>
		case 2:
			return <Question task="2 фотографии найти нужно"/>
		case 3 :
			return <Question task="3 фотографии найти нужно"/>
		case 4:
			return <Win/>
		default:
			return <Welcome/>
		}
	}

	return (
		<Context.Provider value={[state, dispatch]}>
			<div className={(state.step >= 1 && state.step <= 3) ? "running-bg" : "welcome-bg"}>
				<div className="container-sm bg-transparent">
					<div className="row">
						<div className="col" style={{height: (state.step >= 1 && state.step <= 3) ? "50px" : "150px"}}>&nbsp;</div>
					</div>
					{showStep()}
				</div>
			</div>
		</Context.Provider>
	)

}

