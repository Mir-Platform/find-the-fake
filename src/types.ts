export const INIT = "INIT"
export const SET_PHOTO = "SET_PHOTO"
export const TICK = "TICK"
export const FAIL = "FAIL"
export const NEXT = "NEXT"

export type StateType = {
    step: number
    time: number
    photos: any[]
}

export type ActionType = {
    type: string
}

