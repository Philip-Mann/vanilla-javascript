const app = document.getElementById('app'); // grabs the id="app"
let countries = [  // start of the array countries
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "B",
    "The Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "C",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic of the",
    "Congo, Republic of the",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "D",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "E",
    "East Timor (Timor-Leste)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "F",
    "Fiji",
    "Finland",
    "France",
    "G",
    "Gabon",
    "The Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "H",
    "Haiti",
    "Honduras",
    "Hungary",
    "I",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "J",
    "Jamaica",
    "Japan",
    "Jordan",
    "K",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "L",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "M",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "N",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "O",
    "Oman",
    "P",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Q",
    "Qatar",
    "R",
    "Romania",
    "Russia",
    "Rwanda",
    "S",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Sudan, South",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "T",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "U",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "V",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Y",
    "Yemen",
    "Z",
    "Zambia",
    "Zimbabwe"
    ];

    for(let i=0; i < countries.length; i++) { // created a for loop for countries
        console.log(countries[i])
    }

const container = document.createElement('div');  // creating a Div
container.className = "container";

//nav element
const nav = document.createElement('nav'); // creating a nav
const navs = document.createElement('ul');
navs.className = "navs";
nav.appendChild(navs); //shows the navs in the html

const locations = document.createElement('li');
locations.innerText = "Locations";
locations.className = "location";
navs.appendChild(locations);
const pricing = document.createElement('li');
pricing.innerText = "Pricing";
navs.appendChild(pricing);
const contactUs = document.createElement('li');
contactUs.innerText = "Contact Us";
navs.appendChild(contactUs);

const profilepic = document.createElement('div');
profilepic.className = "profilepic";
profilepic.innerHTML = "<img src='https://picsum.photos/id/64/50/50' alt='Profile Pic'>"; //different way to add picutr using innerHTML
nav.appendChild(profilepic);

const bgImg = document.createElement('div');
bgImg.className = "backgroundImg";
const backgroundImg = document.createElement('img') //creating an img
backgroundImg.src = "https://picsum.photos/id/1015/320/568";  //adding an attribute to src


const textContainer = document.createElement('div') // creating a div
const h1 = document.createElement('h1');
h1.innerText = "Norway is Calling";
textContainer.appendChild(h1);
const p = document.createElement('p');
p.className = "p1"
p.innerText = "Book Now";
textContainer.appendChild(p);

// new page for locations
const main = document.createElement('main');
main.appendChild(backgroundImg);
main.appendChild(textContainer);

// Footer
const last = document.createElement('div');
last.className = "foot";
const footer = document.createElement('footer'); // creating a footer
const p2 = document.createElement('div');
const pFoot = document.createElement('p');
pFoot.className = "pFoot";
pFoot.innerText = "Privacy Policy";
textContainer.appendChild(pFoot);


//allows us to see the id="app"
app.appendChild(container);

container.appendChild(nav);
container.appendChild(main);
// allows us to see backgroundImg
container.appendChild(footer);


// click the background and change the country
let counter =0;
backgroundImg.addEventListener('click', function() {
    h1.innerText = countries[counter];
    console.log(counter);
    counter++;
})


// Click on Location; Takes usto location page and list countries array
locations.addEventListener('click', function() {
    const ul = document.createElement('ul');
    ul.className = "countries";
    main.innerText = "";
    main.appendChild(ul);
    for(let i = 0; i < countries.length; i++) {
        const li = document.createElement('li');
        li.innerText = countries[i];
        ul.appendChild(li);
    }
})

// Click on Pricing; Takes us to Pricing
pricing.addEventListener('click', function() {
    main.innerText = "This is the price";
})

// click Contact Us; Takes us to Contact Us
contactUs.addEventListener('click', function() {
    main.innerText = "Call 867-5309"
})



