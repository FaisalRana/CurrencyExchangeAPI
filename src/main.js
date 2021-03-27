import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeMoneyAPI from './currency-convert-service';

async function exchangeMoney(money, currency) {
  const response = await ExchangeMoneyAPI.getMoney();
  const convertedRate = parseFloat((response["conversion_rates"][currency]) * money).toFixed(2);
  const keyList = Object.keys(response["conversion_rates"]);
  if(convertedRate === "0.00") {
    printG2g(keyList);
  } else if(isNaN(convertedRate) === false) {
    printResponse(convertedRate, money, currency);
  } else {
    printError(currency);
  }
}

function printG2g(keyList) {
  $('.showErrors').html(`Currencies locked and loaded`);
  $("#currency").html(` `)
  keyList.forEach(key => 
    $("#currency").append(`<option value=${key}>${key}</option>`));
}
function printError(currency) {
  $('.showErrors').html("");
  $('.showErrors').append(`Error: ${currency} is not a known currency in the database.`);
}
function printResponse(response, money, currency) {
  $('.showErrors').text("");
  $('.showResult').append(`<li> $${money} in USD is ${response} in ${currency}`);

}

$(document).ready(function() {
  $('#submitExchange').click(function() {
    let money = $('input#inputMoney').val();
    let currency = $('select#currency option:selected').val();
    (exchangeMoney(money, currency));
    return money, currency;
  });
});