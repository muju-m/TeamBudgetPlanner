var myDataTest = JSON.parse(localStorage.getItem("myData"))
function CreateTableFromJSON() {
    let col = [];
    for (let i = 0; i < myDataTest.length; i++) {
        for (let key in myDataTest[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    let table = document.createElement("table");
    let tr = table.insertRow(-1);
    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
    for (let i = 0; i < myDataTest.length; i++) {
        tr = table.insertRow(-1);
        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myDataTest[i][col[j]];
        }
    }
    let divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
function somemethod() {
    let a = 0;
    for (let i = 0; i < myDataTest.length; i++) {
        a += parseInt(myDataTest[i].Cost);
    }
    let para = document.createElement("h3");
    para.innerHTML = "Total Budget: " + a;
    document.getElementById("budget").appendChild(para);
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    let array = new Array(myDataTest.length);
    for (let j = 0; j < myDataTest.length; j++) {
        array[j] = myDataTest[j];
    }
    let array1 = new Array(myDataTest.length);
    for (let j = 0; j < myDataTest.length; j++) {
        array1[j] = myDataTest[j].ProgramManager;
    }
    let uniquearray = array1.filter(onlyUnique);
    let newarray = new Array(uniquearray.length);
    for (let k = 0; k < uniquearray.length; k++) {
        for (let l = 0; l < array.length; l++) {
            if (array[l].ProgramManager == uniquearray[k]) {
                if (newarray[k] == null) {
                    newarray[k] = array[l].Cost;
                } else {
                    newarray[k] += array[l].Cost
                }
            }
        }
    }
    let col = [];
    col.push("Team");
    col.push("Budget");
    let table = document.createElement("table");
    let tr = table.insertRow(-1);
    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
    for (let i = 0; i < uniquearray.length; i++) {
        tr = table.insertRow(-1);
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = uniquearray[i];
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = newarray[i];
    }
    let divContainer = document.getElementById("individualData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}