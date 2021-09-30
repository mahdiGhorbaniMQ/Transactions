function loadTable(){
    document.getElementById("tbody").remove();
    const tbody =document.createElement("tbody");
    tbody.id="tbody";
    document.getElementById("table").appendChild(tbody);
    getInformation().forEach(createTableRow)
}
function createTableRow(item,index){
    const row = document.createElement("tr");
    for (let i=0;i<7;i++){
        const data = document.createElement("td")
        const itemKey = Object.keys(item)[i];
        data.innerHTML = item[itemKey];
        row.appendChild(data);
    }
    const data =document.createElement("td");
    data.innerHTML = "<a class='btn btn-info' href='editTable/editPage.html?index="+index+"'>Edit</a>" +
        "<button onclick='deleteTableRow("+index+")' class=\'btn btn-danger\'>Delete</button>"
    row.appendChild(data);
    const tbody = document.getElementById("tbody");
    tbody.appendChild(row);
}


function deleteTableRow(index){
    deleteInformation(index);
    loadTable();
}