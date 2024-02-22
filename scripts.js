//get first paragraph by Id and add a span with text to it
document.getElementById("firstPara").innerHTML += " <span class='tan'>This is new tan text</span>";

// update images on page by tag name to set width to 250
let images = document.getElementsByTagName("img");
// console.log(images);

for(let img of images){
    img.width = "250";
}

//--------------------------------------------------------------//--------------------------------------------------------------

// select the groups of spans by class name and update color
let ltBlueSpans = document.getElementsByClassName("light-blue");
let dkBlueSpans = document.getElementsByClassName("med-blue");

for(let span of ltBlueSpans){
    span.style.color = "#7C9EA6";
}

for(let span of dkBlueSpans){
    span.style.color = "#3C5E73";
}

//--------------------------------------------------------------

// select svg icons and change stroke color on each
let svgs = document.querySelectorAll("#svgs svg"); //Go to the id of svgs and retrieve the svg elements inside
// console.log(svgs);


//array of colors to change the stroke to
let color = ["#F2DCC", "#D9BCA3", "#7C9EA6", "#3C5E73", "#283040"];

// loop through both arrays and set a color for each svg

for (let i = 0; i < svgs.length; i++){
    svgs[i].style.stroke = color[i];
}
// grab the first span with the bold class in section five and change text color to #7C9EA6

document.querySelector("#query .bold").style.color = "#7C9EA6";

//--------------------------------------------------------------
//replace first list item text with "This is new list text"
document.querySelector(".content_list li").textContent = "This is a new list item text";

// for the third list item, add your name to the existing text and wrap it in some strong tags
document.querySelectorAll(".content_list li")[2].innerHTML += " <strong>Kiara</strong>";



//--------------------------------------------------------------
//remove hidden attribute from link in last section

document.querySelector("#remove a").removeAttribute("hidden");

