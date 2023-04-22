//Lesson-4-1 Creating a Date object
//----------------------------------

const today = new Date();
const thisYear = today.getFullYear();


// appending paragraff to the footer
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
const unicode = "&copy";
copyright.innerHTML = unicode + " Tatyana " + thisYear;
footer.appendChild(copyright);


// Lesson-4-2 adding list of skills 
//----------------------------------

 const skills = ["Java", "Java Script", "Type Script", "HTML", "CSS", "SQL","Playwright","Selenium"];
 const skillsection = document.getElementById("skills");
 const skillList = skillsection.querySelector("ul");
 for (let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillList.appendChild(skill);
 }

 //Change the colore of the button
 const submitButton = document.getElementById('btn');
 function changeColore() {
   submitButton.style.backgroundColor = "purple";
 }
submitButton.addEventListener("click", changeColore);


//Lesson-4-3 selecting form
//------------------------------

const messageForm = document.getElementById("leave_message_form");

 messageForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const nameValue = e.target.name.value;
  const emailValue = e.target.email.value;
  const messageValue = e.target.message.value;
  console.log(nameValue, emailValue, messageValue);
  messageForm.reset();

 //creating Message section
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href = mailto:${emailValue}>${nameValue}</a> sent message: <span>${messageValue}</span>`;
  messageList.appendChild(newMessage);
  //creating remove button
  const removeButton = document.createElement('button');
  removeButton.innerText = "Remove";
  removeButton.setAttribute("type", "button");
  newMessage.appendChild(removeButton);

  removeButton.addEventListener('click', function(e) {
    const entry = removeButton.parentNode;
    console.log(entry);
    entry.remove('li');
  })  
})
 // Fetch GitHub Repositories
// function progectWithXML() {
  let gitHubRequest = new XMLHttpRequest();
  gitHubRequest.open('GET', "https://api.github.com/users/tatkh21/repos");
  gitHubRequest.addEventListener('load', function(){
  let repositories= JSON.parse(this.response);
  const projectSection = document.getElementById("projects");
  const projectList = projectSection.querySelector("ul");
  for (let i = 0; i < repositories.length; i++){
    let repo;
    if (repositories[i].name == "Introduction-to-programming"){
      repo = document.createElement('li');
      repo.innerText = repositories[i].name;
      projectList.appendChild(repo);
    }
 }

}
  )
gitHubRequest.send();

//}
// document.addEventListener('DOMContentLoaded', () => {

// }

 






