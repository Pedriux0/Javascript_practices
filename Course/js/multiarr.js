'use strict'
//categories of movies
let categories = ['Action', 'Adventure', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi', 'Thriller'];
//movies of adventure
let adventure = ['The Lord of the Rings', 'The Hobbit', 'Harry Potter', 'Indiana Jones', 'Star Wars', 'Jurassic Park', 'Pirates of the Caribbean', 'The Chronicles of Narnia', 'The Mummy', 'The Hunger Games'];

var cine = [categories,adventure];

/*
cine.forEach((element,index,arr) =>{
    console.log(arr);
    document.write("<h3>"+ index + element + "</h3>");
    document.write("</br>")
});
*/
var gender = [];
do{
    {
        gender = prompt("Enter a movie genre or type 'Finish' to exit");
        cine.push(gender);
    }
}
while(gender != "Finish");
// display it in the html the cine var with the index

cine.forEach((element,index,arr) =>{
    console.log(arr);
    document.write("<h3>"+ index + element + "</h3>");
    document.write("</br>")
}
);

for (let categorie in categories){
    document.write("<li>" + categories[categorie] + "</li>")
}

// Searchs 
var Searchs = categories.find(categorie => categorie == "Comedy");
//Create list of prices 
var prices = [10,20,30,40,50,60,70,80,90,100];
var pricesList = prices.some(price => price > 30);
document.write(pricesList);
document.write(Searchs);