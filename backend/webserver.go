package main

import (
	"flag"
	"log"
	"net/http"
	"os"
	"path"
	"strconv"
)

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		next.ServeHTTP(w, r)
	})
}

func main() {
	port := flag.Int("port", 1337, "Port to run webserver on")

	flag.Parse()

	filePath, _ := os.Getwd()
	fullPath := path.Join(filePath, "./files")

	// https://gist.github.com/mattes/d13e273314c3b3ade33f Hederligt stulet
	if _, err := os.Stat(fullPath); os.IsNotExist(err) {
		log.Println("Files directory does not exist in " + filePath)
		log.Println("Please create files directory and restart.")
		return
	}
	http.Handle("/", corsMiddleware(http.FileServer(http.Dir(fullPath))))

	log.Println("Listening on :" + strconv.Itoa(*port))
	log.Fatal(http.ListenAndServe(":"+strconv.Itoa(*port), nil))
}
