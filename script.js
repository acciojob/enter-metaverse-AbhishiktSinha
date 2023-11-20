//your JS code here. If required.
let enterBtn = document.querySelector("#enterBtn");
enterBtn.addEventListener("click", addNewRow);

function addNewRow(){
    let consoleRow = document.querySelector(".console-row");
    let consoleContainer = consoleRow.parentNode;
    let outerContainer = consoleContainer.parentNode;
	let angleRight = consoleRow.querySelector(".angle-right");

	let madH1 = document.createElement("h1");

    if(outerContainer.querySelector("#enterBtn").innerText == "Enter")
        {
			madH1.innerText = "Entered Metaverse";
			consoleRow.querySelector("#status").innerText = "";
            consoleRow.querySelector("#status").appendChild(madH1);
            outerContainer.querySelector("#enterBtn").innerText = "Leave"
        }
    else if(outerContainer.querySelector("#enterBtn").innerText == "Leave")
        {
			madH1.innerText = "Enter Metaverse";
			consoleRow.querySelector("#status").innerText = "";
            consoleRow.querySelector("#status").appendChild(madH1);
            outerContainer.querySelector("#enterBtn").innerText = "Enter";
        }
    
}