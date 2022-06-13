const httpMocks = require("node-mocks-http");
const isLeapYearHandler = require("../isLeapYear");
// const isLeapYear = require("../../../storage/models/isLeapYear.model");

test("2016-06-12", async () => {
  jest.useFakeTimers().setSystemTime(new Date("2016-06-12"));
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/is-leap-year",
  });
  const response = httpMocks.createResponse();
  await isLeapYearHandler.isLeapYear(request, response);
  expect(response.statusCode).toEqual(200);
  expect(response._getJSONData()).toEqual({
    data: true,
    error: null,
  });
});

test("2020-06-12", async () => {
  jest.useFakeTimers().setSystemTime(new Date("2020-06-12"));
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/is-leap-year",
  });
  const response = httpMocks.createResponse();
  await isLeapYearHandler.isLeapYear(request, response);
  expect(response.statusCode).toEqual(200);
  expect(response._getJSONData()).toEqual({
    data: true,
    error: null,
  });
});

test("2008-06-12", async () => {
  jest.useFakeTimers().setSystemTime(new Date("2008-06-12"));
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/is-leap-year",
  });
  const response = httpMocks.createResponse();
  await isLeapYearHandler.isLeapYear(request, response);
  expect(response.statusCode).toEqual(200);
  expect(response._getJSONData()).toEqual({
    data: true,
    error: null,
  });
});
