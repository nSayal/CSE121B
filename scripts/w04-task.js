/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile ={
    name: "Sayal Neupane",
    photo: './images/profilePicture.jpeg',
    favoriteFoods: [
        'Pizza',
        'Momo', 
        'Chatpate',
        'Sukuti',
        'Chowmein'
    ],
    hobbies: [
        "Coding",
        "Watching anime",
        "cooking",
    ],
    placesLived: [],
};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place: "Nepal",
    length: "17 years"
})
myProfile.placesLived.push({
    place: "United States ",
    length: "1.5 years"
})



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
let imageElement = document.querySelector('img');
imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent =food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place =>{
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');

    dt.textContent = place['place'];
    dd.textContent = place['length'];
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});

