all:
	node server.js &
	sleep 2
	node client.js rhaegar.narzekasz.pl:3000 "Blue" &
	node client.js rhaegar.narzekasz.pl:3000 "Green" &
	node client.js rhaegar.narzekasz.pl:3000 "Red" &
