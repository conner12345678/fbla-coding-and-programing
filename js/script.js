const submit = () => {
    const container = document.createElement("div")
    const header = document.createElement("h1")
    header.innerHTML = document.getElementById("cmpyName").value
    const type = document.createElement('h5')
    type.innerHTML = document.createElement("cmpyType").value
    const desc = document.createElement('p')
    desc.innerHTML = document.getElementById('cmpyDescription').value
    container.innerHTML = header + type + desc
    document.getElementById("theList").appendChild(container)
}