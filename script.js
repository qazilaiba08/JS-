//for loop ma phala intial kraga or phr condition phr 

// let cleanestCities =["cheyenne","santa fa",'tusaco','great falls','heaven'];
// let cityToCheck = 'great falls';
// for (let i = 0; i <= 4; i++){
//     if (cityToCheck === cleanestCities[2]) {
//         alert("It's one of the cleanest cities");
//     }
//     else{
//         alert("It's not one of the cleanest cities");
//     }
// }
// let months =["jan",'feb ','mar','april','may','june'];
// let monthToCheck = "april";
// for (let i =0; i <= 5; i++){
//     if (monthToCheck === months[2]) {
//         alert("It's a month of april");
//     }
//     else if(monthToCheck === months[3]){
//      alert("It's a april month");
//     }
//     else{
//         alert("it's a may month")
//     }
// }

let qulification = ['SSC',"HSC",'BSC','BS','B.COM','MS','MBBS','LLB'];

document.write('<h3>Qulifaction</h3>');
document.write("<ol>");

for (let i =0 ; i <= 7; i++){
    document.write("<li> <b>"+qulification[i]+"</b> </li>");
}
document.write("</ol>");

let fruits = ['mango',"apple",'banana','graps','pineapple','kewi','watermellon','strawberry'];

document.write('<h3>Fruits</h3>');
document.write("<ul>");

for (let i =0 ; i <= 7; i++){
    document.write("<li> <b>"+fruits[i]+"</b> </li>");
}
document.write("</ul>");

// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.


// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.

let colors = ["red","blue","yellow","green","black","white"];
document.write("ORIGINAL Array :"+ colors)
let color = prompt(" what color he/she wants to add to the beginning & add that color to the beginning ");
colors.unshift(color)
document.write("<br> updated Array :"+ colors);
let Color = prompt(" what color he/she wants to add to the beginning & add that color to the end ");
colors.push(Color);

document.write("<br> updated Array :"+ colors);
colors.unshift("navyblue","yellowgrey");
document.write("<br> updated Array :"+ colors);




let colour = ["Yellow", "Green", "Orange", "Purple", "Red", "Black", "Gray"];
document.write("Original Array is: " + colour);
let index_to_delete = +prompt("At which index color will be Deleted");
let colourNo_to_delete = +prompt("Enter the Color Name that you want to delete ");
colour.splice(index_to_delete,colourNo_to_delete);
document.write("<br><br>Updated Array is : " + colour);

let score = [320,230,480,120];
document.write("<h3>Scores of Students:"+ score)
score.sort();
document.write("<br> Ordered scores of students: "+ score)