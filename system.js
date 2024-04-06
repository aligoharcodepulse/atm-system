function check_pin()
{
    let pin = document.getElementById("pinCode").value;
    if (pin === "1005") {
        window.location.href = "one.html";
    } else {
        alert("Incorrect PIN! Please try again.");
    }
}
let balance = 0;

function balance_check()
{
    if (balance === 0) {
        alert("Your account balance is 0, First Deposit Some Amount To Your Account");
    }
    else{
        alert(`Your Account balance is ${balance}`);
    }
    
    
}

function cash_deposit() 
{
    let deposit = prompt("Enter Amount You Want to Deposit");
    balance += deposit;
    alert(`Deposited ${deposit} successfully. Account balance: ${balance}`);  
}

function withdraw() {
    let choice = prompt(`Enter Choice:
    1) 5000 
    2) 10000 
    3) 20000 
    4) 50000`);

    choice = parseInt(choice);

    if (choice < 1 || choice > 4) {
        alert("Invalid choice! Please select a valid option.");
        return;
    }

    let withdrawAmount = 0;
    switch (choice) {
        case 1:
            withdrawAmount = 5000;
            break;
        case 2:
            withdrawAmount = 10000;
            break;
        case 3:
            withdrawAmount = 20000;
            break;
        case 4:
            withdrawAmount = 50000;
            break;
    }
    if (withdrawAmount > balance) {
        alert("Insufficient balance! You are ghareeb.");
    } else {
        balance -= withdrawAmount; // Deduct the withdrawAmount from balance
        alert(`Withdrawn ${withdrawAmount} successfully. Remaining balance: ${balance}`);
    }
}

function other_amount() 
{
    let other_amount = prompt("Enter amount you want to withdraw");
    if (other_amount > balance) {
        alert("Insufficient balance! You are ghareeb.");
    } else {
        balance -= other_amount; // Deduct the withdrawAmount from balance
        alert(`Withdrawn ${other_amount} successfully. Remaining balance: ${balance}`);
    }
}

