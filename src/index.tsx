import "bootstrap"
import "./index.scss"

import React from "react"
import {createRoot} from "react-dom/client"
import App from "./app"
import Reducer from "./reducer"
import files from "./files"

createRoot(document.getElementById("app")).render(
	<App reducer={Reducer(files)}/>
)


