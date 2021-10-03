// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById("sidebar");
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById("info");
const orange = document.getElementById("orange");
const blue = window.matchMedia("(max-width: 800px)");


//Change Intropic
function turnMe() {
  orange.classList.add("turnOrange");
  waterPour();
  setTimeout(orangeOff, 4000);
}

function orangeOff() {
  orange.classList.remove("turnOrange");
}

//Make sound of juice pouring
function waterPour() {
  const waterPouring = new Audio("sounds/water.mp3");
  waterPouring.play();
}

// Show and hide about info
function show() {
  info.classList.toggle("xxc");
}
function unshow() {
  info.classList.remove("xxc");
}

//Center the loader wherever the page is
function checkForTop() {
  loader.style.top = window.pageYOffset + "px";
}
checkForTop();

//Manage the loader
function stopLoader() {
  loader.classList.add("stop");
}
function startLoader() {
  loader.classList.remove("stop");
  setTimeout(stopLoader, 1000);
}
setTimeout(stopLoader, 1000);

//Stop the sidebar appearing on small screens with matchmedia
function myFunction(x) {
  if (blue.matches) {
    sidey.classList.remove("block");
  }
}
function toggler() {
  sidey.classList.toggle("block");
}
myFunction(blue);

//GAME FUNCTIONALITY
loadImg();

