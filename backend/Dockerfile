FROM golang:1.15.2 

WORKDIR /backend

COPY . .

RUN go build -o /build/webserver .

EXPOSE 1337

CMD ["/build/webserver"]