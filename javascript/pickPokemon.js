var myPokemonPicked = false;
var enemyPokemonPicked = 0;
var myPokemon;
var enemyPokemon1;
var enemyPokemon2;
var enemyPokemon3;

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

//Start Fighting;
$(document).on('keypress', function (e) {
  if (e.which == 13 && enemyPokemonPicked == 3) {
      $("#pokemon-picking-page").hide();
  }
});

//Picking Pokemon;
$(".btn-success").on("click", function () {
  //If done;
  if (enemyPokemonPicked >= 3) {
    return;
  }

  $(this).parent().parent().fadeTo(100, 0.2);
  $(this).fadeOut();

  //Pick my Pokemon;
  if (!myPokemonPicked) {
    myPokemon = $(this).parent().parent().attr('data-pokemon')
    setPokemon(myPokemon, "setMyPokemon");
    wordsChangeAndFade("Chose Your First Enemy!");
    myPokemonPicked = true;
    return;
  }

  //Pick enemy Pokemon;
  enemyPokemonPicked++;
  if (enemyPokemonPicked == 1) {
    enemyPokemon1 = $(this).parent().parent().attr('data-pokemon')
    setPokemon(enemyPokemon1, "setEnemyPokemon1");
    wordsChangeAndFade("Chose Next Enemy!");
  }
  else if (enemyPokemonPicked == 2) {
    enemyPokemon2 = $(this).parent().parent().attr('data-pokemon')
    setPokemon(enemyPokemon2, "setEnemyPokemon2");
    wordsChangeAndFade("Chose Next Enemy!");
  }
  else {
    enemyPokemon3 = $(this).parent().parent().attr('data-pokemon')
    setPokemon(enemyPokemon3, "setEnemyPokemon3");
    wordsChangeAndFade("Press Enter to start!");
    $(this).parent().parent().parent().fadeTo(100,1);
  }
});



