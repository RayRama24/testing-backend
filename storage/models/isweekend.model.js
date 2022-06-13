function isWeekend() {
  return new Date().getDay() == 6 || new Date().getDay() == 0;
}

module.exports = {
  isWeekend,
};
