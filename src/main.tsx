import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./components/layout/pageLayout.tsx";
import MenuPage from "./pages/menu.tsx";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: (
				<PageLayout>
					<App />
				</PageLayout>
			),
		},
		{
			path: "/menu",
			element: (
				<PageLayout>
					<MenuPage />
				</PageLayout>
			),
		},
	],
	{
		basename: "/website",
	}
);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
