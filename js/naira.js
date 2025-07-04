function myFunction() {
    let ngn_amount = document.getElementById("input").value;

    let dollar_rate = 0.00065, euro_rate = 0.00056, pound_rate = 0.00047, yen_rate = 0.094;

    dollar = ngn_amount * dollar_rate;
    euro = ngn_amount * euro_rate;
    pound = ngn_amount * pound_rate;
    yen = ngn_amount * yen_rate; 

    document.getElementById("demo").innerHTML = dollar.toLocaleString() + " USD"
    document.getElementById("demo2").innerHTML = euro.toLocaleString() + " EUR"
    document.getElementById("demo3").innerHTML = pound.toLocaleString() + " GBP"
    document.getElementById("demo4").innerHTML = yen.toLocaleString() + " JPY"
}