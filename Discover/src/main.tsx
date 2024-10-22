import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.tsx';
import './index.css';
import DigitalCreationsGallery from './components/DigitalCreationsGallery.tsx';

// Define routes
const router = createBrowserRouter([
  {
    path: "/gallery", // Change this to a proper URL path
    element: <DigitalCreationsGallery />
  }
]);

// Render the application with RouterProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Wrap your app in RouterProvider */}
  </StrictMode>
);

