const notes = document.getElementsByClassName("row")[0];
let titleField = document.getElementById("text-title");
let titleNote = document.getElementById("text-note");
function addNote() {
    let wrapper = document.createElement("div")
    wrapper.innerHTML = `
    <div class="card bg-warning-emphasis">
      <div class="card-body">
        <h5 class="card-title">${titleField.value}</h5>
        <p class="card-text">${titleNote.value}</p>
        <div class="button-div">
        <button type="button" class="btn btn-outline-danger button-delete"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    </div>`
    wrapper.setAttribute("class", "note col-lg-4 col-md-6 mb-3")
    if (titleField.value == "") {
        let alert = document.createElement("div")
        alert.innerHTML = "Title field cannot be empty"
        alert.setAttribute("class", "alert alert-danger w-100 position-absolute")
        alert.setAttribute("role", "alert")
        document.body.insertAdjacentElement("afterbegin", alert)
        setTimeout(() => {
            alert.remove()
        }, 2000)
        return
    }
    if (titleNote.value == "") {
        let alert = document.createElement("div")
        alert.innerHTML = "Note field cannot be empty"
        alert.setAttribute("class", "alert alert-danger w-100 position-absolute")
        alert.setAttribute("role", "alert")
        document.body.insertAdjacentElement("afterbegin", alert)
        setTimeout(() => {
            alert.remove()
        }, 2000)
        return
    }
    notes.insertAdjacentElement("afterbegin", wrapper)
    let alert = document.createElement("div")
    alert.innerHTML = "Note added"
    alert.setAttribute("class", "alert alert-success w-100 position-absolute")
    alert.setAttribute("role", "alert")
    document.body.insertAdjacentElement("afterbegin", alert)
    setTimeout(() => {
        alert.remove()
    }, 2000)
    titleField.value = null
    titleNote.value = null
}


let createbtn = document.getElementById("button-create")
createbtn.addEventListener("click", addNote)
document.body.addEventListener("click", function (e) {
    if (e.target.className == "btn btn-outline-danger button-delete" || e.target.className == "fa-solid fa-trash") {
        e.target.closest(".note").remove()
    }
})
const clear = document.getElementById("button-clear")
clear.addEventListener("click", () => {
    let s = document.getElementsByClassName("note")
    let arr = Array.from(s)
    for (x of arr) {
        x.remove()
    }
})

