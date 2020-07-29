// https://www.w3schools.com/howto/howto_js_slideshow.asp
//-------------------------------------------------------------------------------------
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 15000); // Change image every 15 seconds
}
//-------------------------------------------------------------------------------------

async function book() {
    if (confirm("Confirm Booking?") !== false) {
        alert("Successfully Booked!")
        return true;
    }
    return false;
}

function calcTour() {
    let people = document.getElementById("people");
    let type;
    let cost;
    if (document.getElementById('AnC1day').checked) {
        type = document.getElementById('AnC1day').value;
    } else if (document.getElementById('AnC2day').checked) {
        type = document.getElementById('AnC2day').value;
    } else if (document.getElementById('AnC3day').checked) {
        type = document.getElementById('AnC3day').value;
    } else if (document.getElementById('A1day').checked) {
        type = document.getElementById('A1day').value;
    } else if (document.getElementById('A2day').checked) {
        type = document.getElementById('A2day').value;
    } else if (document.getElementById('V1day').checked) {
        type = document.getElementById('V1day').value;
    }
    people = people.options[people.selectedIndex].value;
    cost = type * people;
    cost = cost.toFixed(2)
    document.getElementById("cost").innerHTML = "Total Cost: $"+cost;
}

function calcPeople() {

}