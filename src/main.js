import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function() {
  $('#submitExchange').click(function() {
    let money = $('input#inputMoney').val();
    let currency = $('input#inputCurrency').val();
    $('.showResult').append(`${money} ${currency}`);

  });
});