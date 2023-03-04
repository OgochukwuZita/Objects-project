
//Question1

function InstagramPost(HandleOfauthor, content, Link, numberOfviews, numberOflikes) {
    this.HandleOfauthor = HandleOfauthor;
    this.content = content;
    this.Link = Link;
    this.numberOfviews = numberOfviews;
    this.numberOflikes = numberOflikes;
    this.updatenumberOfviews = function(){
        return ++this.numberOfviews;
    };
}
//Question2

let IgPost01 = new InstagramPost('Acha_zita', 'Day out in the sun', 'https://thumbs.dreamstime.com/b/girl-standing-bright-yellow-field-her-hands-reaching-out-to-sun-birds-girl-standing-bright-yellow-field-210295309.jpg', 108, 89);
console.log(IgPost01);
let IgPost02 = new InstagramPost('getsetstudios', 'She knows I love her', 'https://getsetstudios.simplybook.me/uploads/getsetstudios/image_files/preview/169332299031aa5b4f683deea750b257.jpeg', 808, 800);
console.log(IgPost02);

//Question 3(a)

function Person(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    }
}
const Person01 = Person('Musa Dawodu', '19', 'Lekki, Lagos State.');
console.log(Person01);

//Question 3(b)
function JambScores(English, Government, Literature, CRK) {
    return {
        English: English,
        Government: Government,
        Literature: Literature,
        CRK: CRK,
    }
}
const scores = JambScores(70,85,82,94);
console.log(scores);

//Question 4
//1. Object.assign() method
const School = {
    Name: 'st.Marys secondary school',
    numberOfstudents: 200,
    staffNumber: 35,
    proprietor: 'Mrs Jones',

}
console.log(School);
const School02 = Object.assign({}, School)
console.log(School02);
School02.staffNumber = 48;
console.log(School02);
//2. Spread syntax (...) method

function Country (Name, continent, population) {

    return{
        Name: Name,
        continent: continent,
        population: population,
    }
}
const Country01 = Country('Jamaica', 'North America', '2.8 million');
const Country02 = {...Country01};
console.log(Country02);
Country02.Name = 'Brazil';
console.log(Country02);

//JSON.parse method //JSON.parse(JSON.stringify())
const Student = {
    name: 'Ogo',
    DOB: 'March 4th, 1990',
    Age: 33,
}
const Student02 = JSON.parse(JSON.stringify(Student));
Student02.Age = 54;
 console.log({Student02});

