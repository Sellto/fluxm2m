###
# Mainflux CoAP Server Dockerfile
###

FROM golang:alpine
MAINTAINER Mainflux

###
# Install
###
# Copy the local package files to the container's workspace.
COPY . /go/src/github.com/mainflux/fluxm2m
RUN cd /go/src/github.com/mainflux/fluxm2m && go install

###
# Run main command with dockerize
###
CMD fluxm2m
