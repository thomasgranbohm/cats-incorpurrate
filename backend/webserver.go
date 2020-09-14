package main

import (
	"log"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./files")))

	log.Println("Listening on :5000")
	log.Fatal(http.ListenAndServe(":5000", nil))
}
