/**
 * Copyright (c) Mainflux
 *
 * Mainflux server is licensed under an Apache license, version 2.0.
 * All rights not explicitly granted in the Apache license, version 2.0 are reserved.
 * See the included LICENSE file for more details.
 */

package main

import (
	"fmt"
	//"strconv"
	"github.com/fatih/color"
	"github.com/mainflux/fluxm2m/config"
	"runtime"
)

func main() {

	// Parse config
	var cfg config.Config
	cfg.Parse()

	fmt.Printf("%v", cfg)

	// Print banner
	color.Cyan(banner)
	//color.Cyan("Magic happens on port " + strconv.Itoa(cfg.MqttPort))

	/** Keep main() runnig */
	runtime.Goexit()
}

var banner = `
███████╗██╗     ██╗   ██╗██╗  ██╗    ███╗   ███╗██████╗ ███╗   ███╗
██╔════╝██║     ██║   ██║╚██╗██╔╝    ████╗ ████║╚════██╗████╗ ████║
█████╗  ██║     ██║   ██║ ╚███╔╝     ██╔████╔██║ █████╔╝██╔████╔██║
██╔══╝  ██║     ██║   ██║ ██╔██╗     ██║╚██╔╝██║██╔═══╝ ██║╚██╔╝██║
██║     ███████╗╚██████╔╝██╔╝ ██╗    ██║ ╚═╝ ██║███████╗██║ ╚═╝ ██║

               == Industrial LWM2M Server ==

               Made with <3 by Mainflux Team
[w] http://mainflux.io
[t] @mainflux
`
