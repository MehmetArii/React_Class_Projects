import MainLayout from "app/MainLayout";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "app/Home";
import UserAdd from "app/UserAdd";
import UserEdit from "app/UserEdit";
import "./index.css";
import UserDetail from "app/UserDetail";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users/add" element={<UserAdd />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/users/:id/edit" element={<UserEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);