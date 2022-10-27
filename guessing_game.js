let input = require('readline-sync')

while (true){
    let opt = input.question("----------you wanna play----\n-------1.yes\n-------2.no\n-------")
    if(opt==1 || opt=='yes'){
        let num = Math.floor(Math.random()*10);
        let i=3;
        while(i>=0){
            guess_num = input.questionInt("----guess the number between 1 and 10----\n----you have--"+i+'--chances:----')
            if(i==0){console.log("------you lost-----bye bye:---")
            break}
            else{
            if (guess_num===num) {console.log("-----wonderful----you won----")
                break
            }
            else if (guess_num>num) {console.log("------wrong guess----\n-----hint >>> your number is greater than the secret number:");}
            else {console.log("------wrong guess----\n-----hint >>> your number is smaller than the secret number:-----");}
        i--
        if (i==0){console.log(`------you lost\n-------secret number ${num}`);
            opt = input.question("------wanna play again\n------1.yes\n------2.no\n------")
            if(opt==1 || opt=='yes'){
                continue}
            else {console.log("------bye bye have a nice day\n------well played")
                break
            }
        }
            }
        }
    }
    else {console.log("bye have a nice day: ")}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    break
}