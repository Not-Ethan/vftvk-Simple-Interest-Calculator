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
    r.innerHTML = `If you deposit <mark>${principal}</mark>, at an interest rate of <mark>${rate}</mark>.\nYou will receive an amount of <mark>${interest}</mark>,in the year <mark>${year}</mark>`;

    //refocus
    document.getElementById("principal").focus();
}
function updateRate() {
    //get ref to element
    var rateval = document.getElementById("rate").value;
    
    //update text
    document.getElementById("rate_val").innerText=rateval;

}

        