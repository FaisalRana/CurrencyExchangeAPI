export default class ExchangeMoneyAPI {  
  static async getMoney() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!response.result === "success") {
        throw Error(response.result);
      }
      return response.json();
    } catch(error) {
      return error.message
    }
  }
}
