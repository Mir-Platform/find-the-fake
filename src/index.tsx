import "bootstrap"
import "./index.scss"

import React from "react"
import {createRoot} from "react-dom/client"
import App from "./app"
import Reducer from "./reducer"

createRoot(document.getElementById("app")).render(
	<App reducer={Reducer()}/>
)