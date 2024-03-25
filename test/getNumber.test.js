// sum.test.js
import {expect, test} from "vitest";
import formatDate from "../helpers/formatDate";
import getNumber from "../helpers/getNumberOfDays";

test("test number", () => {
  expect(getNumber("2024-01-01", "2024-01-02")).toBe(1);
});
