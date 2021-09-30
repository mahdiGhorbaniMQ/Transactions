function getInformation(){
    let transactions = [],objSize=objectSize(Cookies.get());
    for (var i=0;i<objSize;i++){
        tableInformation[i] = JSON.parse(Cookies.get()[i]);
    }
    transactions=tableInformation;
    return transactions;
}
function updateInformation(transaction = new Transaction(),index){
    tableInformation[index] = transaction;
    updateCookies();
}
function pushInformation(transaction = new Transaction()){
    tableInformation.push(transaction);
    updateCookies();
}
function deleteInformation(index){
    tableInformation.splice(index, 1);
    updateCookies();
}
function updateCookies(){
    let objSize=objectSize(Cookies.get());
    for (var i=0;i<objSize;i++){
        Cookies.remove(i);
    }
    for (var i=0;i<tableInformation.length;i++){
        Cookies.set(i,tableInformation[i]);
    }
}




objectSize = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};