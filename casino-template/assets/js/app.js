
    function genNumber(){ 
        let n = Math.random(); 
        n = Math.floor(n * 6);  
        n = n + 1; 
        return n;
    }

    let balance = 10000;

    function play(){
        
        let bet     = +userBet.value;
        let option  = +userOption.value;

        if(bet > balance){
            messagePlace.innerHTML = 'Не хватает средств на балансе((';
            return;
        }

        let dice1 = genNumber();
        let dice2 = genNumber();

        dice1Image.src = `./assets/images/${dice1}.png`;
        dice2Image.src = `./assets/images/${dice2}.png`;

        if((dice1 + dice2) == option){
            messagePlace.innerHTML = `Вы выиграли ${bet} грн.`;
            balance = balance + bet;
        }else {
            messagePlace.innerHTML = `Вы проиграли ${bet} грн.`;
            balance = balance - bet;
        }  

        userBalance.innerHTML = balance;

    }
    