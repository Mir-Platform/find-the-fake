export const INIT = "INIT"
export const CLICK_ON_PHOTO = "CLICK_ON_PHOTO"
export const TICK = "TICK"
export const FAIL = "FAIL"
export const NEXT = "NEXT"


export type Photo = {
	isTrue: boolean
	isChecked: boolean
}

export type StateType = {
	step: number
	time: number
	photos: Photo[]
}

export type ActionType = {
	type: string
	index?: number
}

