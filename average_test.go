package continuousIntegration

import "testing"


func Test_average(t *testing.T) {
	numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	avg := average(numbers)
	if avg != 5 {
		t.Error("Expected average to be 5 but got", avg)
	}
}
