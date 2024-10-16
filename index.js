//document.getElementById("count-el").innerText = 5


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


let count = 0

function myCount() {
    count += 1
    countEl.textContent = count
}

function save() {
    let combined = count + " - "
    saveEl.textContent += combined  
    count = 0
    countEl.textContent = count
    console.log(combined)
}


