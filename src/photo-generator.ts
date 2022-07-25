export default function photoGenerator(length: number, fakeCount: number) {
	return Array(length)
		.fill(true)
		.map((isTrue, i) => i >= fakeCount)
		.sort(() => Math.random() - 0.5)
}