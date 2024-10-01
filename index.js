const employee = {
    name: "James",
    streetAddress: 345,
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemployee = {...employee}
    newemployee[key] = value
    return newemployee
}

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
 }

 function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }  
    delete newEmployee[key]            
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}