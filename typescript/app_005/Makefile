NPM=sudo npm
NPM_FLG=install
HTTPSRV=http-server
TSC=tsc
WEBP=webpack
APT=apt
APT_FLG=install -y

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
	$(APT) $(APT_FLG) libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4
	$(APT) $(APT_FLG) libnss3 libxss1 libasound2 libxtst6 xauth firefox xvfb
	$(NPM) cache clean --force
	$(NPM) $(NPM_FLG)
	$(NPM) $(NPM_FLG) -g @angular/cli
	# $(NPM) $(NPM_FLG) typings --global --save
	# typings install dt~jquery --global --save
	# typings install
	$(NPM) $(NPM_FLG) -g webpack
	$(NPM) $(NPM_FLG) -g webpack-cli

watch:
	$(NPM) link webpack-cli
	$(NPM) link jquery

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