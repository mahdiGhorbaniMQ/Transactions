function load(){
    let objSize=objectSize(Cookies.get());
    for (var i=0;i<objSize;i++){
        tableInformation[i] = JSON.parse(Cookies.get()[i]);
    }
    $( document ).ready(function() {
        $("#form").submit(function(e){
            e.preventDefault();
            transaction = new Transaction($("#customerName").val(),$("#sellerName").val(),$("#cost").val(),new Date().getDate(),$("#description").val(),true,$("#transactionID").val())
            pushInformation(transaction);
            window.location.replace("../index.html");
        })
    });
}
