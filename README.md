# rzrsite-ui
UI part of the site of our friend


##Docker commands:
docker kill rzrsite-ui
docker container rm rzrsite-ui -f 
docker image rm node-rzrsite:release -f
docker build -t node-rzrsite:release .
docker run -d -t -p 4343:4343 --name rzrsite-ui node-rzrsite:release