export default class ExchangeMoneyAPI {  
  static async getMoney() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/8ac577d53e547fdbe45e2cf8/latest/USD`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}