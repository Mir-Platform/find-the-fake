import React, {useContext} from "react"
import Context from "./context"
import {NEXT} from "./types"

export default function Welcome() {
	const [, dispatch] = useContext(Context)

	return (
		<>
			<div className="panda">
				&nbsp;
			</div>
			<div className="row">
				<div className="col-2">
					&nbsp;
				</div>
				<div className="col-9 ps-5 pt-4 pb-4 message">
					<h1 className="text-uppercase">
						Приветствую тебя, о, путник!
					</h1>
					<h4 className="fw-bold">
						Несколько фотографий увидишь ты!
					</h4>
					<h6 className="mt-1 fw-normal">
						Часть из них настоящие, а часть с помощью машинного обучения созданы.
					</h6>
					<h6 className="mt-1 fw-normal">
						Быстрее всех найти ты должен фейки все!
					</h6>
				</div>
				<div className="col-1">
					&nbsp;
				</div>
			</div>
			<div className="row mt-3">
				<div className="col text-center">
					<button type="button" className="btn btn-primary btn-lg fw-bolder" onClick={() => dispatch({type: NEXT})}>Найти!</button>
				</div>
			</div>
		</>
	)

}