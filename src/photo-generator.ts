export default function photoGenerator(length: number, fakeCount: number) {
	const arr = Array(length).map(() => true)
	for (let i = 0; i < fakeCount; i++) {
		arr[Math.floor(Math.random() * length)] = false
	}
	return arr
}