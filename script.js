//your JS code here. If required.
let enterBtn = document.querySelector("#enterBtn");
enterBtn.addEventListener("click", addNewRow);

function addNewRow(){
    let consoleRow = document.querySelector(".console-row");
    let consoleContainer = consoleRow.parentNode;
    let outerContainer = consoleContainer.parentNode;
	let angleRight = consoleRow.querySelector(".angle-right");

    if(outerContainer.querySelector("#enterBtn").innerText == "Enter")
        {
            consoleRow.querySelector("#status").innerText = "Entered Metaverse";
            outerContainer.querySelector("#enterBtn").innerText = "Leave"
        }
    else if(outerContainer.querySelector("#enterBtn").innerText == "Leave")
        {
            consoleRow.querySelector("#status").innerText = "Enter Metaverse";
            outerContainer.querySelector("#enterBtn").innerText = "Enter";
        }


    consoleContainer.appendChild(newRow);
}