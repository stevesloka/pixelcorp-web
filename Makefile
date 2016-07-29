# Makefile for the Docker image stevesloka/abstractions-web
# MAINTAINER: Steve Sloka <steve@stevesloka.com>
# If you update this image please bump the tag value before pushing.

.PHONY: all container push

TAG = latest
PREFIX = stevesloka

all: push

container:
	docker build -t $(PREFIX)/abstractions-web:$(TAG) .

push: container
	docker push $(PREFIX)/abstractions-web:$(TAG)
