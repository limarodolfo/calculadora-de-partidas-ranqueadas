function calculateLevel(wins, defeats) {
    return wins - defeats;
}

function determineLevel(performance) {
    if (performance < 10) {
        return "Ferro";
    }
    else if (performance >= 10 && performance < 20) {
        return "Bronze";
    } 
    else if (performance >= 21 && performance < 50) {
        return "Prata";
    } 
    else if (performance >= 51 && performance < 80) {
        return "Ouro";
    } 
    else if (performance >= 81 && performance < 90) {
        return "Diamante";
    } 
    else if (performance >= 91 && performance < 100) {
        return "Lendário";
    }
    else {
        return "Imortal";
    }

}

let nameCharacter = "User";
let wins = 100;
let defeats = 50;

let performance = calculateLevel(wins, defeats);
let level = determineLevel(performance);

console.log("O Herói", nameCharacter, "tem saldo de", performance, "e está no nível", level);