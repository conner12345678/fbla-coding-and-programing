function loadData(){
    let queryString = window?.location.search
    var finale =JSON.parse('{"' + queryString.replace(/&/g, '","').replace(/=/g,'":"').replace(/\?/g,'') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) })
    console.log(finale)
    const title = finale.cmpyName
    const type = finale.cmpyType
    const desc = finale.cmpyDescription
    const container = document.createElement('div')
    container.innerHTML = `<h1>${title}</h1>
    <p style='color: white;'>${desc}</p>`
    document.getElementById('theList').appendChild(container)
}
loadData()