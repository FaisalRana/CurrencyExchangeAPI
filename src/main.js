import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeMoneyAPI from './currency-convert-service';

async function exchangeMoney(money, currency) {
  const response = await ExchangeMoneyAPI.getMoney();
  const convertedRate = (response["conversion_rates"][currency]) * money;
  printResponse(convertedRate);
}

function printResponse(response) {
  $('.showResult').append(`${response}`);
}

$(document).ready(function() {
  $('#submitExchange').click(function() {
    let money = $('input#inputMoney').val();
    let currency = $('select#currency option:selected').val();
    (exchangeMoney(money, currency));
    return money, currency;
  });
  
});