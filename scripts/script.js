function changeText() {
    const today = new Date();
    const day = today.getDay();  // 0 = Sunday, 6 = Saturday
    
    const textElement = document.getElementById("suwakosez");
  
    if (day === 3) {
      textElement.textContent = "Happy Suwako Wedsnesday!";
      textElement.style.color = `rgb(${wednesdayRGB[0]}, ${wednesdayRGB[1]}, ${wednesdayRGB[2]})`;
      textElement.style.fontWeight = "bold";
    } 

    else if (day === 0) {
        textElement.textContent = "Today is: Sunday! Get ready for the next week!";
        textElement.style.color = `rgb(${sundayRGB[0]}, ${sundayRGB[1]}, ${sundayRGB[2]})`;
        textElement.style.fontWeight = "bold";
    }
    else if (day === 1) {
        textElement.textContent = "Today is: Monday";
        textElement.style.color = "white";
    }
    else if (day === 2) {
        textElement.textContent = "Today is: Tuesday";
        textElement.style.color = "white";
    }
    else if (day === 4) {
        textElement.textContent = "Today is: Thursday";
        textElement.style.color = "white";
    }
    else if (day === 5) {
        textElement.textContent = "Happy ふもふも Friday!!";
        textElement.style.color = `rgb(${fridayRGB[0]}, ${fridayRGB[1]}, ${fridayRGB[2]})`;
        textElement.style.fontWeight = "bold";
    }
    else if (day === 6) {
        textElement.textContent = "Today is: Saturday! Enjoy your weekend!";
        textElement.style.color = "white";
        textElement.style.fontWeight = "bold";
    }
}

function updateTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    const timeString = `${hours}:${minutes}:${seconds}`;
    const clockElement = document.getElementById("clock");
    clockElement.textContent = timeString;
  }


const wednesdayRGB = [20, 200, 100];
const fridayRGB = [20, 150, 180];
const sundayRGB = [170, 20, 20];
  
changeText(wednesdayRGB, fridayRGB, sundayRGB);

setInterval(updateTime, 1000); 
setInterval(changeText, 1000); 

updateTime();