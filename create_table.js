
var myData = [
    {"Id" : 0, "ClientName" : "Microsoft", "DealName" : "Apollo Project", "ProgramManager" : "Mary", "Cost" : 1000},
    {"Id" : 1, "ClientName" : "Intel", "DealName" : "Hermes Project", "ProgramManager" : "Bob", "Cost" : 10000},
    {"Id" : 2, "ClientName" : "Apple", "DealName" : "Zeus Project", "ProgramManager" : "Jane", "Cost" : 100000}
]
var currentDealId = myData.length;  
localStorage.setItem("myData", JSON.stringify(myData))
var myDataTest = localStorage.getItem("myData")
AddNewDeal = function(e) {
    var clientName = document.getElementById("clientNameInput").value;
    var projectName = document.getElementById("projectNameInput").value;
    var projectManager = document.getElementById("projectManagerInput").value;
    var projectCost = document.getElementById("projectCostInput").value;
    document.getElementById("clientNameInput").value = "";
    document.getElementById("projectNameInput").value = "";
    document.getElementById("projectManagerInput").value = "";
    document.getElementById("projectCostInput").value = "";
    InsertRow(currentDealId, clientName, projectName, projectManager, parseInt(projectCost));
};
function InsertRow(dealId, clientName, projectName, projectManager, projectCost) {
    myData.push({"Id": dealId, "ClientName" : clientName, "DealName" : projectName, "ProgramManager" : projectManager, "Cost" : projectCost})
    currentDealId++;
    localStorage.clear();
    localStorage.setItem("myData", JSON.stringify(myData))
    CreateTableFromJSON();
}
