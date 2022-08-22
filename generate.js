const fs = require("fs")

const configFile = "./src/files.tsx"
const webDir = "./docs/"
const realDir = "./img/real/"
const fakeDir = "./img/fake/"
const testFiles = ["./docs/img/real/real.jpg", "./docs/img/fake/fake.jpg"]

console.log("Started")

console.log("Removing test files...")
testFiles.forEach(f => fs.unlink(f, (err) => {
		if (err) {
			throw err
		}
		console.log(f + " was deleted")
	}
))

console.log("Generate index...")
const files = {
	real: fs.readdirSync(webDir + realDir).map((file) => realDir + file),
	fake: fs.readdirSync(webDir + fakeDir).map((file) => fakeDir + file)
}

fs.writeFile(configFile, "const files = " + JSON.stringify(files) + "\nexport default files", (err) => {
	if (err) {
		throw err
	}
})

console.log("Done")
