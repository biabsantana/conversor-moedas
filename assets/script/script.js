var oReq = new XMLHttpRequest();
oReq.onload = loadData;
oReq.open("GET", "http://data.fixer.io/api/latest?access_key=18f0676055fe28e974b77864d20fc736");
oReq.send();
oReq.responseType = "json";
var data;

function loadData() {
    data = this.response;
    var coins = Object.keys(data.rates);
    newOption(coins, "selectorIn");
    newOption(coins, "selectorOut");
}

function newOption(coins, seletor) {
    for (var i = 0; i < coins.length; i++) {
        var object = document.createElement("option");
        object.value = coins[i];
        object.textContent = coins[i];
        document.querySelector("." + seletor).appendChild(object);
    }
}

function getInput(inputClass) {
    var money = document.querySelector("" + inputClass);
    var currency = document.getElementsByTagName('select');
    if (money.value == "") {
        return alert('Digite um valor.');
    }
    var result = converter(currency, money);
    var text = document.querySelector("p");
    text.textContent = "Valor convertido = " + result.toFixed(5) + " " + currency[1].value;
}

function converter(currency, money) {
    rates = data.rates;
    return money.value * (rates[currency[1].value] / rates[currency[0].value]);
}