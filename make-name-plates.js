// IF FORM ENABLED:
// Enter name
var nameInput = document.getElementById('name-input');

nameInput.onkeyup = function(){
  document.getElementById('name-output').innerHTML = nameInput.value;
}

// Enter start date
var dateInput = document.getElementById('date-input');

dateInput.onkeyup = function(){
  document.getElementById('date-output').innerHTML = dateInput.value;
}

// Print as PDF
function printPdf(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}

// making large set of name plates w/JSON data (below)
function makeNamePlates(arr) {
  let length = arr.length;
  let documentDiv = document.getElementById('main');

  for (let i=0; i<length; i++) {
    let parentDiv = document.createElement('div');
    let namePlateDiv = document.createElement('div');
    namePlateDiv.className = 'name-plate';
    let namePlateHeaderDiv = document.createElement('div');
    namePlateHeaderDiv.className = 'name-plate_header';
    let leftPinHole = document.createElement('div');
    let rightPinHole = document.createElement('div');
    leftPinHole.className = 'name-plate_pin-hole-left';
    rightPinHole.className = 'name-plate_pin-hole-right';
    let namePlateBody = document.createElement('div');
    namePlateBody.className = 'name-plate_body';
    let name = document.createElement('span');
    let date = document.createElement('span');
    name.className = 'name-plate_name';
    date.className = 'name-plate_date';
    name.innerHTML = arr[i].name;
    date.innerHTML = arr[i].date;
    let namePlateFooter = document.createElement('div');
    namePlateFooter.className = 'name-plate_footer';
    let fitbitLogo = document.createElement('img');
    let leftBottomPinHole = document.createElement('div');
    let rightBottomPinHole = document.createElement('div');
    leftBottomPinHole.className = 'name-plate_pin-hole-left-bottom';
    rightBottomPinHole.className = 'name-plate_pin-hole-right-bottom';
    fitbitLogo.src = 'public/assets/images/fitbit-logo.png';

    namePlateFooter.appendChild(leftBottomPinHole);
    namePlateFooter.appendChild(rightBottomPinHole);
    namePlateFooter.appendChild(fitbitLogo);
    namePlateBody.appendChild(name);
    namePlateBody.appendChild(date);
    namePlateHeaderDiv.appendChild(leftPinHole);
    namePlateHeaderDiv.appendChild(rightPinHole);
    namePlateDiv.appendChild(namePlateHeaderDiv);
    namePlateDiv.appendChild(namePlateBody);
    namePlateDiv.appendChild(namePlateFooter);
    parentDiv.appendChild(namePlateDiv);
    documentDiv.appendChild(parentDiv);

  }

  // Add page break w/two on one page
  let namePlateDivs = document.getElementsByClassName('name-plate');
  let nameLength = namePlateDivs.length;

  for(let j=2; j<nameLength; j+=2) {
    namePlateDivs[j].className += ' page-break';
  }

}

// makeNamePlates(names);

