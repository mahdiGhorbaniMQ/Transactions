const urlParams = new URLSearchParams(window.location.search);
index = urlParams.get('index');


function load(){
    let objSize=objectSize(Cookies.get());
    for (var i=0;i<objSize;i++){
        tableInformation[i] = JSON.parse(Cookies.get()[i]);
    }
    $("#customerName").val(tableInformation[index].customerName);
    $("#sellerName").val(tableInformation[index].sellerName);
    $("#cost").val(tableInformation[index].cost);
    $("#description").val(tableInformation[index].description);
    $("#transactionID").val(tableInformation[index].transactionID);
    $( document ).ready(function() {
        $("#form").submit(function(e){
            e.preventDefault();
            transaction = new Transaction($("#customerName").val(),$("#sellerName").val(),$("#cost").val(),new Date().getDate(),$("#description").val(),true,$("#transactionID").val())
            updateInformation(transaction,index);
            window.location.replace("../index.html");
        })
    });
}
