const isWeekendModel = require("../../storage/models/isWeekend.model");

const isWeekend = async (req, res) => {
  const result = await isWeekendModel.isWeekend();
  res.json({
    data: result,
    error: null,
  });
};

module.exports = {
  isWeekend,
};
