function setPokemon(pokemonPicked, meOreEnemy) {
  switch (meOreEnemy) {
    case "setMyPokemon":
      switch (pokemonPicked) {
        case "pokemon004": $("#myPokemon").attr('src', "assets/images/pokemons/004.png"); break;
        case "pokemon025": $("#myPokemon").attr('src', "assets/images/pokemons/025.png"); break;
        case "pokemon147": $("#myPokemon").attr('src', "assets/images/pokemons/147.png"); break;
        case "pokemon150": $("#myPokemon").attr('src', "assets/images/pokemons/150.png"); break;
        case "pokemon216": $("#myPokemon").attr('src', "assets/images/pokemons/216.png"); break;
      }; break;
    case "setEnemyPokemon1":
      switch (pokemonPicked) {
        case "pokemon004": $("#enemyPokemon1").attr('src', "assets/images/pokemons/004.png"); break;
        case "pokemon025": $("#enemyPokemon1").attr('src', "assets/images/pokemons/025.png"); break;
        case "pokemon147": $("#enemyPokemon1").attr('src', "assets/images/pokemons/147.png"); break;
        case "pokemon150": $("#enemyPokemon1").attr('src', "assets/images/pokemons/150.png"); break;
        case "pokemon216": $("#enemyPokemon1").attr('src', "assets/images/pokemons/216.png"); break;
      }; break;
    case "setEnemyPokemon2":
      switch (pokemonPicked) {
        case "pokemon004": $("#enemyPokemon2").attr('src', "assets/images/pokemons/004.png"); break;
        case "pokemon025": $("#enemyPokemon2").attr('src', "assets/images/pokemons/025.png"); break;
        case "pokemon147": $("#enemyPokemon2").attr('src', "assets/images/pokemons/147.png"); break;
        case "pokemon150": $("#enemyPokemon2").attr('src', "assets/images/pokemons/150.png"); break;
        case "pokemon216": $("#enemyPokemon2").attr('src', "assets/images/pokemons/216.png"); break;
      }; break;
    case "setEnemyPokemon3":
      switch (pokemonPicked) {
        case "pokemon004": $("#enemyPokemon3").attr('src', "assets/images/pokemons/004.png"); break;
        case "pokemon025": $("#enemyPokemon3").attr('src', "assets/images/pokemons/025.png"); break;
        case "pokemon147": $("#enemyPokemon3").attr('src', "assets/images/pokemons/147.png"); break;
        case "pokemon150": $("#enemyPokemon3").attr('src', "assets/images/pokemons/150.png"); break;
        case "pokemon216": $("#enemyPokemon3").attr('src', "assets/images/pokemons/216.png"); break;
      }; break;
  }
}

function wordsChangeAndFade(instructionText) {
  $("#instructionWord").fadeOut(100);
  setTimeout(function () {
    $("#instructionWord").text(instructionText);
  }, 100);
  $("#instructionWord").fadeIn(100);
}

function changeToFightField() {
  $("#pokemon-picking-page").removeClass("d-flex");
  $("#pokemon-picking-page").addClass("d-none");

  $("#pokemon-fighting-page").removeClass("d-none");
  $("#pokemon-fighting-page").addClass("d-flex");

  $("#fight-text-page").removeClass("d-none");
  $("#fight-text-page").addClass("d-flex");

  $("#fight-text").removeClass("d-none");
  wordsChangeAndFade("Fight!");
}

function printMyPokemonInfo() {
  $("#my-hp").text("HP = " + myHp);
  $("#my-level").text("LEVEL = " + myLevel);
  $("#my-attack").text("ATTACK = " + myPokemon.attack);
  $("#my-defense").text("DEFENSE = " + myPokemon.defense);
  if (myPokemonId == "pokemon025") {
    $("#my-evolution").text("Evolution = ThunderStone")
  }
  else if (myPokemon.evolutionLevel == 100) {
    $("#my-evolution").text("No more evolution...")
  }
  else {
    $("#my-evolution").text("Evolution = Level " + myPokemon.evolutionLevel)
  }
}

function printEnemyPokemonInfo() {
  $("#enemy-hp").text("HP = " + enemyHp);
  $("#enemy-attack").text("ATTACK = " + enemyPokemon.attack);
  $("#enemy-defense").text("DEFENSE = " + enemyPokemon.defense);
}

function setUpForFight() {
  switch (myPokemonId) {
    case "pokemon004":
      myPokemon = pokemon004;
      $("#myPokemonFight").attr('src', "assets/images/pokemons/004.png");
      break;
    case "pokemon025":
      myPokemon = pokemon025;
      $("#myPokemonFight").attr('src', "assets/images/pokemons/025.png");
      break;
    case "pokemon147":
      myPokemon = pokemon147;
      $("#myPokemonFight").attr('src', "assets/images/pokemons/147.png");
      break;
    case "pokemon150":
      myPokemon = pokemon150;
      $("#myPokemonFight").attr('src', "assets/images/pokemons/150.png");
      break;
    case "pokemon216":
      myPokemon = pokemon216;
      $("#myPokemonFight").attr('src', "assets/images/pokemons/216.png");
      break;
  }
  $("#myPokemonName").text(myPokemon.name);

  switch (enemyPokemonId1) {
    case "pokemon004":
      enemyPokemon = pokemon004;
      $("#enemyPokemonFight").attr('src', "assets/images/pokemons/004.png");
      break;
    case "pokemon025":
      enemyPokemon = pokemon025;
      $("#enemyPokemonFight").attr('src', "assets/images/pokemons/025.png");
      break;
    case "pokemon147":
      enemyPokemon = pokemon147;
      $("#enemyPokemonFight").attr('src', "assets/images/pokemons/147.png");
      break;
    case "pokemon150":
      enemyPokemon = pokemon150;
      $("#enemyPokemonFight").attr('src', "assets/images/pokemons/150.png");
      break;
    case "pokemon216":
      enemyPokemon = pokemon216;
      $("#enemyPokemonFight").attr('src', "assets/images/pokemons/216.png");
      break;
  }
  $("#enemyPokemonName").text(enemyPokemon.name);

  myHp = myPokemon.hp;
  myLevel = myPokemon.level;
  printMyPokemonInfo();

  enemyHp = enemyPokemon.hp;
  printEnemyPokemonInfo();
}

function evolution(pokemonForEvolution) {
  switch (pokemonForEvolution.id) {
    case "004": 
    myPokemon = pokemon005; break;
    case "005": 
    myPokemon = pokemon006; break;

  }
}


function gameOver(){
  alert("You lose!")
}


function myToPercent(final) {
  return Math.floor((final * 100))+"%";
}
