//-------1º-------
const ej1= [25, 3.05, 100,63, 4.01, -9];

console.log("------EJ1------");

for(i=0; i< ej1.length; i++){
    if(ej1[i]<10){
        console.log(ej1[i]);
    }
}

//-----2º y 3º-----
const ej2 = [14, 2, 2.02, 63, 0, -9]

console.log("-------EJ2-------");

for(i=0; i< ej2.length; i++){
    if(ej2[i]>10){
        console.log(ej2[i]);
    }
}

console.log("-------EJ3-------");
var igualMayor = [];
var menor = [];

for(i=0; i< ej2.length; i++){
    if(ej2[i]<10){
        menor.push(ej2[i]);
    } else {
        igualMayor.push(ej2[i]);
    }
}
console.log("Estos números son menores que 10: " + menor);
console.log("Estos números son mayores o igual que 10: " + igualMayor);

//4º
console.log("-------EJ4-------");
const ej4 = [14, 2, 2.02, 63, 0, -9]
var elementosEliminados = []

for(i=0; i< ej4.length; i++){
    if(ej4[i]<0){
        elementosEliminados = ej4.splice(i)
    }
}
console.log("Números sin eliminar: " + ej4);
console.log("Números eliminados: " + elementosEliminados);

//-------5º-------
const people =[
    {
        id: 1,
        name: "Jhon",
        age: 25,
    },
    {
        id: 2,
        name: "Doe",
        age: 8,
    },
    {
        id: 3,
        name: "Clara",
        age: 15,
    },
    {
        id: 4,
        name: "Elisa",
        age: 30,
    },
    {
        id: 5,
        name: "Pedro",
        age: 18,
    },
]

//UTILIZANDO FUNCION  SLICE () & REVERSE() copia del orden invertido (+ rápido)
console.log("-------EJ5--------------------------------------");
const peopleReversed = people.slice().reverse();

for(person of peopleReversed){
    imprimir(person);
}

function imprimir(person){
    for (propiedad in person) {
        console.log(propiedad + ": " + person[propiedad]);
    }
    console.log("-----------------");
}

//-------6º-------
console.log("-------EJ6-------");
for(person of people){
    if(person.age>=18){
        imprimir(person);
    }
}

//-------7º-------
console.log("-------EJ7-------");
var underAge = [];
var adult= [];

for(var i = 0; i < people.length ; i++){
    if(people[i].age < 18){
        underAge.push(people[i]);
    } else {
        adult.push(people[i]);
    }
}
console.log("-------ESTOS SON MENORES:");
for(person of underAge){
    imprimir(person);
}

console.log("-------ESTOS SON ADULTOS:");
for(person of adult){
    imprimir(person);
}



//-------8º-------
console.log("-------EJ8-------");

const hoteles =[
    {
        hotelId: 1,
        hotelName: "MELIA",
        availableRooms: 25,
        price: 10.20,
    },
    {
        hotelId: 2,
        hotelName: "NH",
        availableRooms: 8,
        price: 4.25,
    },
    {
        hotelId: 3,
        hotelName: "ILUNION",
        availableRooms: 15,
        price: 14.30,
    },
    {
        hotelId: 4,
        hotelName: "CARLTON",
        availableRooms: 30,
        price: 10,
    },
    {
        hotelId: 5,
        hotelName: "ERCILLA",
        availableRooms: 10,
        price: 8.10 ,
    },
]

for(hotel of hoteles){
    if(hotel.availableRooms < 10){
        hotel.price += 10;
        console.log("- A este añadimos 10 € -")
    } else {
        console.log("- Mantenemos el mismo precio -")
    }
    imprimir(hotel);
}

function imprimir(hotel){
    for (propiedad in hotel) {
        console.log(propiedad + ": " + hotel[propiedad]);
    }
    console.log("-----------------");
}

//-------9º-------
console.log("-------EJ9-------");


const hoteles2 =[
    {
        hotelId: 1,
        hotelName: "Hotel 1",
        availableRooms: 25,
        price: 10.20,
    },
    {
        hotelId: 2,
        hotelName: "Hotel 2",
        availableRooms: 8,
        price: 4.25,
    },
    {
        hotelId: 3,
        hotelName: "Hotel 3",
        availableRooms: 15,
        price: 14.30,
    },
    {
        hotelId: 4,
        hotelName: "Hotel 4",
        availableRooms: 30,
        price: 10,
    },
    {
        hotelId: 5,
        hotelName: "Hotel 5",
        availableRooms: 10,
        price: 8.10 ,
    },
]
const fewRoomsAvailable = [];

for(var i = 0; i < hoteles2.length ; i++){
    if(hoteles2[i].availableRooms < 10){
        hoteles2[i].price += 10;
        fewRoomsAvailable.push(hoteles2[i]);
    }
}
console.log("LOS SIGUIENTES HOTELES INCREMENTAN SU PRECIO:");
for(hotel of fewRoomsAvailable){
    imprimir(hotel);
}


//-------10º-------
console.log("---EJ10: Introduce hotel a buscar en input y haz click en buscar---");

//Opcion1
// let hotelExiste = false;

// function hazClick(){
//  for(i = 0 ; i < hoteles.length; i++){
//      let search = document.getElementById("textBox").value;
//     if(hoteles[i].hotelName === search){
//         hotelExiste = true;
//     }
//  }
//  if(hotelExiste){
//      alert("El hotel " + searchHotel + " existe");
//  } else {
//      alert("El hotel " + searchHotel + " NO existe");
//  }
// }
// document.getElementById("myButton").addEventListener("click", hazClick );


//Opcion 2
function search () {
    let searchHotel = document.getElementById("textBox").value;
    var found = hoteles2.find(hotel=> hotel.hotelName === searchHotel);
    if(found){
        alert("El hotel " + searchHotel + " existe");
    } else {
        alert("El hotel " + searchHotel + " NO existe");
    }
}
document.getElementById("myButton").addEventListener("click", search);