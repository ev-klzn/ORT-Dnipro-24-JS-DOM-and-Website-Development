
function genNumber(){  //1...6
    let n = Math.random(); //0...099
    n = Math.floor(n * 6); //0...5
    n = n + 1; // 1...6
    return n;   
}

let balance = 10000;

function play () {
    let bet  = +userBet.value;
    let option = +userOption.value;
    console.log(bet, option);

    if(bet > balance){
        messagePlace.innerHTML = 'Недостаточно средств!';
        return;   // может прервать функцию
    }

    let dice1 = genNumber();
    let dice2 = genNumber();
    console.log(dice1, dice2);
    
    dice1Image.src = `./assets/images/${dice1}.png`;
    dice2Image.src = `./assets/images/${dice2}.png`;

    if((dice1 + dice2) == option){
        messagePlace.innerHTML = `Вы выиграли ${bet}грн.`;
        balance = balance + bet;
    } else{
        messagePlace.innerHTML = `Вы проиграли ${bet}грн.`;
        balance = balance - bet;
    }

    userBalance.innerHTML = balance;
}