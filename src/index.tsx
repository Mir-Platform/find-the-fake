import "bootstrap"
import "./index.scss"

import React from "react"
import {createRoot} from "react-dom/client"
import App from "./app"
import Reducer from "./reducer"

fetch("files.json").then((res) => {
	res.json().then((files) => {
		createRoot(document.getElementById("app")).render(
			<App reducer={Reducer()} files={files}/>
		)
	})
})


