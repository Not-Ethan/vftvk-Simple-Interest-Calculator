function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate/100;
    let year = new Date().getFullYear()+parseInt(years);
    
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}
        