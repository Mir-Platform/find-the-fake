import React, {useContext} from "react"
import Context from "./context"
import {NEXT} from "./types"

export default function Welcome() {
	const [, dispatch] = useContext(Context)

	return (
		<>
			<div className="row message pt-3">
				<h5>
					Вы увидите несколько фотографий людей. Часть из них настоящие, а другая часть - изображения, созданные с помощью машинного
					обучения.
				</h5>
				<h4 className="text-center mt-3 fw-bold">
					Готовы найти “фейки” быстрее всех?
				</h4>
			</div>
			<div className="row mt-3">
				<div className="col text-center">
					<button type="button" className="btn btn-primary btn-lg" onClick={() => dispatch({type: NEXT})}>Старт</button>
				</div>
			</div>
		</>
	)

}