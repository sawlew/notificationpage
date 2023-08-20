function notification(){
    let notice = document.getElementById("notify");
    let tabs = document.querySelectorAll("#line");
    let dot = document.querySelectorAll("#dot1");
    tabs.forEach(element => {
        element.style.background = "white";
    })
    dot.forEach(element => {
        element.style.display = "none";
    })

    notice.innerHTML = "0";
    // tabs.style.background = "red";
}