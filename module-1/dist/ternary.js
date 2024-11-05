"use strict";
{
  // Ternary Operator.
  const age = 13;
  const isAdult = age > 18 ? "Adult " : "Not Adult";
  console.log({ isAdult });
  // Nullish coalescing Operator.    used on making descision on null , undefined.
  // const isAuthenticated = null;
  // const result = isAuthenticated ?? "Guest";
  // console.log({ result });
  // Alternative.
  const isAuthenticated = null;
  const result =
    isAuthenticated !== null && isAuthenticated !== void 0
      ? isAuthenticated
      : "Guest";
  console.log({ result });
  const User = {
    name: "Zulquar",
    local_address: "Raniganj",
  };
}
