import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeMoneyAPI from './currency-convert-service';

async function exchangeMoney(money, currency) {
  const response = await ExchangeMoneyAPI.getMoney();
  const convertedRate = (response["conversion_rates"][currency]) * money;
  if (isNaN(convertedRate)=== false) {
    printResponse(convertedRate, money, currency);
  } else {
    printError(currency)
  }
  
}
function printError(currency) {
  $('.showErrors').append(`Error: ${currency} is not a known currency in the database.`);
}

function printResponse(response, money, currency) {
  $('.showResult').append(`<li> $${money} is ${response} in ${currency}`);
}

$(document).ready(function() {
  $('#submitExchange').click(function() {
    let money = $('input#inputMoney').val();
    let currency = $('select#currency option:selected').val();
    (exchangeMoney(money, currency));
    return money, currency;
  });
  
});