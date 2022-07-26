import React, {useContext} from "react"
import Context from "./context"
import {INIT} from "./types"

export function Win() {
	const [state, dispatch] = useContext(Context)

	return (
		<>
			<div className="row">
				<p>
					Ура! Вы победили! Ваше время: {state.time / 1000.0}ms

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