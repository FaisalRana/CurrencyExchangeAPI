import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeMoneyAPI from './currency-convert-service';

async function exchangeMoney() {
  const response = await ExchangeMoneyAPI.getMoney();
  getElements(response)
}
 
function getElements(response) {
  let money = $('input#inputMoney').val();
  let currency = $('select#currency option:selected').val();
  if (response["conversion_rates"]) {
    const convertedRate = parseFloat((response["conversion_rates"][currency]) * money).toFixed(2);
    const keyList = Object.keys(response["conversion_rates"]);
    if(convertedRate === "0.00") {
      printG2g(keyList);
    } else if(isNaN(convertedRate) === false) {
      printResponse(convertedRate, money, currency);
    } else {
      printError(currency + " is not found in database.  Please select a currency from the drop down menu.");
    }
  } else printError(response["error-type"])
} 

function printG2g(keyList) {
  $('.showErrors').html(`Currencies locked and loaded`);
  $('#currency').html(` `)
  $('#toggleInput').show();
  keyList.forEach(key => 
    $("#currency").append(`<option value=${key}>${key}</option>`));
}
function printError(error) {
  $('.showErrors').html("");
  $('.showErrors').append(`Error: ${error}`);
}
function printResponse(response, money, currency) {
  $('.showErrors').text("");
  $('.showResult').append(`<li> $${money} in USD is ${response} in ${currency}`);
}

$(document).ready(function() {
  $('#submitExchange').click(function() {
    (exchangeMoney());
  });
});