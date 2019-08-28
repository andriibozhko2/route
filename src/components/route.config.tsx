import React from "react";

import First from "./first";
import Second from "./second";
import Third from "./third";
import TFA from "./2fa.tsx";

const routes = [
  {
    path: "/dashboard/:sidebar/check",
    exact: true,
    render: props => <TFA {...props} />
  },
  {
    path: "/",
    exact: true,
    render: props => <First {...props} />
  },
  {
    path: "/second",
    render: props => <Second {...props} />,
    child: [
      {
        path: "/second/transfers",
        render: () => <h1>transfers</h1>
      },
      {
        path: "/second/test",
        render: () => <div>hello world</div>,
        child: [
          {
            path: "/second/test/s",
            render: () => <div>FINISH</div>,
            child: [
              {
                path: "/second/:ide/:id",
                render: props => {
                  return <div>Last FINISH</div>;
                }
              }
            ]
          }
        ]
      },
      {
        path: "/second/test1",
        render: () => <div>hello world</div>
      }
    ]
  },
  {
    path: "/third",
    render: props => <Third {...props} />
  }
];

export default routes;
