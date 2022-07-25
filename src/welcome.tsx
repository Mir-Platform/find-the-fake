import React from "react"

type WelcomeProps = {
    hidden: boolean
}

export default function Welcome(props: WelcomeProps) {
	return (
		<>
			<div className={"row" + (props.hidden ? "invisible" : "visible")}>
				<h1 className="text-center">Найди фейки</h1>
				<p>
                    Вы увидите несколько фотографий людей. Часть из них настоящие, а другая часть - изображения, созданные с помощью машинного
                    обучения.
				</p>
				<p>
                    Готовы найти “фейки” быстрее всех?
				</p>
			</div>
			<div className={"row " + (props.hidden ? "invisible" : "visible")}>
				<div className="col"></div>
				<div className="col">
					<input type="submit" value="Старт"/>
				</div>
				<div className="col"></div>
			</div>
		</>
	)

}