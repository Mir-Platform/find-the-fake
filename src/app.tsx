import React, {useEffect, useReducer} from "react"

import Welcome from "./welcome"
import {Win} from "./win"
import {ActionType, DEFAULT_STATE, Files, INIT, StateType, TICK} from "./types"
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
			return <Question task="Найдите 1 фейковую фотографию" />
		case 2:
			return <Question task="Найдите 2 фейковые фотографию"/>
		case 3 :
			return <Question task="Найдите 3 фейковые фотографию"/>
		case 4:
			return <Win/>
		default:
			return <Welcome/>
		}
	}

	return (
		<Context.Provider value={[state, dispatch]}>
			<div className="container bg-transparent">
				<div className="row mt-2">
					<div className="col-4"></div>
					<div className="col-4  header rounded-top">
						<h1 className="text-center">Найди фейки</h1>
					</div>
					<div className="col-4"></div>
				</div>
				{showStep()}
			</div>
		</Context.Provider>
	)

}

