let car1 = {
    title: "Hyundai Kona",
    description: "Wist u dat deze auto u per maand 3minder kost dan u denkt. En dat u als bedrijf een auto van € 10.000,- al voor € 40.- ( RENTE ) per maand kunt rijden. Ook voor particulieren bestaan er prima financieringsmogelijkheden.Wij helpen u hier graag bij en kunnen u een passend advies geven.",
    price: 15750.00,
    kilometer: 99935,
    buildDate: 2018,
}

let car2 = {
    title: "Volkswagen Golf Sportsvan",
    description: "Wist u dat deze auto u per maand minder kost dan u denkt. En dat u als bedrijf een auto van € 10.000,- al voor € 40.- ( RENTE ) per maand kunt rijden. Ook voor particulieren bestaan er prima financieringsmogelijkheden.Wij helpen u hier graag bij en kunnen u een passend advies geven.",
    price: 16750.00,
    kilometer: 23582,
    buildDate: 2017,
}

let car3 = {
    title: "Volkswagen T-Roc",
    description: "Wist u dat deze auto u per maand minder kost dan u denkt. En dat u als bedrijf een auto van € 10.000,- al voor € 40.- ( RENTE ) per maand kunt rijden. Ook voor particulieren bestaan er prima financieringsmogelijkhed   en.Wij helpen u hier graag bij en kunnen u een passend advies geven.",
    price: 37950.00,
    kilometer: 16352,
    buildDate: 2020,
}

let car4 = {
    title: "Volkswagen Golf",
    description: "Zeer sportieve Volkswagen Golf  2.0 TSI 4Motion R met maarliefst 310 pk!Ontzettend mooie en snelle Volkswagen Golf 2.0 TSI 4Motion R! Deze auto is volledig ingericht op genot! Zowel tijdens het gasgeven, waarbij wel 310 pk los komt, als het geluid wat deze auto dan produceert! Alsof dat nog niet genoeg is, heeft deze auto ook zeer veel luxe opties, die het in de auto ook zeer aangenaam maken! Denk hierbij aan het Virtual cockpit, de keyless entry en start en de geluidsinstallatie!Deze sportwagen is een proefrit meer dan waard. Neem 'm de weg op en u weet genoeg. Bel ons voor een afspraak!",
    price: 32950.00,
    kilometer: 80832,
    buildDate: 2017,
}

let car5 = {
    title: "Volkswagen Golf",
    description: "Wist u dat deze auto u per maand minder kost dan u denkt. En dat u als bedrijf een auto van € 10.000,- al voor € 40.- ( RENTE ) per maand kunt rijden. Ook voor particulieren bestaan er prima financieringsmogelijkheden.Wij helpen u hier graag bij en kunnen u een passend advies geven.",
    price: 9900.00,
    kilometer: 151075,
    buildDate: 2012,
}

//--------------------------------------opdracht1-------------------------------------------//

let item1 = {
    title: "Kanzi appelen",
    description: "1.5kg",
    action: "PER ZAK 2.69",
    price: 2.69,
}

let item2 = {
    title: "Baby watermeloen",
    description: "ongeveer 3kg",
    action: "PER STUK 2.49",
    price: 2.49,
}

let item3 = {
    title: "1 de Beste Grote mandarijnen verpakt",
    description: "PER NET 2.69",
    action: "1.5kg",
    price: 2.69,
}

let item4 = {
    title: "Kiwi green verpakt",
    description: "PER BAK 1.99",
    action: "1kg",
    price: 1.99,
}

let item5 = {
    title: "Ons Biomerk Hollandse aardappelen",
    description: "PER ZAK 2.99",
    action: "4kg",
    price: 2.99,
}

//--------------------------------------opdracht2------------------------------//

let article1 = {
    title: "Apple verhoogt laadvermogen MagSafe Battery Pack via firmware-update",
    color: "deep green",
    time: "10:23",
    reacties: 12,
}

let article2 = {
    title: "Europees verbod op Lightning-poort op iPhones stap dichterbij",
    color: "gray",
    time: "10:18",
    reacties: 153,
}

let article3 = {
    title: "'Sony wil ingame ads gaan verkopen in free-to-play games'",
    color: "light green",
    time: "09:58",
    reacties: 37,
}

let article4 = {
    title: "AMD brengt Radeon RX 6400 uit in de losse verkoop voor 159 dollar",
    color: "red",
    time: "09:51",
    reacties: 16,
}

let article5 = {
    title: "Apple annuleert contract met Belgische Premium Reseller Switch",
    color: "gray",
    time: "09:37",
    reacties: 38,
}

//-----------------------opdracht3------------------------------//

let cars = [];
cars.push(car1,car2,car3,car4,car5);
console.log(cars);

//---------------------opdracht4--------------------------------//

for (let i = 0 ; i < cars.length ; i++) {
    const carContent = document.querySelector(".mycars");
    const myCars = cars[i];
    carContent.innerHTML += '<div class="item">'
    carContent.innerHTML += myCars.title + "<br>";
    carContent.innerHTML += myCars.description + "<br>";
    carContent.innerHTML += myCars.price + "<br>";
    carContent.innerHTML += myCars.kilometer + "<br>";
    carContent.innerHTML += myCars.buildDate + "<br>";
    carContent.innerHTML += '</div>'
}

//--------------------opdracht5-------------------------------//

let items = [];
items.push(item1,item2,item3,item4,item5);
console.log(items);

//-------------------opdracht6-------------------------------//

for ( let q = 0 ; q < items.length; q++) {
    const itemContent = document.querySelector(".myitems");
    const myItems = items[q];
    itemContent.innerHTML += '<div class="item">'
    itemContent.innerHTML += myItems.title + "<br>";
    itemContent.innerHTML += myItems.description + "<br>";
    itemContent.innerHTML += myItems.action + "<br>";
    itemContent.innerHTML += myItems.price + "<br>";
    itemContent.innerHTML += '</div>'
}

//----------------opdrahct7---------------------------------//

let articles = [];
articles.push(article1,article2,article3,article4,article5);
console.log(articles);

//--------------------opdracht8----------------------------//

for ( let w = 0; w < articles.length; w ++) {
    const articleContent = document.querySelector(".myarticles");
    const myArticles = articles[w];
    articleContent.innerHTML += '<div class="item">'
    articleContent.innerHTML += myArticles.title + "<br>";
    articleContent.innerHTML += myArticles.color + "<br>";
    articleContent.innerHTML += myArticles.time + "<br>";
    articleContent.innerHTML += myArticles.reacties + "<br>";
    articleContent.innerHTML += '</div>'
}

//------------------opdracht9-------------------------//