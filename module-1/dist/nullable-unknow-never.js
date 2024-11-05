"use strict";
{
  // Nullable Types :
  const searchName = (value) => {
    const result = value ? "Serching..." : "Nothing to search";
    console.log({ result });
  };
  searchName(null);
  // unknown Types :
  let a; // after giving ''unknow to any variable it is compulsory to mention its data-type.
  a = 25;
  a = "zulquar";
  if (typeof a === "string") {
    a.toUpperCase;
    console.log(a);
  }
  // Never :
  // function infinite():never
  // {
  //     while (true)
  //     {
  //         console.log('1')
  //     }
  // }
  // infinite();
  // console.log('hi');
  const throwError = (msg) => {
    throw new Error(msg);
  };
  throwError("Something went wrong !");
}
