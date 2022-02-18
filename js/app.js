const form = document.querySelector("#loan-form");
const load = document.querySelector("#loader");
const output = document.querySelector("#output");
const warning = document.querySelector("#danger");
load.style.display = "none";
warning.style.display = "none";
    form.addEventListener("submit", calculateResults);

    function calculateResults (e) {
    const amount = document.querySelector("#amount");
    const interest = document.querySelector("#interest");
    const years = document.querySelector("#years");

    const monthlyPayment = document.querySelector("#monthly-payment");
    const total = document.querySelector("#total");
    const totalInterest = document.querySelector("#total-interest");

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);


    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        total.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
    } else {
        
    };
    
    if (amount.value && interest.value && years.value) {
        load.style.display = "block";
    output.style.display = "none";
    } else {
        warning.style.display = "block";
    }
    
    
   function loader () {
        load.style.display = "none";
        output.style.display = "block";
    }
    setInterval(loader, 3000);

    e.preventDefault();

    
} 
