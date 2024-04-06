let user_storage = ""
let False = true
const submit = () => {
    False = false
    const container = document.createElement('div')
    container.innerHTML = `<h1 class='title'></h1>
    <h4 class='type'></h4>
    <p class='desc'></p>`
    document.getElementById('title').innerHTML = document.getElementById('cmpyName').value
    document.getElementById('type').innerHTML = document.getElementById('cmpyType').value
    document.getElementById('desc').innerHTML = document.getElementById('cmpyDescription').value
    document.getElementById('myForm').submit();
}
if(!False){
    setTimeout(() => {
        let test = `<h1 class='title'>hi</h1>
        <h4 class='type'>hih</h4>
        <p class='desc'>hi</p>`
        document.getElementById('theList').body.appendChild(test)
        False = true
    }, 1000);
}