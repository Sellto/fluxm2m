package api

import (
	"log"
	"net"

	"github.com/dereulenspiegel/coap-mux"
	"github.com/dustin/go-coap"
)

// NotFound Handler - useful for ACK-EMPTY
func notFoundHandler(l *net.UDPConn, a *net.UDPAddr, m *coap.Message) *coap.Message {
	log.Printf("Got message in notFoundHandler: path=%q: %#v from %v", m.Path(), m, a)
	if m.IsConfirmable() {
		return &coap.Message{
			Type: coap.Acknowledgement,
			Code: coap.NotFound,
		}
	}
	return nil
}

func LWM2MServer() *mux.Router {
	r := mux.NewRouter()
	r.Handle("/msg/{channel_id}", coap.FuncHandler(sendMessage)).Methods(coap.POST)
	r.Handle("/msg/{channel_id}", coap.FuncHandler(getMessage)).Methods(coap.GET)

	r.NotFoundHandler = coap.FuncHandler(notFoundHandler)

	return r
}
