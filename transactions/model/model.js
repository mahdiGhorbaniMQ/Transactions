class Transaction{
    constructor(customerName,sellerName,cost,date,description,successfully,transactionID) {
        this.customerName = customerName;
        this.sellerName = sellerName;
        this.cost = cost;
        this.date = date;
        this.description = description;
        this.successfully = successfully;
        this.transactionID = transactionID;
    }
}