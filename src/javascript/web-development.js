// Tables
let phoneTable = document.querySelectorAll(".phone-table");
let computerTable = document.querySelectorAll(".computer-table");

// Table Configurations
if(screen.width < 1000) {
    for(let element = 0; element < phoneTable.length; element++) {
        phoneTable[element].style.display = "block";
    }
    for(let element = 0; element < computerTable.length; element++) {
        computerTable[element].style.display = "none";
    }
}
else {
    for(let element = 0; element < phoneTable.length; element++) {
        phoneTable[element].style.display = "none";
    }
    for(let element = 0; element < computerTable.length; element++) {
        computerTable[element].style.display = "block";
    }
}