import React from "react"
import Welcome from "./welcome"
import {Question1} from "./question1"
import {Question2} from "./question2"
import {Question3} from "./question3"
import {Congratulations} from "./congratulations"
import {Fail} from "./fail"

export default function App() {
	return (
		<div className="container">
			<Welcome hidden={false}/>
			<Question1 hidden={true}/>
			<Question2 hidden={true}/>
			<Question3 hidden={true}/>
			<Congratulations hidden={true}/>
			<Fail hidden={true}/>
		</div>
	)

}

