const form = document.querySelector('#my-form');
const nameList = document.querySelector('ul');

let inputName;
let inputAge;
let inputLocation;

form.addEventListener("submit", reverseName);

// getAllNames();

// function getAllNames(){
//     fetch('http://localhost:8000/name')
//     .then(r => r.json())
//     // .then(appendAllNames)
//     .catch(console.warn)
// }

function reverseName(e) {
    e.preventDefault();
    const form = e.target;

    const nameData = [{
        name: form.name.value,
        age: form.age.value,
        location: form.location.value
    }];

    const options = {
        method: 'POST',
        body: JSON.stringify(nameData)
    };

    fetch('http://localhost:8000/name', options)
        .then(r => r.json())
        .then(appendName)
        .catch(console.warn)
};

function appendName(data) {
    data.nameList.forEach(appendName);
    console.log(data.nameList)
}
