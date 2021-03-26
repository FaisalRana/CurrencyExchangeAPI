import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeMoneyAPI from './currency-convert-service';

async function exchangeMoney() {
  const response = await ExchangeMoneyAPI.getMoney();
  return response;
}



$(document).ready(function() {
  $('#submitExchange').click(function() {
    let money = $('input#inputMoney').val();
    let currency = $('input#inputCurrency').val();
    $('.showResult').append(`${money} ${currency}`);
    console.log(exchangeMoney());
  });
  
});