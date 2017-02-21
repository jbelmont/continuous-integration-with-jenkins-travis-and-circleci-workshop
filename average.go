package continuousIntegration

func average(numbers []int) int {
	var sum int
	for index := 0; index < len(numbers); index++ {
		sum += numbers[index]
	}
	return sum / len(numbers)
}
