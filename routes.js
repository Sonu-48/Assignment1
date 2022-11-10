import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
// import HomeLayout from "src/layouts/HomeLayout";

export const routes = [
  {
    exact: true,
    path: "/",
    // layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home")),
  },
  {
    exact: true,
    path: "/india",
    //  layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/Test/India")),
  },
  {
    exact: true,
    path: "/afghanistan",
    //  layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/Test/Afghanistan")),
  },
  {
    exact: true,
    path: "/australia",
    //  layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/Test/Australia")),
  },
  {
    exact: true,
    path: "/brazil",
    //  layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/Test/Brazil")),
  },

  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];
