/**
 * Copyright (c) 2016 Mainflux
 *
 * Mainflux server is licensed under an Apache license, version 2.0.
 * All rights not explicitly granted in the Apache license, version 2.0 are reserved.
 * See the included LICENSE file for more details.
 */

package main

import (
	"flag"
	"fmt"
	"os"

	"github.com/mainflux/fluxm2m/api"

	"github.com/dustin/go-coap"
	"github.com/fatih/color"
)

const (
	help string = `
Usage: mainflux-influxdb [options]
Options:
	-a, --addr	CoAP server host
	-p, --port	CoAP server port
	-h, --help	Show help
`
)

type (
	Opts struct {
		LWM2MHost string
		LWM2MPort string

		Help bool
	}
)

var opts Opts

func main() {
	flag.StringVar(&opts.LWM2MHost, "a", "localhost", "LwM2M host.")
	flag.StringVar(&opts.LWM2MPort, "p", "5683", "LwM2M port.")
	flag.BoolVar(&opts.Help, "h", false, "Show help.")
	flag.BoolVar(&opts.Help, "help", false, "Show help.")

	flag.Parse()

	if opts.Help {
		fmt.Printf("%s\n", help)
		os.Exit(0)
	}

	// Initialize map of Observers
	api.ObsMap = make(map[string][]api.Observer)

	// Print banner
	color.Cyan(banner)
	color.Cyan(fmt.Sprintf("Magic happens on port %s", opts.LWM2MPort))

	// Serve CoAP
	s := fmt.Sprintf("%s:%s", opts.LWM2MHost, opts.LWM2MPort)
	coap.ListenAndServe("udp", s, api.LWM2MServer())
}

var banner = `
███████╗██╗     ██╗   ██╗██╗  ██╗███╗   ███╗██████╗ ███╗   ███╗
██╔════╝██║     ██║   ██║╚██╗██╔╝████╗ ████║╚════██╗████╗ ████║
█████╗  ██║     ██║   ██║ ╚███╔╝ ██╔████╔██║ █████╔╝██╔████╔██║
██╔══╝  ██║     ██║   ██║ ██╔██╗ ██║╚██╔╝██║██╔═══╝ ██║╚██╔╝██║
██║     ███████╗╚██████╔╝██╔╝ ██╗██║ ╚═╝ ██║███████╗██║ ╚═╝ ██║
╚═╝     ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝     ╚═╝
                                                               
            == Industrial IoT System ==
       
           Made with <3 by Mainflux Team
[w] http://mainflux.io
[t] @mainflux

`
