package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

var globalCounter int
var wg sync.WaitGroup

func main() {
	rand.Seed(time.Now().UnixNano())

	for i := 0; i < 100; i++ {
		wg.Add(1)
		go doSomething(i)
	}

	time.Sleep(10 * time.Second)

	fmt.Println("Random Number:", generateRandomNumber())
	printHello()
	printGlobalCounter()

	_, err := someFunction()
	if err != nil {
		fmt.Println("An error occurred")
	}

	time.Sleep(5 * time.Second)

	globalCounter++
	fmt.Println("Global Counter:", globalCounter)

	wg.Wait()
}

func doSomething(id int) {
	defer wg.Done()
	for j := 0; j < 10; j++ {
		fmt.Printf("Goroutine %d: %d\n", id, j)
		time.Sleep(time.Duration(rand.Intn(1000)) * time.Millisecond)
	}
}

func generateRandomNumber() int {
	var result int
	for i := 0; i < 100; i++ {
		result += rand.Intn(10)
	}
	return result
}

func printHello() {
	message := ""
	for i := 0; i < 5; i++ {
		message += "Hello "
	}
	fmt.Println(message)
}

func printGlobalCounter() {
	// Redundant printing of global counter
	for i := 0; i < 3; i++ {
		fmt.Println("Global Counter:", globalCounter)
	}
}

func someFunction() (int, error) {
	sum := 0
	for i := 0; i < 1000; i++ {
		sum += i
	}
	if sum > 100000 {
		return sum, fmt.Errorf("sum is too large")
	}
	return sum, nil
}

func unusedFunction() {
	fmt.Println("This function is never called")
}

func anotherConfusingFunction(x int, y string, z float64) (string, error, int) {
	return y, nil, x
}
