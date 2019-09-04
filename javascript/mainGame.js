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

//Picking Pokemon;
$(".btn-pickme").on("click", function (){
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

// Press "Attack";
$(".btn-attack").on("click", function () {
  alert("TODO:!!!!!");
});

//Press "Recover";
$(".btn-recover").on("click", function () {
  myHp = parseInt(myPokemon.hp);
  $("#my-hp").text("HP = " + myHp);
  $(".fight-text").text(myPokemon.name + " is fully recovered.")
});

//Press "Thunderstone";
$(".btn-thunderstone").on("click", function () {
  if (myPokemon.name === "皮卡丘") {
    //TODO:evolution();
    $(".fight-text").text("皮卡丘 evolved into 雷丘 successfully!");
  }
  else {
    $(".fight-text").text("Thunderstone has no effect on " + myPokemon.name + " .")
  }

});

