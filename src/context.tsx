import {createContext, Dispatch} from "react"
import {ActionType, DEFAULT_STATE, StateType} from "./types"

const defaultValue: [StateType, Dispatch<ActionType>] = [DEFAULT_STATE, () => {}]
export default createContext(defaultValue)