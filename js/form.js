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
    fs.writeFile("JSON/prototype.json", JSON.stringify(currentObject),{flag: 'a'}, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    })
}
const mockName = 'Company Name';
const mockBusiness = 'Business';
const mockCommunityPartner = 'Community Partner';
const mockTypeOfOrganization = 'Type of Organization';
const mockConnections = 'Connections';
const mockRelationship = 'Relationship';
const mockWealth = 'Wealth';
const mockCEO = 'CEO';
const mockMeansOfContact = 'Means of Contact';
const mockImportantPeople = 'Important People';

doJSONCreation(mockName, mockBusiness, mockCommunityPartner, mockTypeOfOrganization, mockConnections, mockRelationship, mockWealth, mockCEO, mockMeansOfContact, mockImportantPeople);