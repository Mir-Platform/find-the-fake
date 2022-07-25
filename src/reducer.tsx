import {ActionType, CLICK_ON_PHOTO, FAIL, INIT, NEXT, StateType, TICK} from "./types"
import photoGenerator from "./photo-generator"

export default function Reducer() {
	return (state: StateType, action: ActionType) => {
		switch (action.type) {
		case INIT:
			return state = {...state, step: 0, time: 0}
		case FAIL:
			return {...state, step: state.step = -1}
		case NEXT: {
			let isCorrect = true
			if (state.step >= 1 && state.step <= 3) {
				isCorrect = state.photos.filter(photo => photo.isTrue == photo.isChecked).length == 0
			}

			if (!isCorrect) {
				return {...state, step: state.step = -1}
			}

			let photos = []
			const step = state.step + 1
			if (step >= 1 && step <= 3) {
				const temp = photoGenerator(step * 2 + 1, step)
				photos = temp.map(isTrue => new Object({isTrue: isTrue, isChecked: false}))
			}

			return {...state, step: step, photos: photos}
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