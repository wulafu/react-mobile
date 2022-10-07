import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

const Index = lazy(() => import("@/pages/Index"));
const NoMatch = lazy(() => import("@/pages/NoMatch"));

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      { index: true, element: <Index /> },
      { path: "*", element: <NoMatch /> },
    ],
  },
];

function App() {
  const element = useRoutes(routes);

  return <Suspense fallback={null}>{element}</Suspense>;
}

export default App;