function loadImg() {

var maleNames = [
  "Jimmy",
  "Pep",
  "Pol",
  "Unai",
  "Marc",
  "Juliá",
  "Jimmy",
  "Liam",
  "Noah",
  "Oliver",
  "Elijah",
  "William",
  "James",
  "Benjamin",
  "Lucas",
  "Henry",
  "Alexander",
  "Mason",
  "Michael",
  "Ethan",
  "Daniel",
  "Jacob",
  "Logan",
  "Jackson",
  "Levi",
  "Sebastian",
  "Mateo",
  "Jack",
  "Owen",
  "Theodore",
  "Aiden",
  "Samuel",
  "Joseph",
  "John",
  "David",
  "Wyatt",
  "Matthew",
  "Luke",
  "Asher",
  "Carter",
  "Julian",
  "Grayson",
  "Leo",
  "Jayden",
  "Gabriel",
  "Isaac",
  "Lincoln",
  "Anthony",
  "Hudson",
  "Dylan",
  "Ezra",
  "Thomas",
  "Charles",
  "Christopher",
  "Jaxon",
  "Maverick",
  "Josiah",
  "Isaiah",
  "Andrew",
  "Elias",
  "Joshua",
  "Nathan",
  "Caleb",
  "Ryan",
  "Adrian",
  "Miles",
  "Eli",
  "Nolan",
  "Christian",
  "Aaron",
  "Cameron",
  "Ezekiel",
  "Colton",
  "Luca",
  "Landon",
  "Hunter",
  "Jonathan",
  "Santiago",
  "Axel",
  "Easton",
  "Cooper",
  "Jeremiah",
  "Angel",
  "Roman",
  "Connor",
  "Jameson",
  "Robert",
  "Greyson",
  "Jordan",
  "Ian",
  "Carson",
  "Jaxson",
  "Leonardo",
  "Nicholas",
  "Dominic",
  "Austin",
  "Everett",
  "Brooks",
  "Xavier",
  "Kai",
  "Jose",
  "Parker",
  "Adam",
  "Jace",
  "Wesley",
  "Kayden",
  "Silas",
  "Mateo",
  "Santiago",
  "Matías",
  "Sebastián",
  "Benjamín",
  "Martín",
  "Nicolás",
  "Alejandro",
  "Lucas",
  "Diego",
  "Leonardo",
  "Daniel",
  "Thiago",
  "Joaquín",
  "Samuel",
  "Gabriel",
  "Tomás",
  "Emiliano",
  "Dylan",
  "Felipe",
  "Gael",
  "David",
  "Maximiliano",
  "Ian",
  "Bruno",
  "Hugo",
  "Adrián",
  "Leo",
  "Iker",
  "Agustín",
  "Pablo",
  "Emmanuel",
  "Julián",
  "Isaac",
  "Ignacio",
  "Lorenzo",
  "Francisco",
  "Liam",
  "Emilio",
  "Dante",
  "Aarón",
  "Valentino",
  "Bautista",
  "Jerónimo",
  "Rodrigo",
  "Manuel",
  "Simón",
  "Pedro",
  "Ángel",
  "Álvaro",
  "Alexander",
  "Vicente",
  "Franco",
  "Álex",
  "León",
  "Andrés",
  "Santino",
  "Alonso",
  "Noah",
  "Luca",
  "Juan José",
  "Fernando",
  "Antonio",
  "Javier",
  "Rafael",
  "Carlos",
  "Juan Pablo",
  "Elías",
  "Benicio",
  "Enzo",
  "Oliver",
  "Marcos",
  "Damián",
  "Salvador",
  "Máximo",
  "Izan",
  "Facundo",
  "Sergio",
  "Eric",
  "Mario",
  "Luciano",
  "Miguel",
  "Matthew",
  "Alan",
  "Juan Martín",
  "Jacob",
  "Christopher",
  "Esteban",
  "Gonzalo",
  "Áxel",
  "Ethan",
  "Christian",
  "Eduardo",
  "Jorge",
  "Juan",
  "Bastián",
  "Leonel",
  "Mauricio",
  "Tadeo",
  "Marco",
];

var femaleNames = [
  "Olivia",
  "Emma",
  "Ava",
  "Sophia",
  "Isabella",
  "Charlotte",
  "Amelia",
  "Mia",
  "Harper",
  "Evelyn",
  "Abigail",
  "Emily",
  "Ella",
  "Elizabeth",
  "Camila",
  "Luna1",
  "Sofia",
  "Avery",
  "Mila",
  "Aria",
  "Scarlett",
  "Penelope",
  "Layla",
  "Chloe",
  "Victoria",
  "Madison",
  "Eleanor",
  "Grace",
  "Nora",
  "Riley",
  "Zoey",
  "Hannah",
  "Hazel",
  "Lily",
  "Ellie",
  "Violet",
  "Lillian",
  "Zoe",
  "Stella",
  "Aurora",
  "Natalie",
  "Emilia",
  "Everly",
  "Leah",
  "Aubrey",
  "Willow",
  "Addison",
  "Lucy",
  "Audrey",
  "Bella",
  "Nova",
  "Brooklyn",
  "Paisley",
  "Savannah",
  "Claire",
  "Skylar",
  "Isla",
  "Genesis",
  "Naomi",
  "Elena",
  "Caroline6",
  "Eliana",
  "Anna",
  "Maya",
  "Valentina",
  "Ruby",
  "Kennedy",
  "Ivy",
  "Ariana",
  "Aaliyah",
  "Cora",
  "Madelyn",
  "Alice",
  "Kinsley",
  "Hailey",
  "Gabriella",
  "Allison",
  "Gianna",
  "Serenity",
  "Samantha",
  "Sarah",
  "Autumn",
  "Quinn",
  "Eva",
  "Piper",
  "Sophie",
  "Sadie",
  "Delilah",
  "Josephine",
  "Nevaeh",
  "Adeline",
  "Arya",
  "Emery",
  "Lydia",
  "Clara",
  "Vivian",
  "Madeline",
  "Peyton",
  "Julia",
  "Rylee",
  "Sofía",
  "Isabella",
  "Valentina",
  "Emma",
  "Martina",
  "Lucía",
  "Victoria",
  "Luciana",
  "Valeria",
  "Camila",
  "Julieta",
  "Ximena",
  "Sara",
  "Daniela",
  "Emilia",
  "Renata",
  "Mía",
  "Catalina",
  "Julia",
  "Elena",
  "Olivia",
  "Regina",
  "Paula",
  "Natalia",
  "Mariana",
  "Samantha",
  "María",
  "Antonella",
  "Gabriela",
  "Emily",
  "María José",
  "Zoe",
  "Alma",
  "Alejandra",
  "Andrea",
  "Noa",
  "Alba",
  "Aitana",
  "Amanda",
  "Abril",
  "Miranda",
  "Salomé",
  "Ana Sofía",
  "Carla",
  "Alexa",
  "Juana",
  "Ivanna",
  "Allison",
  "Guadalupe",
  "Antonia",
  "Fernanda",
  "Delfina",
  "Romina",
  "Luna",
  "Lola",
  "Paulina",
  "Josefina",
  "Ana",
  "Carmen",
  "María Fernanda",
  "Agustina",
  "Abigail",
  "Ana Paula",
  "Maite",
  "Amelia",
  "Brianna",
  "Nicole",
  "Francesca",
  "Chloe",
  "Clara",
  "Constanza",
  "Isabel",
  "Claudia",
  "Laura",
  "Adriana",
  "Maia",
  "Josefa",
  "Ariana",
  "Alicia",
  "Danna",
  "Elisa",
  "Melissa",
  "Leire",
  "María Paz",
  "Ainhoa",
  "Violeta",
  "Ariadna",
  "Laia",
  "Carolina",
  "Juliana",
  "Rafaela",
  "Valerie",
  "Trinidad",
  "Aurora",
  "Elizabeth",
  "Pilar",
  "Ashley",
  "Carlota",
  "Candela",
];

  
  const imageDiv = document.querySelector(".image");
  const textDiv = document.querySelector(".text");
  const itemDiv = document.querySelector("item");
  const containerDiv = document.querySelector(".container");
  let array1 = [];
  
  
      for (let i = 0; i < 20; i++) {

  let blue = Math.floor(Math.random() * 100);
  let green;
  let red = Math.floor(Math.random() * 10);
  let yellow;
  let black;
  if (red < 5) {yellow = "women";
 green = Math.floor(Math.random() * femaleNames.length);
  black = femaleNames[green];
}
  else {yellow = "men";
  green = Math.floor(Math.random() * maleNames.length);
black = maleNames[green];}

    if (array1.includes(blue)){
      let blue = Math.floor(Math.random() * 100);
      i = i -1;
    } else {
      array1.push(blue);
      let divElement = document.createElement("div");
        let imageElement = document.createElement("img");
        let textElement = document.createElement("h5");
        textElement.classList.add("p");
        imageElement.src = `https://randomuser.me/api/portraits/${yellow}/${blue}.jpg`;
        textElement.innerText = `${black}`;
        divElement.append(imageElement);
        divElement.append(textElement)
        divElement.onclick = () => (divElement.style.visibility = "hidden");
        containerDiv.append(divElement);
    }
      }
    
    };