import React from "react";
import { Landing, Apply } from "../screens/exports";

const routes = [
  {
    path: "/",
    element: (
      <>
        <Landing />
      </>
    ),
  },
  {
    path: "/apply",
    element: (
      <>
        <Apply />
      </>
    ),
  },
];

export default routes;
