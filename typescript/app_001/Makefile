NPM=sudo npm
NPM_FLG=install
HTTPSRV=http-server
TSC=tsc
WEBP=webpack

all: info cleanup install watch compile final test
	@printf "Installed packages and compiled a bundle...\n"

info:
	@printf "Check Information\n"

cleanup:
	@printf "\n"
	sudo rm -rf "dist" > /dev/null
	find . -type f -name "package-lock.json" -delete
	sudo rm -rf "node_modules" > /dev/null
	sudo rm -rf "typings" > /dev/null
	sudo rm -f "typings.json" > /dev/null

install:
	@printf "Installing packages...\n"
	$(NPM) cache clean --force
	$(NPM) $(NPM_FLG)
	$(NPM) $(NPM_FLG) -g webpack
	$(NPM) $(NPM_FLG) -g webpack-cli

watch:
	$(NPM) link webpack-cli

compile:
	@printf "Creating, JS from Typescript\n"
	$(TSC)
	@printf "Creating, bundle from webpack\n"
	$(WEBP)

final:
	sudo typings install dt~jquery --global --save

test:
	# Start local lightweight webserver	
	$(HTTPSRV) -c-1