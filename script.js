function compute()
{
    //get principal and check value
    let principal = document.getElementById("principal").value;
    if(principal<1) return alert("Enter a positive number for principal.");
    
    //define other variables
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate/100;
    let year = new Date().getFullYear()+parseInt(years);
    let r = document.getElementById("result");

    //update html
    r.innerHTML = `<strong>If</strong> you deposit <mark>${principal}</mark>,<br><strong>at</strong> an interest rate of <mark>${rate}</mark>.<br><strong>You<strong> will receive an amount of <mark>${interest}</mark>,<br><strong>in</strong> the year <mark>${year}</mark><br>`;

    //refocus
    document.getElementById("principal").focus();
}
function updateRate() {
    //get ref to element
    var rateval = document.getElementById("rate").value;
    
    //update text
    document.getElementById("rate_val").innerText=rateval;

}

        