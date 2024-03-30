#!/usr/bin/env node

import inquirer  from "inquirer";

let  myBalance = 50000;

let myPin :Number= 22331;

let operationAns:any  ;

console.log(" we welcome you here :")
let pinAnswer = await inquirer.prompt(
[
    {
        name:"pin",
        message: "enter your pin number",
        type:"number"
    }
]
);
 if (pinAnswer.pin === myPin){
    console.log("correct pin code!!!");



    let operationAns = await inquirer.prompt(
        [      {
                name:"accountType",
                message:"plese select your account type",
                type:"list",
                choices:["withdraw","check balance","deposit","exit"]
            },

            {
                name :"transMethod",
                message:"select your transaction method",
                type :"list",
                choices :["cash withdraw","fast cash"]
            }
        ]
    );

    if(operationAns.accountType === "check balance"){
        console.log("your balance is : " + myBalance)
    }
    if(operationAns.accountType === "exit"){
        console.log("Thanks for using atm....")
    }
    if(operationAns.accountType==="deposit"){
        let deposit = await inquirer.prompt([{
            type :"number",
            message :"deposit amount enter ",
            name :"rupee"
        }])
        console.log("deposit amount :" +deposit.rupee )
        console.log("Total balance is :" +myBalance + deposit.rupee)
    }

 if(operationAns.transMethod === "withdraw"){

    let amountAns = await inquirer.prompt(
        [
            {
                name :"amount",
                message: "enter your amount",
                type: "number"
            }
        ]
       );
 if(myBalance >=amountAns.amount){
         myBalance -= amountAns.amount
        console.log("your total balance is  "+  myBalance )
       }
    else{
        console.log("insufficent balance")
    }
    }

    else{
         let fastCashamount = await inquirer.prompt([{
            name :"fastCash",
            message :"How much amount do you want to withdraw :",
            type :"list",
            choices:["1000","3000","5000"]
         }]); 
        if(myBalance >= fastCashamount.fastCash){
        myBalance -= fastCashamount.fastCash
        console.log(" your total balance is" +  myBalance)
        }
        else{
              console.log("insufficient balance")
        }
console.log("Thanks");
 
 }
}else{
    console.log("invalid pin code :")
}