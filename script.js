let boxBody = document.getElementById("box-body")
let levelCharge = document.getElementById("level-charge")
let levelAnimate = document.getElementById("level-animate")
let indicator = document.getElementById("indicator")

let level = 0

setInterval(function () {
    if(level < 100) {
        level+= 25;
        levelCharge.setAttribute("style", `height:${level}%`)
        indicator.innerHTML = level + "%"

        if(level < 15)
        levelCharge.style.backgroundColor = "red"
        else if(level > 15 && level < 75)
        levelCharge.style.backgroundColor = "orange"
        else
        levelCharge.style.backgroundColor = "green"
    } else{
        levelAnimate.setAttribute("style", 'animation:none')
    }
}, 3000)