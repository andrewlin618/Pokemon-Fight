var myPokemonPicked = false;
var enemyPokemonPicked = 0;
var myPokemon;
var enemyPokemon;

var myPokemonId;
var enemyPokemonId1;
var enemyPokemonId2;
var enemyPokemonId3;

var myHp;
var myLevel;
var enemyHp;
var myDamage;
var enemyDamage;

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

function changeToFightField(){
  $("#pokemon-picking-page").removeClass("d-flex");
  $("#pokemon-picking-page").addClass("d-none");

  $("#pokemon-fighting-page").removeClass("d-none");
  $("#pokemon-fighting-page").addClass("d-flex");

  $("#fight-text-page").removeClass("d-none");
  $("#fight-text-page").addClass("d-flex");

  $("#fight-text").removeClass("d-none");
  wordsChangeAndFade("Fight!");
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

  myHp = parseInt(myPokemon.hp);
  myLevel = parseInt(myPokemon.level);

  enemyHp = parseInt(enemyPokemon.hp);


  //Set myPokemon Info.
  $("#my-hp").text("HP = " + myHp);
  $("#my-level").text("LEVEL = " + myLevel);
  $("#my-attack").text("ATTACK = " + myPokemon.attack);
  $("#my-defence").text("DEFENCE = " + myPokemon.defence);
  if (myPokemonId == "pokemon025") {
    $("#my-evolution").text("Evolution = ThunderStone")
  }
  else if (myPokemon.evolutionLevel == 100) {
    $("#my-evolution").text("No more evolution...")
  }
  else {
    $("#my-evolution").text("Evolution = Level " + myPokemon.evolutionLevel)
  }

  //Set enemyPokemon Info.
  $("#enemy-hp").text("HP = " + enemyHp);
  $("#enemy-attack").text("ATTACK = " + enemyPokemon.attack);
  $("#enemy-defence").text("DEFENCE = " + enemyPokemon.defence);
}


//Picking Pokemon;
$(".btn-pickme").on("click", function () {
  //If done;
  if (enemyPokemonPicked >= 3) {
    return;
  }

  $(this).parent().parent().fadeTo(100, 0.2);
  $(this).fadeOut();

  //Pick my Pokemon;
  if (!myPokemonPicked) {
    myPokemonId = $(this).parent().parent().attr('pokemonId')
    setPokemon(myPokemonId, "setMyPokemon");
    wordsChangeAndFade("Chose Your First Enemy!");
    $(".btn-pickme").css('background-color', 'brown');
    $(".btn-pickme").css('border-color', 'brown');
    myPokemonPicked = true;
    return;
  }

  //Pick enemy Pokemon;
  enemyPokemonPicked++;
  if (enemyPokemonPicked == 1) {
    enemyPokemonId1 = $(this).parent().parent().attr('pokemonId')
    setPokemon(enemyPokemonId1, "setEnemyPokemon1");
    wordsChangeAndFade("Chose Your Second Enemy!");
  }
  else if (enemyPokemonPicked == 2) {
    enemyPokemonId2 = $(this).parent().parent().attr('pokemonId')
    setPokemon(enemyPokemonId2, "setEnemyPokemon2");
    wordsChangeAndFade("Chose Your Last Enemy!");
  }
  else {
    enemyPokemonId3 = $(this).parent().parent().attr('pokemonId')
    setPokemon(enemyPokemonId3, "setEnemyPokemon3");
    $(this).parent().parent().parent().fadeTo(100, 1);
    changeToFightField();
    setUpForFight();
  }
});


//Press "Attack";
$("#btn-attack").on("click", function () {


});

//Press "Recover";
$("#btn-recover").on("click", function () {
  myHp = parseInt(myPokemon.hp);
  $("#my-hp").text("HP = " + myHp);
});


