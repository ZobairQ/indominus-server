# Indominus

Indominus is strategy browser game written in React/Redux/GraphQL.

## Technology

The game is built in a such way that the server is seperated from the client.
The UI for this game is built in ReactJS with Redux.
The server side of the game is an Apollo-express server running GraphQL

### Setup

Indominus is built in such way that you can start the server side inside the docker.
This is built such way so you dont need to focus on the server side and you can play around with the ui using any technology that suits you.

#### How to start Indominus-server inside docker

In order to start indominus instead docker you need to do following:

1. Install and Run docker
2. Open a terminal/powershell
3. Navigate to the root folder of `indominus-server`
4. run following

```shell
docker-compose up --build  
```

The application will then start.
> [!NOTE]
> You will be prompted that the server is ready by node service. You will also be prompted with an ID shortly after saying that you should use it for authorization.

You need the ID that will be prompted for authorization. This user is just a dummy user that gives you access to the graphql endpoints enables you to create new users yourself.

You need to copy the id that is prompted
Then you need to add a header with the following

```http
{
  "authorization":"id" // could be something like 5f5812d711e38b00353bf1d7
}
```

#### Query anything

Before you can query anything you need to create a new user using the mutation in in following way

```graphql
mutation {
  createNewUser(
    name: "Alexandar Salmanovic"
    username: "alex"
    password: "Something"
    email: "a@b.cd"
    cityName: "Shato Qala"
  ){
    name
  }
}
```

When you execute the following then you can query for citites

```graphql
query {
  cities {
    id
    name
    gold
    militaryPower
    population
    goldMineLevel
    militaryBaseLevel
  }
}
```

## Game Description

The game is a strategy game where each other has a number of cities. Each city has gold, population and military power.
The military power increases as you spend gold buying weapons.
The population is needed to gather more gold.

### Things the user can do

- The user can buy weapons and increase their miltary power
- The user can upgrade their houses and increase population
- The user can upgrade their goldmine, if the population allows, to increase their gold income.
- The user can attack another user and if the attackers military power is greater than defenders, the attackers takes 25% of the defenders gold.

### Actions

- When attacked and overpowered the defender loses 25% of their gold and military power decreases to 0
- When attacked and powered the attacker if attackers military power is more than 70% of the defender the attacker loses nothing.
  - If military power difference is 70% or less the attacker loses 10% of their military power.

### Buildings

- **Goldmine**
  - The goldmine has a level 1-10
  - The higher the level the more gold the player earns each hour
  - To upgrade your goldmine you need population + Gold

- **Houses**
  - The house has a level 1-25
  - The higher level the house the more population you have
  - The upgrade of house golds gold
  - The more population you have the more goldmine upgrades

- **Miltary base**
  - Miltary base has a level 1 - 10
  - The higher the level the more advanced weapons can you buy
  - You can buy weapon to increase your military power.
  - The more advanced the weapon the more increase of military power.
  - You need gold to buy weapons.
