import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageWrapper from "./components/PageWrapper.tsx";
import About from "./routes/About.tsx";
import ErrorPage from "./routes/Error.tsx";
import Home from "./routes/Home.tsx";
import Impress from "./routes/Impress.tsx";
import Install from "./routes/Install.tsx";
import Login from "./routes/Login.tsx";
import Privacy from "./routes/Privacy.tsx";
import Schools from "./routes/Schools.tsx";
import Demo from "./routes/Demo.tsx";

const root = document.getElementById("root");

if (!root) throw new Error("No root element found");

const router = createBrowserRouter([
	{
		path: "/",
		element: <PageWrapper />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/impressum",
				element: <Impress />,
			},
			{
				path: "/datenschutz",
				element: <Privacy />,
			},
			{
				path: "/installation",
				element: <Install />,
			},
			{
				path: "/unternehmen",
				element: <About />,
			},
			{
				path: "/demo",
				element: <Demo />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/schulen",
				element: <Schools />,
			},
		],
	},
]);

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
