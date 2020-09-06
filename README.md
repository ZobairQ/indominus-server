# Indominus

Indominus is strategy browser game written in React/Redux/GraphQL.

## Technology

The game is built in a such way that the server is seperated from the client.
The UI for this game is built in ReactJS with Redux.
The server side of the game is an Apollo-express server running GraphQL

## Game

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
