const users = [

    {
        name: 'reth',
        pin: '0909',
        bal: 100
    },
    {
        name: 'ron',
        pin: '0007',
        bal: 9500
    },
    {
        name: 'bruce',
        pin: '1312',
        bal: 100000
    },
    {
        name: 'alfred',
        pin: '1001',
        bal: 54000
    },
    {
        name: 'grim',
        pin: '1100',
        bal: 50000
    }

];

function login(user, pin) {

    var user = document.getElementById('user').value;
    var pin = document.getElementById('pin').value;

    for (var i = 0; i < users.length; i++) {

        if (user == users[i].name && pin == users[i].pin) {

            document.getElementById("box").style.display = "none";
            document.getElementById("main").style.display = "block";
            document.getElementById("welcomeUser").textContent = users[i].name;

        } else {
            document.getElementById("invalid").textContent = "ENTER A VALID USER !"
        }

    }
}

function checkBal() {

    var user = document.getElementById("user").value;
    var pin = document.getElementById("pin").value;

    for (var i = 0; i < users.length; i++) {
        if (user == users[i].name && pin == users[i].pin) {
            document.getElementById("out").textContent = `Your balance is $${users[i].bal}`
            break
        } else {
            document.getElementById("out").textContent = `INVALID !`
        }
    }
}

function depo() {
    let user = document.getElementById("user").value;
    let pin = document.getElementById("pin").value;
    let amount = Number(prompt("Enter the deposit amount:"));

    for (var i = 0; i < users.length; i++) {
        if (user == users[i].name && pin == users[i].pin && amount > 0 && !isNaN(amount)) {
            users[i].bal += amount;
            document.getElementById("out").textContent = `$${amount} deposited successfully. Your new balance is $ ${users[i].bal}`
            break
        } else {
            document.getElementById("out").textContent = `Enter A Valid Amount !`
        }
    }
}

function withd() {
    let user = document.getElementById("user").value;
    let pin = document.getElementById("pin").value;
    let amount = Number(prompt("Enter the deposit amount:"));

    for (var i = 0; i < users.length; i++) {
        if (user == users[i].name && pin == users[i].pin && amount < users[i].bal && !isNaN(amount)) {
            users[i].bal -= amount;
            document.getElementById("out").textContent = `$${amount} Withdrawal successfully. Your new balance is $ ${users[i].bal}`
            break
        }else {
            document.getElementById("out").textContent = `Enter A Valid Amount !`
        }
    }
}

function exit() {
    document.getElementById("box").style.display = "block";
    document.getElementById("main").style.display = "none";
    document.getElementById("invalid").textContent = "Welcome Back!";
}
