import React, {useContext} from "react"
import Context from "./context"
import {INIT} from "./types"

export function Lose() {
	const dispatch = useContext(Context)

	return (
		<>
			<div className="row">
				<p>
                    Вы проиграли;(
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