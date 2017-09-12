.PHONY: build
build:
	npx babel --presets es2015 components.js > build/components.js
