const { format, parseISO, subDays } = require("date-fns");

class Data {
  constructor() {
    this.data = [];
    for (let num = 30; num >= 0; num--) {
      this.data.push({
        date: subDays(new Date(), num).toISOString().substr(0, 10),
        value: 1 + Math.random(),
        value2: 1 - Math.random(),
      });
    }
  }
  getData() {
    return this.data;
  }
}
module.exports = new Data();
