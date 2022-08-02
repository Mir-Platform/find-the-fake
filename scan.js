const fs = require("fs")

const configFile = "./docs/files.json"
const webDir = "./docs/"
const realDir = "./img/real/"
const fakeDir = "./img/fake/"

console.log("Started")

const files = {
	real: fs.readdirSync(webDir + realDir).map((file) => realDir + file),
	fake: fs.readdirSync(webDir+ fakeDir).map((file) => fakeDir + file)
}

fs.writeFile(configFile, JSON.stringify(files), (err) => {
	if (err) {
		throw err
	}
})

console.log("Done")
