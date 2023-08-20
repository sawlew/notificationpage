function notification(){
    let notice = document.getElementById("notify");
    let tabs = document.querySelectorAll("#line");
    let dot = document.querySelectorAll("#dot1");
    let textcolor = document.querySelectorAll("#textColor");

    tabs.forEach(element => {
        element.style.background = "white";
    })
    dot.forEach(element => {
        element.style.display = "none";
    })

    textcolor.forEach(element => {
        element.style.color = "gray";
    })

    notice.innerHTML = "0";
    // tabs.style.background = "red";
}