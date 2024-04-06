function loadData(){
    let queryString = window?.location.search
    var finale =JSON.parse('{"' + queryString.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) })
    console.log(finale)
}
loadData()