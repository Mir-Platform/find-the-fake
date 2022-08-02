const fs = require("fs")

const configFile = "./src/files.tsx"
const webDir = "./docs/"
const realDir = "./img/real/"
const fakeDir = "./img/fake/"

console.log("Started")

const files = {
	real: fs.readdirSync(webDir + realDir).map((file) => realDir + file),
	fake: fs.readdirSync(webDir+ fakeDir).map((file) => fakeDir + file)
}

fs.writeFile(configFile, "const files = " + JSON.stringify(files) +"\nexport default files", (err) => {
	if (err) {
		throw err
	}
})

console.log("Done")
