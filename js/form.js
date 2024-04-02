let currentObject











const doJSONCreation = (name, business = null, communityPartner = null, typeOfOrganazation = null, Connections = null, relationship = null, wealth = null, CEO = null, meansOfContact, importantPeople) => {
    currentObject = [
        {
            "Name" : name,
            "Business" : business,
            "communityPartner" : communityPartner,
            "Org" : typeOfOrganazation,
            "Connections" : Connections,
            "relation" : relationship,
            "Wealth" : wealth,
            "CEO" : CEO,
            "contactMeans" : meansOfContact,
            "importantPeople" : importantPeople
        }
    ]
    
}
