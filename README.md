# Pokemon-Fight
Online pokemon game. <br />
> [Live Game!](https://andrewlin618.github.io/Pokemon-Fight/)

# About The Project
<img src="assets/images/screenshot.gif" height=500px alt="Pokemon"></img>

## Ideas
1. Different pokemon have different attack stats and defense stats, and both of them increase when leveling up.<br />
2. The attach damage should be a range rather than a fixed number.

## Solution
```
    //Calculate my damage;
    myDamage = Math.floor(Math.cbrt(myLevel) * DMIM * (0.8 + 0.4 * Math.random()) * myPokemon.attack * DFI / (enemyPokemon.defense + DFI));
    enemyHp = enemyHp - myDamage;
    
    //Calculate enemy damage;
    enemyDamage = Math.floor(DMIE * (0.8 + 0.4 * Math.random()) * enemyPokemon.attack * DFI / (myPokemon.defense + DFI));
    myHp = myHp - enemyDamage;
```
> DMIM : Damage index of me;
> DMIE : Damage index of enemy;()
> DFI  : Defence index;

## Build With
- HTML
- CSS
- Bootstrap
- jQuery

# Getting Started

## Installation
1. Get a local clone of the repo
```
git clone https://github.com/andrewlin618/Pokemon-Fight.git
```

## Usage
1. You can change the Pokemon's attributes in 'javascript/pokemonInfo.js';
2. Open index.html in your browser;
3. Enjoy the game!

## Support

> Reach out to me at one of the following places!

- Tel:      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `206-886-9131`
- Email:    &ensp; &nbsp; &nbsp; `andrewlin618@gmail.com`
- LinkedIn: &nbsp; <a href="https://www.linkedin.com/in/andrew-lin-337592112/" target="_blank">`Andrew Lin`</a>

