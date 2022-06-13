const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");

test("2020-01-01", async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2022-05-15'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-21-century",
    });
    const response = httpMocks.createResponse();
    await mathHandler.is21Century(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});

test("2100-01-01", async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2100-01-01'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-21-century",
    });
    const response = httpMocks.createResponse();
    await mathHandler.is21Century(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: false,
        error: null
    });
});

test("1999-12-31", async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date('1999-12-31'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-21-century",
    });
    const response = httpMocks.createResponse();
    await mathHandler.is21Century(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: false,
        error: null
    });
});