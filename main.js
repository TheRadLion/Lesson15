// start by constructing a variable that is an array of objects, this is our data.
let people = [{
    "id": 1,
    "firstName": "Frank",
    "lastName": "Herbert",
    "job": "Lead Software Engineer",
    "Skills": ["JavaScript", "C#", "SQL", "HTML", "CSS", "SCRUM Master"],
    "Salary": 120196
},
{
    "id": 2,
    "firstName": "Joan",
    "lastName": "Armorett",
    "job": "Jr Software Developer",
    "Skills": ["JavaScript", "HTML", "CSS"],
    "Salary": 70000
},
{
    "id": 3,
    "firstName": "John",
    "lastName": "Mosses",
    "job": "Software Engineer",
    "Skills": ["JavaScript", "C#", "SQL", "HTML", "CSS"],
    "Salary": 101234
},
{
    "id": 4,
    "firstName": "Janet",
    "lastName": "Lee",
    "job": "Software Engineer",
    "Skills": ["JavaScript", "C#", "HTML", "CSS", "Technical Writer"],
    "Salary": 86000
},
{
    "id": 5,
    "firstName": "Garry",
    "lastName": "Funny",
    "job": "Quality Assurance Engineer",
    "Skills": ["JavaScript", "C#", "QA", "C#"],
    "Salary": 89100
},
{
    "id": 6,
    "firstName": "Karen",
    "lastName": "Enoch",
    "job": "Jr Software Engineer",
    "Skills": ["JavaScript", "C#", "HTML", "CSS"],
    "Salary": 70000
},
{
    "id": 7,
    "firstName": "Jason",
    "lastName": "Keel",
    "job": "Quality Assurance Engineer",
    "Skills": ["JavaScript", "C#", "SQL"],
    "Salary": 98000
}
];

function exercise1() {
    // Return one random person from the array of people
    let names = people.map(person => person.firstName + ' ' + person.lastName);

    let answer = names[Math.floor(Math.random() * people.length)];

    document.getElementById("1").innerText = `Answer: ${JSON.stringify(answer)}`;
}

function exercise2() {
    // Return the people sorted by the number of skills they have
    let skillLength = people.sort((a, b) => {
        if (a.Skills.length > b.Skills.length) {
            return -1;
        }
        if (a.Skills.length < b.Skills.length) {
            return 1;
        }
    // When compare function returns 0 leave a and b unchanged 
        return 0;
    });

    let answer = skillLength.map((person) => person.firstName + ' ' + person.lastName);

    document.getElementById("2").innerText = `Answer: ${JSON.stringify(answer)}`;
}

function exercise3() {
    // Return the people sorted by their name, starting with lastName then firstName
    let answer1 = people.sort((a, b) => {
        if (a.lastName < b.lastName) {
            return -1;
        }
        if (a.lastName > b.lastName) {
            return 1;
        }
        if (a.firstName< b.firstName) {
            return -1;
        }
        if (a.firstName > b.firstName) {
            return 1;
        }
    // When compare function returns 0 leave a and b unchanged 
        return 0;
    });

    let answer = answer1.map((person) => person.lastName + ', ' + person.firstName);

    document.getElementById("3").innerText = `Answer: ${JSON.stringify(answer)}`;
}

// Return an array of the people with the fields: name, job and salary. Make name the combination of first and last name and the salary a random number between 60,000 and 120,000
function exercise4() {
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
    let rndmsalary = randomInt(60000, 120000);

    let answer = people.map((person) => person.firstName + ' ' + person.lastName + ', ' + person.job + ' Salery: $' + rndmsalary);

    document.getElementById("4").innerText = `Answer: ${JSON.stringify(answer)}`;
}