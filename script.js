let startBtn = document.querySelector(".start-btn");
let student = document.querySelector(".student");
let parent = document.querySelector(".parent");
let gaurdian = document.querySelector(".gaurdian");
let teacher = document.querySelector(".teacher");
let bfrChoice = document.querySelector(".before-choice");
let afrChoice = document.querySelector(".after-choice");
let user = document.querySelector(".user");
let greetings = document.querySelector(".greetings");
let back = document.querySelector(".back");
let input = document.querySelector(".search-input");
let searchBtn = document.querySelector(".search");
let heading = document.querySelector(".c-heading");
let pos = document.querySelector(".pos");
let phonetics = document.querySelector(".c-phonetics");
let meaning = document.querySelector(".c-meaning");
let example = document.querySelector(".c-example");


let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";



startBtn.addEventListener("click",()=>{
    alert("please select the category on top right corner!");
})

student.addEventListener("click",()=>{
    bfrChoice.style.display = "none";
    user.style.display = "none";
    back.style.display = "flex";
    afrChoice.style.display = "flex";
    greetings.innerText = "Good Morning Young man.";
})

teacher.addEventListener("click",()=>{
    bfrChoice.style.display = "none";
    user.style.display = "none";
    back.style.display = "flex";
    afrChoice.style.display = "flex";
    greetings.innerText = "Good Morning, Hope you are doing better.";
})

gaurdian.addEventListener("click",()=>{
    bfrChoice.style.display = "none";
    user.style.display = "none";
    back.style.display = "flex";
    afrChoice.style.display = "flex";
    greetings.innerText = "Good Morning, Hope you are doing better.";
})

parent.addEventListener("click",()=>{
    bfrChoice.style.display = "none";
    user.style.display = "none";
    back.style.display = "flex";
    afrChoice.style.display = "flex";
    greetings.innerText = "Good Morning, Hope it's usefull for your children.";
})

back.addEventListener("click",() =>{
    bfrChoice.style.display = "block";
    user.style.display = "flex";
    back.style.display = "none";
    afrChoice.style.display = "none";
    input.value = "";
    heading.innerText = "";
    pos.innerText = "";
    phonetics.innerText = "";
    meaning.innerText = "";
    example.innerText = "";
})

searchBtn.addEventListener("click", async () =>{
    let inputWord = input.value;
    let newUrl = `${url}${inputWord}`;
    let response = await fetch(newUrl);
    let data =  await response.json();
    heading.innerText = data[0].word.charAt(0).toUpperCase()+data[0].word.slice(1); 
    pos.innerText = data[0].meanings[0].partOfSpeech;
    phonetics.innerText = data[0].phonetics[1].text;
    meaning.innerText = data[0].meanings[0].definitions[0].definition;
    example.innerText = "Example : " +data[0].meanings[0].definitions[0].example;
})

