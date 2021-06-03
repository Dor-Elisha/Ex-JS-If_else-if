document.write("<h1>HomeWork</h1>")
document.write("<h2>Ex 1</h2>");
//Ex1 Start from here
let number1 = 647,
    number2 = 36548;
if (number1 > number2) { // check if number1 is bigger then number2
    document.write("The biggest number is:  \"." + number1 + "\" ");
} else if (number1 < number2) { // check if number 1 is smaller then number 2 
    document.write("The biggest number is: \"" + number2 + "\".");
} else {
    document.write("Number undefind.");
}
//Ex1 End here
document.write("</br>");
document.write("<h2>Ex 2</h2>");
//EX2 Start here
let var1 = 30428234,
    var2 = 2,
    var3 = -34994,
    sign_plus = "(+) Plus",
    sign_minus = "(-) Minus",
    sum = var1 + var2 + var3; //calculate the sum of the varibles
//sum = 0;//test that shows that everything is working.
if (sum > 0) {//check if the sum is bigger then 0
    document.write("The number: \"" + sum + "\" is above \"0\", and the sign is: \"" + sign_plus + "\".");
} else if (sum < 0) { //check if the sum is below 0
    document.write("The number: \"" + sum + "\" is below \"0\", and the sing is: \"" + sign_minus + "\".");
} else {
    document.write("The number is equal to: \"0\".");
}
//Ex2 End here
document.write("</br>");
document.write("<h2>Ex 3</h2>");
//Ex3 Start here 
let myArry = [720, 91, 628];
let temp1 = [0, 0, 0]; //place holding

//The code below its for myArry[0]

if (myArry[0] < myArry[1] && myArry[0] < myArry[2]) { //Checking if arry[0] its the smallest number, *(Making arry[0] stays in arry[0])*
    temp1[0] = myArry[0] //saving in temp1[0], myArry[0]
} else if (myArry[0] > myArry[1] && myArry[0] > myArry[2]) { //Checking if arry[0] its the biggest nunber, *(making arry[0], arry[2])*
    temp1[2] = myArry[0] //saving in temp[2], myArry[0]
} else if (myArry[0] > myArry[1] && myArry[0] < myArry[2]) { //Checking if arry[0] its bigger then arry[1] and smaller then arry[2]
    temp1[1] = myArry[0]; //saving in temp[1], myArry[0]
} else if (myArry[0] > myArry[1] && myArry[0] > myArry[2]) { //checking if arry[0] its bigger then arry[1], and bigger then arry[2]
    temp1[1] = myArry[0]; //saving in temp[1], myArry[0]
} else if (myArry[0] < myArry[1] && myArry[0] > myArry[2]) { //checking if arry[0] its smaller then arry[1], and bigger then arry[2]
    temp1[1] = myArry[0]; //saving in temp[1], myArry[0
} else {
    temp1 = myArry;
}

//End of the code for myArry[0]
//The code below its for myArry[1]

if (myArry[1] > myArry[0] && myArry[1] > myArry[2]) { //Checking if arry[1] its the biggest number
    temp1[2] = myArry[1]; //saving in temp1[2], myArry[1]
} else if (myArry[1] < myArry[0] && myArry[1] < myArry[2]) { //Checking if arry[1] its the smallest number
    temp1[0] = myArry[1]; //saving in temp1[0], myArry[1]
} else if (myArry[1] > myArry[0] && myArry[1] < myArry[2]) { //Checking if arry[1] its bigger then arry[0] and smaller then arry[2]
    temp1[1] = myArry[1]; //saving in temp[1], myArry[0]
} else if (myArry[1] > myArry[0] && myArry[1] > myArry[2]) { //checking if arry[1] its bigger then arry[0], and bigger then arry[2]
    temp1[1] = myArry[1]; //saving in temp[1], myArry[0]
} else if (myArry[1] < myArry[0] && myArry[1] > myArry[2]) { //checking if arry[1] its smaller then arry[0], and bigger then arry[2]
    temp1[1] = myArry[1]; //saving in temp[1], myArry[0]
} else {
    temp1 = myArry;

}

//End of the code for myArry[1]
//The code below its for myArry[2]

if (myArry[2] > myArry[0] && myArry[2] > myArry[1]) { //Checking if arry[2] is the biggest number
    temp1[2] = myArry[2]; //saving in temp1[2], myArry[1]
} else if (myArry[2] < myArry[0] && myArry[2] < myArry[1]) { //Checking if arry[2] is the smallest number
    temp1[0] = myArry[2]; //saving in temp1[0], myArry[1]
} else if (myArry[2] > myArry[0] && myArry[2] < myArry[1]) { //Checking if arry[2] is bigger then arry[0] and smaller then arry[1]
    temp1[1] = myArry[2]; //saving in temp[1], myArry[0]
} else if (myArry[2] > myArry[0] && myArry[2] > myArry[1]) { //checking if arry[2] is bigger then arry[0], and bigger then arry[1]
    temp1[1] = myArry[2]; //saving in temp[1], myArry[0]
} else if (myArry[2] < myArry[0] && myArry[2] > myArry[1]) { //checking if arry[2] is smaller then arry[0], and bigger then arry[1]
    temp1[1] = myArry[2]; //saving in temp[1], myArry[0]
} else {
    temp1 = myArry;

}

