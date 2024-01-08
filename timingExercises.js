//Count Down from an integer to 0 and log DONE! when it reaches 0. Only works for integers.

function countDown(num){
    let counter = setInterval(function(){
        num--;
        if(num <= 0){
            clearInterval(counter);
            console.log("DONE!");
        }
        else{
            console.log(num);
        }
    }, 1000)
}

//Create a game that randomly selects a number between 0 and 1 every second, and add 1 to the counter each time a number is picked. when  a number greater than .75 is picked, stop the game and log how many numbers were picked.

function randomGame(){
    let num;
    let count = 0;
    let timer = setInterval(function(){
        num=Math.random();
        count++;
        if(num > .75){
            clearInterval(timer);
            console.log("It took " + count + " try/tries.")
        }
    }, 1000)
}