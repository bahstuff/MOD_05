console.log("-------EJ10: Introduce hotel a buscar en input-------");

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

let hotelExiste = false;

function hazClick(){
 for(i = 0 ; i < hoteles.length; i++){
     let search = document.getElementById("textBox").value;
    if(hoteles[i].hotelName === search){
        hotelExiste = true;
    }
 }
 if(hotelExiste){
     alert("EXISTE");
 } else {
     alert("NO EXISTE");
 }
}

document.getElementById("myButton").addEventListener("click", hazClick );