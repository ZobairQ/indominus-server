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

## If you see this message 

```powershell

Starting indominus-server_mongo_1 ... error

ERROR: for indominus-server_mongo_1  Cannot start service mongo: Mounts denied: 
The path /data/mongodb
is not shared from OS X and is not known to Docker.
You can configure shared paths from Docker -> Preferences... -> File Sharing.
See https://docs.docker.com/docker-for-mac/osxfs/#namespaces for more info.
.

ERROR: for mongo  Cannot start service mongo: Mounts denied: 
The path /data/mongodb
is not shared from OS X and is not known to Docker.
You can configure shared paths from Docker -> Preferences... -> File Sharing.
See https://docs.docker.com/docker-for-mac/osxfs/#namespaces for more info.
.
ERROR: Encountered errors while bringing up the project.

```