const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");

test.each([
    [3, 3, 6, null, 200],
    [-3, -3, -6, null, 200],
    [-3, 3, 0, null, 200],
])("%d + %d should return data: '%d', error: '%s', status code: %d", async (a, b, expectedData, errorMessage, statusCode) => {
    const request = httpMocks.createRequest({
        method: "POST",
        url: "/sum",
        body: {
            a: a,
            b: b
        },
    });
    const response = httpMocks.createResponse();
    await mathHandler.sum(request, response);
    expect(response.statusCode).toEqual(statusCode);
    expect(response._getJSONData()).toEqual({
        data: expectedData,
        error: errorMessage
    });
});
