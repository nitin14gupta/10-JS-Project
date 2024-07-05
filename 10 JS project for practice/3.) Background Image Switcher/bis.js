document.getElementById("vintage").onclick = vintageBackground;
document.getElementById("adventures").onclick = adventureBackground;
document.getElementById("animal").onclick = animalBackground;
document.getElementById("romantic").onclick = romanticBackground;

function vintageBackground(){
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('vintage.jpg')" ;
    document.getElementsByTagName("body")[0].style.color = "black";
}
function adventureBackground(){
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('adventure.jpg')" ;
    document.getElementsByTagName("body")[0].style.color = "black";
}
function animalBackground(){
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('animal.jpg')" ;
    document.getElementsByTagName("body")[0].style.color = "yellow";
}
function romanticBackground(){
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('romantic.jpg')" ;
    document.getElementsByTagName("body")[0].style.color = "pink";
}