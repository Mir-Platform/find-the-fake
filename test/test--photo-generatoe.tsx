import photoGenerator from "../src/photo-generator"

describe("PhotoGeneratorShould", () => {

	test("generate array with length 3 and 1 false", () => {
		const size = 3
		const fakeCount = 1

		const arr = photoGenerator(size, fakeCount)

		expect(arr).toHaveLength(size)
		expect(arr.filter(i => i == false)).toHaveLength(fakeCount)
	})

	test("generate array with length 5 and 2 false", () => {
		const size = 5
		const fakeCount = 2

		const arr = photoGenerator(size, fakeCount)

		expect(arr).toHaveLength(size)
		expect(arr.filter(i => i == false)).toHaveLength(fakeCount)
	})

	test("generate array with length 7 and 3 false", () => {
		const size = 7
		const fakeCount = 3

		const arr = photoGenerator(size, fakeCount)

		expect(arr).toHaveLength(size)
		expect(arr.filter(i => i == false)).toHaveLength(fakeCount)
	})
})