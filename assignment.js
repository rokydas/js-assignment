// This is a function to convert from feet to mile. 
function feetToMile(feetValue){
    if(feetValue < 0) return -1;
    let mileValue = feetValue * 0.000189394;
    return mileValue;
}

// Checking feetToMile function
let mile = feetToMile(10);
if(mile == -1){
    console.log("Invalid Input");
}
else{
    console.log("The equivalent mile value of 10 feet is " + mile);
}

// This is a function to measure the total nedded wood
// We need 1 cubic feet wood to make a chair
// We need 3 cubic feet wood to make a table
// We need 5 cubic feet wood to make a bed
function woodCalculator(numChair, numTable, numBed){
    if(numChair < 0 || numTable < 0 || numBed < 0){
        return -1;
    }

    let woodForChair = 1 * numChair;
    let woodForTable = 3 * numTable;
    let woodForBed = 5 * numBed;
    let totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;
}

// Checking woodCalculator function
let netWood = woodCalculator(10, -20, 5);
if(netWood == -1){
    console.log("Invalid Input");
}
else{
    console.log("Total nedded wood is " + netWood);
}

// This is a function to measure the total nedded brick
// First 10 floor's height is 15 ft
// Second 10 floor's height is 12 ft
// else floor's height is 10 ft
// 1000 bricks (constant) for 1 ft height

function brickCalculator(numFloor){
    let totalBrick;
    if(numFloor - Math.round(numFloor) != 0){     // This is to handle floating numbers. 
        totalBrick = -1;
    }
    else if(numFloor > 0 && numFloor <= 10){      // This is for  1st to 10th floor. 
        totalBrick = numFloor * 15;
    }
    else if(numFloor > 10 && numFloor <= 20){     // This is for  11th to 20th floor. 
        totalBrick = 10 * 15 + (numFloor - 10) * 12;
    }
    else if(numFloor > 20){                       // This is for  21th to unlimited floor. 
        totalBrick = 10 * 15 + 10 * 12 + (numFloor - 20) * 10;
    }
    else{                                         // This is to handle negative input. 
        totalBrick = -1;
    }
    return totalBrick;
}

// Checking brickCalculator function
let netBrick = brickCalculator(45.5);
if(netBrick == -1) {
    console.log("Invalid Input");
}
else {
    console.log("Total needed brick is " + netBrick);
}

// This is a function to find out the smallest name from an array. 
function tinyFriends(friendsArray){
    if(friendsArray.length == 0) {                          // This is to handle empty string. 
        return [];
    }

    let tinyNameLength = friendsArray[0].length;            
    let tinyNames = [];                                     // Creating an empty array for tiny names. 
    
    for(i = 0 ; i < friendsArray.length; i++){
        let nameLength = friendsArray[i].length;

        if(nameLength != 0 && nameLength < tinyNameLength){  // Null string "" cannot be a name.
            tinyNameLength = nameLength;
            tinyNames = [];                                  // Clearing the all stored tiny names. 
            tinyNames.push(friendsArray[i]);
        }
        else if(nameLength == tinyNameLength){               // Saving all same length names. 
            tinyNames.push(friendsArray[i]);
        }
    }
    return tinyNames;
}

// Checking tinyFriends function
let friendsArray = ["Tamim", "Mushfiq", "Mashrafee", "Sakib", "Mahmudullah", ""];

let tinyNames = tinyFriends(friendsArray);
if(tinyNames.length == 0){
    console.log("There was no name in that array");        // No name in the array.   
}

else if(tinyNames.length == 1) {
    console.log("The tiny name is " + tinyNames[0]);       // Printing 1 tiny name. 
}

else{                                               // Printing more than 1 tiny names.
    console.log("The tiny names are: ");
    for(i = 0 ; i < tinyNames.length ; i++){
        if(i == tinyNames.length - 1){
            console.log(tinyNames[i] + ".");        // For last name, printing full stop. 
        }
        else {
            console.log(tinyNames[i] + ", ");       // For other name, printing comma. 
        }
    }
}