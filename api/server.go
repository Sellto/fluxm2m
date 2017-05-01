package api

import (
	"log"
	"net"

	"github.com/dustin/go-coap"
)

func handleMsg(l *net.UDPConn, a *net.UDPAddr, m *coap.Message) *coap.Message {
	var res *coap.Message
	log.Printf("Got message in handleMsg: path=%q: %#v from %v", m.Path(), m, a)

	switch m.Code {
	case coap.GET:
		res = getMessage(l, a, m)
	case coap.POST:
		res = sendMessage(l, a, m)
	}

	return res
}

func LWM2MServer() *coap.ServeMux {
	mux := coap.NewServeMux()
	mux.Handle("/msg/", coap.FuncHandler(handleMsg))

	return mux
}
