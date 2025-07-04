function myFunction() {
    let usd_amount = document.getElementById("input").value;

    let naira_rate = 1549.50, euro_rate = 0.86, pound_rate = 0.73, yen_rate = 145.84;

    naira = usd_amount * naira_rate;
    euro = usd_amount * euro_rate;
    pound = usd_amount * pound_rate;
    yen = usd_amount * yen_rate; 

    document.getElementById("demo").innerHTML = naira.toLocaleString() + " NGN"
    document.getElementById("demo2").innerHTML = euro.toLocaleString() + " EUR"
    document.getElementById("demo3").innerHTML = pound.toLocaleString() + " GBP"
    document.getElementById("demo4").innerHTML = yen.toLocaleString() + " JPY"
}