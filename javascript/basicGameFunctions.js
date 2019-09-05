function setPokemon(pokemonPicked, meOreEnemy) {
  switch (meOreEnemy) {
    case "setMyPokemon":
      switch (pokemonPicked) {
        case "004": $("#myPokemon").attr('src', "assets/images/pokemons/004.png"); break;
        case "025": $("#myPokemon").attr('src', "assets/images/pokemons/025.png"); break;
        case "147": $("#myPokemon").attr('src', "assets/images/pokemons/147.png"); break;
        case "150": $("#myPokemon").attr('src', "assets/images/pokemons/150.png"); break;
        case "216": $("#myPokemon").attr('src', "assets/images/pokemons/216.png"); break;
      }; break;
    case "setEnemyPokemon1":
      switch (pokemonPicked) {
        case "004": $("#enemyPokemon1").attr('src', "assets/images/pokemons/004.png"); break;
        case "025": $("#enemyPokemon1").attr('src', "assets/images/pokemons/025.png"); break;
        case "147": $("#enemyPokemon1").attr('src', "assets/images/pokemons/147.png"); break;
        case "150": $("#enemyPokemon1").attr('src', "assets/images/pokemons/150.png"); break;
        case "216": $("#enemyPokemon1").attr('src', "assets/images/pokemons/216.png"); break;
      }; break;
    case "setEnemyPokemon2":
      switch (pokemonPicked) {
        case "004": $("#enemyPokemon2").attr('src', "assets/images/pokemons/004.png"); break;
        case "025": $("#enemyPokemon2").attr('src', "assets/images/pokemons/025.png"); break;
        case "147": $("#enemyPokemon2").attr('src', "assets/images/pokemons/147.png"); break;
        case "150": $("#enemyPokemon2").attr('src', "assets/images/pokemons/150.png"); break;
        case "216": $("#enemyPokemon2").attr('src', "assets/images/pokemons/216.png"); break;
      }; break;
    case "setEnemyPokemon3":
      switch (pokemonPicked) {
        case "004": $("#enemyPokemon3").attr('src', "assets/images/pokemons/004.png"); break;
        case "025": $("#enemyPokemon3").attr('src', "assets/images/pokemons/025.png"); break;
        case "147": $("#enemyPokemon3").attr('src', "assets/images/pokemons/147.png"); break;
        case "150": $("#enemyPokemon3").attr('src', "assets/images/pokemons/150.png"); break;
        case "216": $("#enemyPokemon3").attr('src', "assets/images/pokemons/216.png"); break;
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
}

function printMyPokemonInfo() {
  $("#my-hp").text("HP = " + myHp + " / " + myPokemon.hp);
  $(".my-blood-bar").width(myToPercent(myHp / myPokemon.hp));
  $("#my-level").text("LEVEL = " + myLevel);
  $("#my-attack").text("ATTACK = " + myPokemon.attack);
  $("#my-defense").text("DEFENSE = " + myPokemon.defense);
  $("#myPokemonName").text(myPokemon.name);
  if (myPokemonId == "025") {
    $("#my-evolution").text("Evolution = ThunderStone")
  }
  else if (myPokemon.evolutionLevel == 100) {
    $("#my-evolution").text("No more...")
  }
  else {
    $("#my-evolution").text("Evolution = Level " + myPokemon.evolutionLevel)
  }
}

function printMyImage() {

}

function printEnemyPokemonInfo() {
  $("#enemy-hp").text("HP = " + enemyHp + " / " + enemyPokemon.hp);
  $(".enemy-blood-bar").width(myToPercent(enemyHp / enemyPokemon.hp));
  $("#enemy-attack").text("ATTACK = " + enemyPokemon.attack);
  $("#enemy-defense").text("DEFENSE = " + enemyPokemon.defense);
}

function setUpForFight() {
  switch (myPokemonId) {
    case "004":
      myPokemon = pokemon004;
      $("#myPokemonFight").attr('src', "assets/images/pokemons/004.png");
      break;
    case "025":
      myPokemon = pokemon025;
      $("#myPokemonFight").attr('src', "assets/images/pokemons/025.png");
      break;
    case "147":
      myPokemon = pokemon147;
      $("#myPokemonFight").attr('src', "assets/images/pokemons/147.png");
      break;
    case "150":
      myPokemon = pokemon150;
      $("#myPokemonFight").attr('src', "assets/images/pokemons/150.png");
      break;
    case "216":
      myPokemon = pokemon216;
      $("#myPokemonFight").attr('src', "assets/images/pokemons/216.png");
      break;
  }
  $("#myPokemonName").text(myPokemon.name);

  switch (enemyPokemonId1) {
    case "004":
      enemyPokemon = pokemon004;
      $("#enemyPokemonFight").attr('src', "assets/images/pokemons/004.png");
      break;
    case "025":
      enemyPokemon = pokemon025;
      $("#enemyPokemonFight").attr('src', "assets/images/pokemons/025.png");
      break;
    case "147":
      enemyPokemon = pokemon147;
      $("#enemyPokemonFight").attr('src', "assets/images/pokemons/147.png");
      break;
    case "150":
      enemyPokemon = pokemon150;
      $("#enemyPokemonFight").attr('src', "assets/images/pokemons/150.png");
      break;
    case "216":
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

  wordsChangeAndFade(myPokemon.name + " VS " + enemyPokemon.name);
  // $("#music-tag").load();
  // $("#music-tag").play();

}

function evolution() {
  switch (myPokemon.id) {
    case "004":
      myPokemon = pokemon005;
      $("#myPokemonFight").attr('src', "assets/images/pokemons/005.png");
      $("#myPokemon").attr('src', "assets/images/pokemons/005.png");
      break;
    case "005":
      myPokemon = pokemon006;
      $("#myPokemonFight").attr('src', "assets/images/pokemons/006.png");
      $("#myPokemon").attr('src', "assets/images/pokemons/006.png");
      break;
    case "025":
      myPokemon = pokemon026;
      $("#myPokemonFight").attr('src', "assets/images/pokemons/026.png");
      $("#myPokemon").attr('src', "assets/images/pokemons/026.png");
      break;
    case "147":
      myPokemon = pokemon148;
      $("#myPokemonFight").attr('src', "assets/images/pokemons/148.png");
      $("#myPokemon").attr('src', "assets/images/pokemons/148.png");
      break;
    case "148":
      myPokemon = pokemon149;
      $("#myPokemonFight").attr('src', "assets/images/pokemons/149.png");
      $("#myPokemon").attr('src', "assets/images/pokemons/149.png");
      break;
    case "216":
      myPokemon = pokemon217;
      $("#myPokemonFight").attr('src', "assets/images/pokemons/217.png");
      $("#myPokemon").attr('src', "assets/images/pokemons/217.png");
      break;
  }
  printMyPokemonInfo();
  wordsChangeAndFade(myPokemon.name + " VS " + enemyPokemon.name);
}

function checkEvolution() {
  if (myLevel >= myPokemon.evolutionLevel) {
    $(".fight-text").text(myPokemon.name + " is about to evolve!!!");
    disableButton();
    setTimeout(function () {
      evolution(myPokemon);
      enableButton();
    }, 1000);
  }
}

function setNextEnemy() {
  enemyIndexNow++;
  if (enemyIndexNow == 2) {
    switch (enemyPokemonId2) {
      case "004":
        enemyPokemon = pokemon004;
        $("#enemyPokemonFight").attr('src', "assets/images/pokemons/004.png");
        break;
      case "025":
        enemyPokemon = pokemon025;
        $("#enemyPokemonFight").attr('src', "assets/images/pokemons/025.png");
        break;
      case "147":
        enemyPokemon = pokemon147;
        $("#enemyPokemonFight").attr('src', "assets/images/pokemons/147.png");
        break;
      case "150":
        enemyPokemon = pokemon150;
        $("#enemyPokemonFight").attr('src', "assets/images/pokemons/150.png");
        break;
      case "216":
        enemyPokemon = pokemon216;
        $("#enemyPokemonFight").attr('src', "assets/images/pokemons/216.png");
        break;
    }
    enemyHp = enemyPokemon.hp;
    $("#enemyPokemonName").text(enemyPokemon.name);
    printEnemyPokemonInfo();
    $("#enemyPokemon1").fadeTo(1000, 0.2)
  }
  else if (enemyIndexNow == 3) {
    switch (enemyPokemonId3) {
      case "004":
        enemyPokemon = pokemon004;
        $("#enemyPokemonFight").attr('src', "assets/images/pokemons/004.png");
        break;
      case "025":
        enemyPokemon = pokemon025;
        $("#enemyPokemonFight").attr('src', "assets/images/pokemons/025.png");
        break;
      case "147":
        enemyPokemon = pokemon147;
        $("#enemyPokemonFight").attr('src', "assets/images/pokemons/147.png");
        break;
      case "150":
        enemyPokemon = pokemon150;
        $("#enemyPokemonFight").attr('src', "assets/images/pokemons/150.png");
        break;
      case "216":
        enemyPokemon = pokemon216;
        $("#enemyPokemonFight").attr('src', "assets/images/pokemons/216.png");
        break;
    }
    enemyHp = enemyPokemon.hp;
    $("#enemyPokemonName").text(enemyPokemon.name);
    printEnemyPokemonInfo();
    $("#enemyPokemon2").fadeTo(1000, 0.2)
  }
  else {
    $("#enemyPokemon3").fadeTo(1000, 0.2)
    $("#enemyPokemonFight").fadeTo(1000, 0.2)
    gameWinAlready = true;
    setTimeout(function () {
      winningCelebration();
    }, 1000);
  }
}

function gameOver() {
  $("#my-hp").text("HP = " + 0 + " / " + myPokemon.hp);
  $(".my-blood-bar").width("0%");
  $("#myPokemon").fadeTo(1000, 0.2)
  $(".fight-text").text("You have no more pokemon, you need to go to the pokemon center!");
}

function winningCelebration() {
  $("#pokemon-fighting-page").removeClass("d-flex");
  $("#pokemon-fighting-page").addClass("d-none");
  $(".fight-text").text("Congratulations!");

  $("#fight-win-page").removeClass("d-none");
  $("#fight-win-page").addClass("d-flex");

  $("#fight-text-page").removeClass("d-flex");
  $("#fight-text-page").addClass("d-none");

  $("#fight-win-page").removeClass("d-none");
  $("#fight-win-page").addClass("d-flex");
  wordsChangeAndFade("Congratulations!")
}

function myToPercent(final) {
  return Math.floor((final * 100)) + "%";
}


