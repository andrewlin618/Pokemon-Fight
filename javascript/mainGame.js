const DMI = 15

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

// Press "Attack";
$(".btn-attack").on("click", function () {
  myDamage = 0.5 * Math.floor((0.8 + 0.4 * Math.random()) * myPokemon.attack * DMI / (enemyPokemon.defense + DMI));
  enemyHp = enemyHp - myDamage;

  //Enemy died;
  if (enemyHp <= 0) {
    $("#enemy-hp").text("HP = " + 0);
    $(".enemy-blood-bar").width("0%");
    $(".fight-text").text(myPokemon.name + " has beaten the " + enemyPokemon.name + " !");
    myLevel++;
    $("#my-level").text("LEVEL = " + myLevel);
    // TODO:Fight the next enemy;
  }

  //Enemy did not die;
  else {
    enemyDamage = 0.5 * Math.floor((0.8 + 0.4 * Math.random()) * enemyPokemon.attack * DMI / (myPokemon.defense + DMI));
    myHp = myHp - enemyDamage;
    if (myHp < 0) {
      $("#my-hp").text("HP = " + 0);
      $(".my-blood-bar").width("0%");
      gameOver();
    }
    else {
      myLevel++;
      $("#my-level").text("LEVEL = " + myLevel);

      $("#my-hp").text("HP = " + myHp);
      $(".my-blood-bar").width(myToPercent(myHp / myPokemon.hp));

      $("#enemy-hp").text("HP = " + enemyHp);
      $(".enemy-blood-bar").width(myToPercent(enemyHp / enemyPokemon.hp));

      $(".fight-text").text(myPokemon.name + " caused " + myDamage + " points damage to " + enemyPokemon.name + " ;   " + enemyPokemon.name + " caused " + enemyDamage + " points damage to " + myPokemon.name + ";");
    }
  }


});

//Press "Recover";
$(".btn-recover").on("click", function () {
  myHp = parseInt(myPokemon.hp);
  $("#my-hp").text("HP = " + myHp);
  $(".my-blood-bar").width("100%");
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

