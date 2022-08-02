import {ActionType, CLICK_ON_PHOTO, DEFAULT_STATE, Files, INIT, NEXT, StateType, TICK} from "./types"
import photoGenerator from "./photo-generator"

export default function Reducer(files: Files) {

	function getRandomFile(isTrue: boolean) {
		const photoCollection = files[isTrue ? "real" : "fake"]
		console.log(Math.floor((Math.random() * photoCollection.length)))
		return photoCollection[Math.floor((Math.random() * photoCollection.length))]
	}

	return (state: StateType, action: ActionType) => {
		switch (action.type) {
		case INIT:
			return state = DEFAULT_STATE

		case NEXT: {
			let step = state.step
			let isRunning = state.isRunning
			let isFailed = state.isFailed

			if (step == 0) {
				isRunning = true
			}

			let isCorrect = true
			if (isRunning) {
				isCorrect = state.photos.filter(photo => photo.isTrue == photo.isChecked).length == 0
			}

			let photos = state.photos
			if (isCorrect) {
				step++
				if (step == 4) {
					isRunning = false
				} else {
					photos = photoGenerator(step * 2 + 1, step).map(isTrue => ({
						isTrue: isTrue,
						isChecked: false,
						url: getRandomFile(isTrue)
					}))
				}
			} else {
				isFailed = true
				isRunning = false
			}

			return {...state, step: step, photos: photos, isFailed: isFailed, isRunning: isRunning}

		}

		case CLICK_ON_PHOTO: {
			const photos = state.photos
			photos[action.index].isChecked = !photos[action.index].isChecked
			return {...state, photos}
		}

		case TICK:
			return {...state, time: state.time + 1}
		default: {
			return state
		}
		}
	}
}