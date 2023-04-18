// Task 1:
// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx"

// var zakatPercentage = 0.025
// var userInput =+ prompt("Mention your asset value")
// var result = zakatPercentage * userInput
// alert ("Your calculated Zakat is  "+ result )
// console.log(alert)

// Task 2:
// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.

// var familyMembers =+ prompt ("Enter the total number of family members:")
// alert ("PLEASE READ THIS: \n 2 kg wheet costs Rs 250 \n 3.5 kg barley costs Rs 450 \n 3.5 kg date costs Rs 2100 \n 3.5 kg raisin costs Rs 2800")
// var userInput = prompt("Choose your Fitrah method below: \n 1- WHEET (2 KG)\n 2- BARLEY (3.5 KG)\n 3- DATE (3.5 KG)\n 4- RAISIN (3.5 KG)", " TYPE LETTER \n A-WHEET \n B-BARLEY \n C-DATE \n D-RAISIN")
// var A =  250;
// var B =  450;
// var C =  2100;
// var D =  2800;
//  if (userInput == 'A') {
//     var result = 250 * familyMembers;
// } else if(userInput == 'B') {
//      result = 450 * familyMembers;
// } else if (userInput == 'C') {
//      result = 2100 * familyMembers;
// } else if (userInput == 'D') {
//      result = 2800 * familyMembers;
// }
// alert ("Your Fitrah Amount is  "+ result )
// console.log(alert)

// Task 3:
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

// var secretNumber = 4;
// var guess =+ prompt('Guess the number between 1 and 10');
// if (guess == secretNumber)
//   alert('Congratulations! You guessed the secret number');
//  else if (guess <= secretNumber) {
//   alert("You are near! Step up");
//  }
//   else if (guess >= secretNumber){ 
//   alert("You are near! Step down!");
//   }

// Task 4:
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

// var inputname = prompt("Enter a name: ")
// var firstLetter = inputname.slice(0,1);
// firstLetter = firstLetter.toUpperCase();
// var remainingLetters = inputname.slice(1)
// remainingLetters = remainingLetters.toLowerCase();
// var Titlecase = firstLetter +  remainingLetters;
// alert ("User is "+ Titlecase )
// console.log(alert)

// Task 5:
// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

// var contactNumbers = [];
// var contactNames = [];
// for (var i = 0; i < 2; i++) {
//     var num = + prompt("Enter number: ")
//     var con_name = prompt("Enter the corresponding name: ")
//     contactNumbers.push(num)
//     contactNames.push(con_name)
// }
// alert("Here is you data: \n " + contactName + ": " + contactNumbers)


// Task 6:
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

// var products = ["Sooper", " Prince", " Candy", " Tuc", " Gala", " Click"];
// alert(products)
// var need = + prompt("Enter the number of product you want: ", " 0 to 5")
// var CATCH = products.splice(need, 1)
// alert("Catch your product: " + CATCH);
// for (var i = 0; i < products.length; i++) {
//     console.log(products[i])
// }
// alert("Remaining no of products: " + products.length);
// console.log("Remaining products: " + products);

// Task 7:
// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.

// var nationality = prompt('Your Nationality?')
// console.log(nationality.toLowerCase())

// if (nationality == 'pakistani' || nationality == 'indian') {
//     var gender = prompt('Your Gender?', 'm/f')
//     var age = +prompt('Your Age?')
//     if ((gender == 'm') && (age >= 18)) {
//         console.log('Go to the voting room')
//     }
//     else if (gender == 'f') {
//         var marital_status = prompt('Married?', 'y/n')
//         if (marital_status == 'y' && (age >= 18)) {
//             console.log("Please proceed to vote.")
//         }
//         else {
//             console.log('Better Luck Lady!')
//         }
//     }
//     else {
//         console.log("You're not eligible")
//     }
// }
// else {
//     console.log("You're not eligible")
// }
// Task 8:
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)

// var WorldCupSquad = ['A', ' B', ' C', ' D', ' E', ' F', ' G', ' H', ' I', ' J', ' K', ' L', ' M', ' N', ' O']
// var forindia = WorldCupSquad.slice(0,11)
// alert(forindia)