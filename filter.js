const filterClosure = (filters) => {

    return function(element) {
        for(key in filters){
            if((element[key] || null) !== filters[key])
                return false;
        }

        return true;
    }   
}

async function getAssignedVehicles({ data, filters }) {

    let customisedFilter = filterClosure(filters);
    return data.filter(customisedFilter);
}
