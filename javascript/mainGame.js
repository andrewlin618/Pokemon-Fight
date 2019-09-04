const DMIM = 0.03
const DMIE = 0.05
const DFI = 40

var myPokemonPicked = false;
var enemyPokemonPicked = 0;
var myPokemon;
var enemyPokemon;

var myPokemonId;
var enemyPokemonId1;
var enemyPokemonId2;
var enemyPokemonId3;
var enemyIndexNow = 1;

var myHp;
var myLevel;
var enemyHp;
var myDamage;
var enemyDamage;
var gameOverAlready = false;
var gameWinAlready = false;

function disableButton() {
  $("#attackButton").off('click');
  $("#recoverButton").off('click');
  $("#thunderstoneButton").off('click');
}

function enableButton() {
  //Picking Pokemon;
  $(".btn-pickMe").on("click", function () {
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
      $(".btn-pickMe").css('background-color', 'brown');
      $(".btn-pickMe").css('border-color', 'brown');
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

  //Press "Attack" button;
  $(".btn-attack").on("click", function () {
    if (gameOverAlready) {
      alert("You lose! Refresh to restart!")
      return;
    }
    if (gameWinAlready) {
      alert("You win! Refresh to restart!")
      return;
    }

    //Calculate my damage;
    myDamage = Math.floor(Math.cbrt(myLevel) * DMIM * (0.8 + 0.4 * Math.random()) * myPokemon.attack * DFI / (enemyPokemon.defense + DFI));
    enemyHp = enemyHp - myDamage;

    //If enemy died;
    if (enemyHp <= 0) {
      $(".fight-text").text(myPokemon.name + " has beaten the " + enemyPokemon.name + " !");
      enemyHp = 0;
      printEnemyPokemonInfo();

      myLevel++;
      $("#my-level").text("LEVEL = " + myLevel);
      checkEvolution();
      
      disableButton();
      setTimeout(function () {
        setNextEnemy();
        enableButton();
      }, 2000);
    }

    //If enemy did not die;
    else {
      //Calculate enemy damage;
      enemyDamage = Math.floor(DMIE * (0.8 + 0.4 * Math.random()) * enemyPokemon.attack * DFI / (myPokemon.defense + DFI));
      myHp = myHp - enemyDamage;

      //If my pokemon died;
      if (myHp <= 0) {
        gameOverAlready = true;
        gameOver();
      }

      //Neither died;
      else {
        $("#my-hp").text("HP = " + myHp);
        $(".my-blood-bar").width(myToPercent(myHp / myPokemon.hp));

        $("#enemy-hp").text("HP = " + enemyHp);
        $(".enemy-blood-bar").width(myToPercent(enemyHp / enemyPokemon.hp));

        $(".fight-text").html(myPokemon.name + " caused &nbsp&nbsp&nbsp" + myDamage + " &nbsp&nbsp&nbsppoints damage to " + enemyPokemon.name + " ; <br> " + enemyPokemon.name + " caused &nbsp&nbsp&nbsp" + enemyDamage + "&nbsp&nbsp&nbsppoints damage to " + myPokemon.name + ";");
        
        myLevel++;
        $("#my-level").text("LEVEL = " + myLevel);
        checkEvolution();
      }
    }
  });

  //Press "Recover" button;
  $(".btn-recover").on("click", function () {
    if (gameOverAlready) {
      alert("You lose! Refresh to restart!")
      return;
    }
    if (gameWinAlready) {
      alert("You win! Refresh to restart!")
      return;
    }
    myHp = parseInt(myPokemon.hp);
    $("#my-hp").text("HP = " + myHp);
    $(".my-blood-bar").width("100%");
    $(".fight-text").text(myPokemon.name + " is fully recovered.")
  });

  //Press "Thunderstone" button;
  $(".btn-thunderstone").on("click", function () {
    if (gameOverAlready) {
      alert("You lose! Refresh to restart!")
      return;
    }
    if (gameWinAlready) {
      alert("You win! Refresh to restart!")
      return;
    }

    if (myPokemon.id === "025") {
      $(".fight-text").text("皮卡丘 evolved into 雷丘 successfully!");
      disableButton();
      setTimeout(function () {
        evolution();
        enableButton();
      }, 2000);

    }
    else {
      $(".fight-text").text("Thunderstone has no effect on " + myPokemon.name + " .")
    }

  });

};


enableButton();