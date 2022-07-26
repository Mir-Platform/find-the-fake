export const INIT = "INIT"
export const CLICK_ON_PHOTO = "CLICK_ON_PHOTO"
export const TICK = "TICK"
export const NEXT = "NEXT"

export const DEFAULT_STATE: StateType = {step: 0, time: 0, isRunning: false, isFailed: false, photos: []}

export type PhotoType = {
	url?: string
	isTrue: boolean
	isChecked: boolean
}

export type StateType = {
	step: number
	time: number
	isRunning: boolean
	isFailed: boolean
	photos: PhotoType[]
}

export type ActionType = {
	type: string
	index?: number
}

