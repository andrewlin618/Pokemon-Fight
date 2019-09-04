//Define all pokemon in the game;

//Features for Charizard
var pokemon004 = { name: "小火龙", hp: "39", level: "5", attack: "60", defence: "50", evolutionLevel: 16 }
var pokemon005 = { name: "火恐龙", hp: "58", level: "16", attack: "80", defence: "65", evolutionLevel: 36 }
var pokemon006 = { name: "喷火龙", hp: "78", level: "36", attack: "109", defence: "85", evolutionLevel: 100 }
var pokemon1 = pokemon004;

//Features for Pikachu
var pokemon025 = { name: "皮卡丘", hp: "35", level: "5", attack: "55", defence: "40", evolutionLevel: 0}
var pokemon026 = { name: "雷丘", hp: "60", level: "30", attack: "90", defence: "80", evolutionLevel: 100 }
var pokemon2 = pokemon025;

//Features for Dragonite
var pokemon147 = { name: "迷你龙", hp: "41", level: "5", attack: "64", defence: "45", evolutionLevel: 30 }
var pokemon148 = { name: "哈克龙", hp: "61", level: "30", attack: "84", defence: "65", evolutionLevel: 55 }
var pokemon149 = { name: "快龙", hp: "91", level: "55", attack: "134", defence: "95", evolutionLevel: 100 }
var pokemon3 = pokemon147;

//Features for Mewtwo
var pokemon150 = { name: "超梦", hp: "106", level: "5", attack: "154", defence: "90", evolutionLevel: 100 }
var pokemon1 = pokemon150;

//Features for Teddiursa
var pokemon216 = { name: "熊宝宝", hp: "60", level: "5", attack: "80", defence: "50", evolutionLevel: 30 }
var pokemon217 = { name: "圈圈熊", hp: "90", level: "5", attack: "130", defence: "75", evolutionLevel: 100 }


//add functions for Pokemon
function evolution(pokemon) {
    switch (pokemon) {
        case "pokemon1":
            if (this.level > 16 || this.level < 36) {
                pokemon1 = pokemon005;
            }
            else if (this.level > 36) {
                pokemon1 = pokemon006;
            }
            break;
        case "pokemon2":
            if (this.level > 30) {
                pokemon2 = pokemon026;
            }
            break;
        case "pokemon3":
            if (this.level > 30 || this.level < 55) {
                pokemon3 = pokemon148;
            }
            else if (this.level > 55) {
                pokemon1 = pokemon149;
            }
            break;
        case "pokemon4":
            break;
    }
}
