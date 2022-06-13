const httpMocks = require("node-mocks-http");
const isWeekendHandler = require("../isWeekend");
// const isWeekend = require("../../../storage/models/isWeekend.model");

test("2022-06-12", async () => {
  jest.useFakeTimers().setSystemTime(new Date("2022-06-12"));
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/is-weekend",
  });
  const response = httpMocks.createResponse();
  await isWeekendHandler.isWeekend(request, response);
  expect(response.statusCode).toEqual(200);
  expect(response._getJSONData()).toEqual({
    data: true,
    error: null,
  });
});

test("2022-06-04", async () => {
  jest.useFakeTimers().setSystemTime(new Date("2022-06-04"));
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/is-weekend",
  });
  const response = httpMocks.createResponse();
  await isWeekendHandler.isWeekend(request, response);
  expect(response.statusCode).toEqual(200);
  expect(response._getJSONData()).toEqual({
    data: true,
    error: null,
  });
});
