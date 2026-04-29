window.addEventListener('scroll', function() {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
        nav.style.padding = '15px 7%';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.3)';
        nav.style.padding = '20px 7%';
    }
});

// Калькулятор функциясы
const yearsInput = document.getElementById('years');
const yearsVal = document.getElementById('yearsVal');

yearsInput.addEventListener('input', () => {
    yearsVal.innerText = yearsInput.value + " жыл";
});

function calculateMortgage() {
    const price = parseFloat(document.getElementById('homePrice').value);
    const down = parseFloat(document.getElementById('downPayment').value);
    const years = parseFloat(document.getElementById('years').value);
    
    if (price <= down) {
        alert("Баштапкы төлөм үйдүн баасынан аз болушу керек!");
        return;
    }

    const loanAmount = price - down;
    const months = years * 12;
    const monthlyPayment = loanAmount / months;
    
    document.getElementById('result').innerText = 'Ай сайын төлөм: $' + monthlyPayment.toFixed(2);
}

document.getElementById('burger').addEventListener('click', () => {
    alert("Меню функциясы азырынча иштеп чыгуу алдында. Бул жерге меню тизмесин кошсоңуз болот!");
});
