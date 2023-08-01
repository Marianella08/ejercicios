const imageModal = document.getElementById("imageModal")
const taskList = document.getElementById("list")
const taskinput = document.getElementById("name")

function addTask() {
    if (!taskinput.value || taskinput.value.replaceAll(" ", "") == "") {
        alert("Input a valid")
        return
    }

    let container =  document.createElement("div")
    container.classList.add("task")

    let image = document.createElement("img")
    image.src = "./images/" + taskinput.value + ".jpeg"
    image.onclick = function() {
        displayTask(image)
    }

    let buttons = document.createElement("div")
    buttons.classList.add("buttons")

    let eliminar = document.createElement('i')
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar')
    eliminar.onclick = function() {
        deleteTask(container)
    }

    let completar = document.createElement('i')
    completar.classList.add('bi','bi-check-circle-fill','icono-completar')
    completar.onclick = function() {
        completeTask(container)
    }

    container.appendChild(image)
    buttons.append(completar, eliminar)
    container.appendChild(buttons)

    taskList.appendChild(container)
    taskinput.value = ""
}

function deleteTask(element) {
    element.remove()
}

function completeTask(element) {
    element.classList.toggle("selected")
}

function displayTask(element) {
    const img = imageModal.getElementsByTagName("img")[0]
    img.src = element.src
    imageModal.classList.add("show")
}

function hideModal() {
    imageModal.classList.remove("show")
}