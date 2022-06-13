const isLeapYearModel = require("../../storage/models/isleap-year.model");

const isLeapYear = async (req, res) => {
  const result = await isLeapYearModel.isLeapYear();
  res.json({
    data: result,
    error: null,
  });
};

module.exports = {
  isLeapYear,
};
