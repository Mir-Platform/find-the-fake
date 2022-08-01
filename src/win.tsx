import React, {useContext} from "react"
import Context from "./context"
import {INIT} from "./types"

export function Win() {
	const [state, dispatch] = useContext(Context)

	return (
		<>
			<div className="row message pt-3">
				<div className="col">
					<h4>Ура! Вы победили! Ваше время: {(state.time / 1000.0).toFixed(3)}ms</h4>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col text-center">
					<button type="button" className="btn btn-primary btn-lg" onClick={() => dispatch({type: INIT})}>Ещё раз?</button>
				</div>
			</div>
		</>
	)
}