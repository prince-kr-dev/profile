let about = document.querySelector("#about");
let aboutText = document.querySelector("p");
let skills = document.querySelector("#skillsBtn");
let skillTxt = document.querySelector("#skill");

aboutText.style.display = "block";
about.style.backgroundColor = "#6f6be771";

about.addEventListener("click", ()=>{
    aboutText.style.display = "block";
    about.style.backgroundColor = "#6f6be771";

    skillTxt.style.display = "none";
    skills.style.backgroundColor = "#FFFFFB";
})

skills.addEventListener("click", ()=>{
    skillTxt.style.display = "block";
    skills.style.backgroundColor = "#6f6be771";

    aboutText.style.display = "none";
    about.style.backgroundColor = "#FFFFFB";
})