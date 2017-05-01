/**
 * Copyright (c) Mainflux
 *
 * Mainflux server is licensed under an Apache license, version 2.0.
 * All rights not explicitly granted in the Apache license, version 2.0 are reserved.
 * See the included LICENSE file for more details.
 */

package api

import (
	"net"

	"github.com/dustin/go-coap"
)

type (
	Observer struct {
		Conn    *net.UDPConn
		Addr    *net.UDPAddr
		Message *coap.Message
	}
)

// Map of observers
var ObsMap map[string][]Observer

// sendMessage function
func sendMessage(l *net.UDPConn, a *net.UDPAddr, m *coap.Message) *coap.Message {
	var res *coap.Message = nil
	if m.IsConfirmable() {
		res = &coap.Message{
			Type:      coap.Acknowledgement,
			Code:      coap.Content,
			MessageID: m.MessageID,
			Token:     m.Token,
			Payload:   []byte(""),
		}
		res.SetOption(coap.ContentFormat, coap.AppJSON)
	}

	if len(m.Payload) == 0 {
		if m.IsConfirmable() {
			res.Payload = []byte("{\"res\": \"Error: msg len can not be 0\"}")
		}
		return res
	}

	if m.IsConfirmable() {
		res.Payload = []byte("{\"res\": \"sent\"}")
	}
	return res
}

// observeMessage function
func getMessage(l *net.UDPConn, a *net.UDPAddr, m *coap.Message) *coap.Message {
	var res *coap.Message = nil

	if m.IsConfirmable() {
		res = &coap.Message{
			Type:      coap.Acknowledgement,
			Code:      coap.Content,
			MessageID: m.MessageID,
			Token:     m.Token,
			Payload:   []byte(""),
		}
		res.SetOption(coap.ContentFormat, coap.AppJSON)
	}

	if m.IsConfirmable() {
		res.Payload = []byte("{\"res\": \"observing\"}")
	}
	return res
}
