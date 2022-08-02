import React, {useContext} from "react"
import {PhotoType} from "./types"
import Context from "./context"

type PhotoProps = {
	photo: PhotoType
	onClick: (event) => void
}

export default function Photo(props: PhotoProps) {
	const [state] = useContext(Context)

	let borderClass = "border-5 photo-border "

	if (state.isFailed) {
		if (!props.photo.isTrue) {
			if (props.photo.isChecked) {
				borderClass += "border border-success"

			} else {
				borderClass += "border border-danger"
			}
		}
	} else {
		if (props.photo.isChecked) {
			borderClass += "border border-primary"
		}
	}

	return (
		<div className="col-3 d-flex justify-content-center mt-3 mb-3">
			<img
				alt=""
				width="200px"
				className={borderClass}
				src={props.photo.url}
				onClick={(event) => props.onClick(event)}
			/>
		</div>
	)
}