// JSON data 15th floor
var names = [
 {
   "name": "al w",
   "date": "060415"
 },
 {
   "name": "som k",
   "date": "030314"
 },
 {
   "name": "katie f",
   "date": "120417"
 },
 {
   "name": "robert c",
   "date": "110617"
 },
 {
   "name": "ash f",
   "date": "110915"
 },
 {
   "name": "michele f",
   "date": "100316"
 },
 {
   "name": "heinzel f",
   "date": "102416"
 },
 {
   "name": "marc b",
   "date": "051115"
 },
 {
   "name": "john s",
   "date": "010416"
 },
 {
   "name": "benjamin w",
   "date": "032315"
 },
 {
   "name": "jeff k",
   "date": "092517"
 },
 {
   "name": "larry h",
   "date": "061316"
 },
 {
   "name": "david a",
   "date": "020215"
 },
 {
   "name": "kieron s",
   "date": "091817"
 },
 {
   "name": "michael r",
   "date": "080717"
 },
 {
   "name": "jonathan f",
   "date": "091216"
 },
 {
   "name": "bobby j",
   "date": "103017"
 },
 {
   "name": "alex b",
   "date": "103017"
 },
 {
   "name": "adam a",
   "date": "062215"
 },
 {
   "name": "nicole l",
   "date": "111317"
 },
 {
   "name": "chris h",
   "date": "060517"
 },
 {
   "name": "hào l",
   "date": "100713"
 },
 {
   "name": "john h",
   "date": "081417"
 },
 {
   "name": "jeremy h",
   "date": "091216"
 },
 {
   "name": "alex p",
   "date": "120716"
 },
 {
   "name": "juan g",
   "date": "062016"
 },
 {
   "name": "pawel p",
   "date": "011717"
 },
 {
   "name": "raunak r",
   "date": "051316"
 },
 {
   "name": "venkat k",
   "date": "051316"
 },
 {
   "name": "conrad d",
   "date": ""
 },
 {
   "name": "catherine c",
   "date": "082415"
 },
 {
   "name": "justin s",
   "date": "051316"
 },
 {
   "name": "joe g",
   "date": "022117"
 },
 {
   "name": "davy e",
   "date": "121415"
 },
 {
   "name": "praveen v",
   "date": "060115"
 },
 {
   "name": "sean c",
   "date": "102115"
 },
 {
   "name": "hima g",
   "date": "101617"
 },
 {
   "name": "peter m",
   "date": ""
 },
 {
   "name": "sam t",
   "date": "090113"
 },
 {
   "name": "maryann f",
   "date": "042516"
 },
 {
   "name": "alexandra s",
   "date": "022916"
 },
 {
   "name": "valery k",
   "date": ""
 },
 {
   "name": "steve b",
   "date": "100217"
 },
 {
   "name": "paul s",
   "date": "121117"
 },
 {
   "name": "jessica z",
   "date": "030617"
 },
 {
   "name": "josh p",
   "date": "110617"
 },
 {
   "name": "kevin g",
   "date": "083115"
 },
 {
   "name": "carlos q",
   "date": "061915"
 },
 {
   "name": "ambikha g",
   "date": "121415"
 },
 {
   "name": "mitch s",
   "date": "082212"
 },
 {
   "name": "jenny g",
   "date": "103114"
 },
 {
   "name": "yasi b",
   "date": "102714"
 },
 {
   "name": "allison w",
   "date": "072516"
 },
 {
   "name": "arun v",
   "date": "090216"
 },
 {
   "name": "abhinav s",
   "date": "030716"
 },
 {
   "name": "moises h",
   "date": "080116"
 },
 {
   "name": "ryan d",
   "date": "080315"
 },
 {
   "name": "kurt s",
   "date": "032816"
 },
 {
   "name": "jennifer m",
   "date": "021715"
 },
 {
   "name": "caitlin d",
   "date": "052712"
 },
 {
   "name": "tristan r",
   "date": "030114"
 },
 {
   "name": "jessica u",
   "date": "010316"
 },
 {
   "name": "kenneth c",
   "date": "032116"
 },
 {
   "name": "shereen a",
   "date": "091916"
 },
 {
   "name": "chris c",
   "date": "050115"
 },
 {
   "name": "jacob p",
   "date": "062915"
 },
 {
   "name": "aaron w",
   "date": "121613"
 },
 {
   "name": "alex n",
   "date": "111815"
 },
 {
   "name": "juliann s",
   "date": "110115"
 },
 {
   "name": "michaël u",
   "date": "062116"
 },
 {
   "name": "andy b",
   "date": "101215"
 },
 {
   "name": "irvin o",
   "date": "040615"
 },
 {
   "name": "sarah w",
   "date": ""
 },
 {
   "name": "kirk v",
   "date": "102813"
 },
 {
   "name": "shawn w",
   "date": ""
 },
 {
   "name": "kyle c",
   "date": "061917"
 },
 {
   "name": "nikola a",
   "date": "031416"
 },
 {
   "name": "zhu w",
   "date": "102814"
 },
 {
   "name": "alissa l",
   "date": "110915"
 },
 {
   "name": "thomas d",
   "date": "092616"
 },
 {
   "name": "raveena b",
   "date": "103017"
 },
 {
   "name": "sylvain r",
   "date": "051616"
 },
 {
   "name": "jonathan c",
   "date": ""
 },
 {
   "name": "thomas s",
   "date": "120716"
 },
 {
   "name": "christopher g",
   "date": "093015"
 },
 {
   "name": "elaine b",
   "date": "090115"
 },
 {
   "name": "katrina h",
   "date": "101716"
 },
 {
   "name": "andrew g",
   "date": "041315"
 },
 {
   "name": "sebastian n",
   "date": "062617"
 },
 {
   "name": "rathika s",
   "date": "041116"
 },
 {
   "name": "gilles b",
   "date": "101016"
 },
 {
   "name": "barry b",
   "date": "080111"
 },
 {
   "name": "jacob c",
   "date": "120716"
 },
 {
   "name": "jason l",
   "date": "120716"
 },
 {
   "name": "victor o",
   "date": "102611"
 },
 {
   "name": "erik l",
   "date": ""
 },
 {
   "name": "paul q",
   "date": "081516"
 },
 {
   "name": "james k",
   "date": "063014"
 },
 {
   "name": "melissa r",
   "date": "082117"
 },
 {
   "name": "dan c",
   "date": "010214"
 },
 {
   "name": "jon b",
   "date": "121216"
 },
 {
   "name": "bill l",
   "date": "011916"
 },
 {
   "name": "christopher a",
   "date": "053116"
 },
 {
   "name": "brad e",
   "date": "050916"
 },
 {
   "name": "ben g",
   "date": "103116"
 },
 {
   "name": "yelena k",
   "date": "120716"
 },
 {
   "name": "steven g",
   "date": "040615"
 },
 {
   "name": "michael w",
   "date": "090616"
 },
 {
   "name": "nate w",
   "date": "080816"
 },
 {
   "name": "deepak k",
   "date": "062915"
 },
 {
   "name": "russell t",
   "date": "051316"
 },
 {
   "name": "frank s",
   "date": "021814"
 }
]
