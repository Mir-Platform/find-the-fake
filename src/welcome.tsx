import React, {useContext} from "react"
import Context from "./context"
import {NEXT} from "./types"

export default function Welcome() {
	const [, dispatch] = useContext(Context)

	return (
		<>
			<div className="row">
				<p>
					Вы увидите несколько фотографий людей. Часть из них настоящие, а другая часть - изображения, созданные с помощью машинного
					обучения.
				</p>
				<p className="text-center">
					Готовы найти “фейки” быстрее всех?
				</p>
			</div>
			<div className="row">
				<div className="col text-center">
					<button type="button" className="btn btn-primary btn-lg" onClick={() => dispatch({type: NEXT})}>Старт</button>
				</div>
			</div>
		</>
	)

}