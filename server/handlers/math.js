const mathModel = require("../../storage/models/math.model");

const checkOddEven = async (req, res) => {
    const { n } = req.body;
    try {
        const result = await mathModel.checkOddEven(n);
        res.json({
            data: result,
            error: null
        });
    } catch (e) {
        res.json({
            data: null,
            error: e.message
        });
    } finally {
        res.end();
    }
};

const sum = async (req, res) => {
    const { a, b } = req.body;
    try {
        const result = await mathModel.sum(a, b);
        res.json({
            data: result,
            error: null
        });
    } catch (e) {
        res.json({
            data: null,
            error: e.message
        });
    } finally {
        res.end();
    }
};

const is21Century = async (req, res) => {
    const result = await mathModel.is21Century();
    res.json({
        data: result,
        error: null
    });
    res.end();
};

module.exports = {
    checkOddEven,
    sum,
    is21Century,
};
