import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./routes/Error.tsx";
import Home from "./routes/Home.tsx";

const root = document.getElementById("root");

if (!root) throw new Error("No root element found");

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
	},
]);

document.addEventListener("dragstart", (event) => event.preventDefault());

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
