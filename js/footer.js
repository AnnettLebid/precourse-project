listOfTechnologies = document.getElementById("footer-sent");

technologies = ["HTML", "CSS", "JavaScript"];


function usedTechnologies() {
    let span = document.createElement("span");
    let str = "";
    for (let i = 0; i < technologies.length; i++) {    
      if (i == technologies.length - 1) {
        str += " and " + technologies[i];
      } else if  (i == technologies.length - 2) {
        str += " " + technologies[i] + "";
      } else {
      str += " " + technologies[i] + ","};  
    };
    span.innerText = str; 
    listOfTechnologies.appendChild(span);
}
  
usedTechnologies();