//End of the code for myArry[2]
//results
document.write("myArry regular: " + myArry + "</br>");
myArry = temp1;
document.write("myArry after the code: " + myArry) + "</br>";

//Ex4 start here
document.write("<h2>Ex 4</h2>");
let arry = [190, 70, 850, 600, 540];
document.write("The arry its: \"" + arry + "\"" + "</br>")
//code to see whats the biggest number
if (arry[0] > arry[1] && //Checking if [0] is the biggest number 
    arry[0] > arry[2] &&
    arry[0] > arry[3] &&
    arry[0] > arry[4]) {
    document.write("The biggest number in the arry its: \"" + arry[0] + "\"");
    alert("This is from Ex4," + "The biggest number in the arry its: \"" + arry[0] + "\""); //alert
} else if (arry[1] > arry[0] && //Checking if [1] is the biggest number
    arry[1] > arry[2] &&
    arry[1] > arry[3] &&
    arry[1] > arry[4]) {
    document.write("The biggest number in the arry its: \"" + arry[1] + "\"");
    alert("This is from Ex4," + "The biggest number in the arry its: \"" + arry[1] + "\""); //alert
} else if (arry[2] > arry[0] && //Checking if [2] is the biggest number
    arry[2] > arry[1] &&
    arry[2] > arry[3] &&
    arry[2] > arry[4]) {
    document.write("The biggest number in the arry its: \"" + arry[2] + "\"");
    alert("This is from Ex4," + "The biggest number in the arry its: \"" + arry[2] + "\""); //alert
} else if (arry[3] > arry[0] && //Checking if [3] is the biggest number
    arry[3] > arry[1] &&
    arry[3] > arry[2] &&
    arry[3] > arry[4]) {
    document.write("The biggest number in the arry its: \"" + arry[3] + "\"");
    alert("This is from Ex4," + "The biggest number in the arry its: \"" + arry[3] + "\""); //alert
} else if (arry[4] > arry[0] && //Checking if [4] is the biggest number
    arry[4] > arry[1] &&
    arry[4] > arry[2] &&
    arry[4] > arry[3]) {
    document.write("The biggest number in the arry its: \"" + arry[4] + "\"");
    alert("This is from Ex4," + "The biggest number in the arry its: \"" + arry[4] + "\""); //alert 
} else {
    document.write("The number is \"0\"")
}
document.write("</br>" + "<h2>Ex 5</h2>")
//End of Ex 4
//Ex5 Start from here

let ex5Arry = [847463, 820, 61, 0, 100];
document.write("The arry is: \"" + ex5Arry + "\"" + "</br>"); //writing the arry
//For ex5Arry[0]
if ((ex5Arry[0] % 2) == 0) { //check if the arry is even
    document.write("The number \"" + ex5Arry[0] + "\" is even" + "</br>")
} else { //else mean if the number is not even, so is odd
    document.write("The number \"" + ex5Arry[0] + "\" is odd" + "</br>")
}
//For ex5Arry[1]
if ((ex5Arry[1] % 2) == 0) { //check if the arry is even
    document.write("The number \"" + ex5Arry[1] + "\" is even" + "</br>")
} else { //else mean if the number is not even, so is odd
    document.write("The number \"" + ex5Arry[1] + "\" is odd" + "</br>")
}
//For ex5Arry[2]
if ((ex5Arry[2] % 2) == 0) { //check if the arry is even
    document.write("The number \"" + ex5Arry[2] + "\" is even" + "</br>")
} else { //else mean if the number is not even, so is odd
    document.write("The number \"" + ex5Arry[2] + "\" is odd" + "</br>")
}
//For ex5Arry[3]
if ((ex5Arry[3] % 2) == 0) { //check if the arry is even
    document.write("The number \"" + ex5Arry[3] + "\" is even" + "</br>")
} else { //else mean if the number is not even, so is odd
    document.write("The number \"" + ex5Arry[3] + "\" is odd" + "</br>")
}
//For ex5Arry[4]
if ((ex5Arry[4] % 2) == 0) { //check if the arry is even
    document.write("The number \"" + ex5Arry[4] + "\" is even" + "</br>")
} else { //else mean if the number is not even, so is odd
    document.write("The number \"" + ex5Arry[4] + "\" is odd" + "</br>")
}