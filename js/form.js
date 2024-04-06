const fs = require('node:fs')
let currentObject

const doJSONCreation = (name, business, communityPartner, typeOfOrganization, Connections, relationship, wealth, CEO, meansOfContact, importantPeople) => {
    currentObject = [
        {
            "Name" : name,
            "Business" : business,
            "communityPartner" : communityPartner,
            "Org" : typeOfOrganization,
            "Connections" : Connections,
            "relation" : relationship,
            "Wealth" : wealth,
            "CEO" : CEO,
            "contactMeans" : meansOfContact,
            "importantPeople" : importantPeople
        }
    ]
    fs.writeFile("JSON/prototype.json", JSON.stringify(currentObject), (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    })
}




