import React, {useContext} from "react"
import Context from "./context"
import {INIT} from "./types"

export function Win() {
	const [state, dispatch] = useContext(Context)

	return (
		<>
			<div className="panda">
				&nbsp;
			</div>
			<div className="row">
				<div className="col-3"></div>
				<div className="col-6 ps-5 pt-4 pb-4 message">
					<h1>
						Сумел найти все фейки ты!
					</h1>
					<h4 className="mt-1 fw-normal">
						Твоё лучшее время: {(state.time / 1000.0).toFixed(3)}ms
					</h4>
				</div>
				<div className="col-3"></div>
			</div>
			<div className="row mt-3">
				<div className="col text-center">
					<button type="button" className="btn btn-primary btn-lg fw-bolder" onClick={() => dispatch({type: INIT})}>Ещё раз?</button>
				</div>
			</div>
		</>
	)
}