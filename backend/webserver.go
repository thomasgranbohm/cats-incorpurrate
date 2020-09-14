package main

import (
	"log"
	"net/http"
	"os"
	"path"
	"strconv"
)

func main() {
	port := 5000
	filePath, _ := os.Getwd()
	fullPath := path.Join(filePath, "./files")

	// https://gist.github.com/mattes/d13e273314c3b3ade33f Hederligt stulet
	if _, err := os.Stat(fullPath); os.IsNotExist(err) {
		log.Println("Files directory does not exist in " + filePath)
		log.Println("Please create files directory and restart.")
		return
	}
	http.Handle("/", http.FileServer(http.Dir(fullPath)))

	log.Println("Listening on :" + strconv.Itoa(port))
	log.Fatal(http.ListenAndServe(":"+strconv.Itoa(port), nil))
}
