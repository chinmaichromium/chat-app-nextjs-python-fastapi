docker-compose -f docker-compose.development.yaml up --build

docker-compose -f docker-compose.production.yaml up --build


# this for pushing to docker hub
docker build -t chinmai1998/python-fastapi:1.0.0 .
docker login
docker push chinmai1998/python-fastapi:1.0.0