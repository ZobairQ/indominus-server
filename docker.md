# How to start MongoDB in docker

1. Install Docker
2. Open terminal/powershell
3. type `docker pull mongo:lastest` to pull the docker image needed
4. type `mkdir ~/mongodb-docker` to create a new directory in your home. (This may vary if you're in windows)
5. run docker with

```shell
docker run -d -p 27017:27017 -v ~/mongodb-docker:/data/db --name indominus-mongo mongo:latest
```

## If you already have mongo image

If you think you already have a mongo image then go ahead and open your terminal/powershell and type

```shell
docker images
```

you will ses a list of images and then see if you can find mongo in the list. If you can find mongo and you want to delete it then type

```shell
docker rmi mongo
```
