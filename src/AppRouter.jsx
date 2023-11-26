import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HeroPage, HomePage, SearchPage } from "./component/pages";
import { Navigation } from "./component/Navigation";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigation />}>
          <Route path="pokemon/id" element={<HeroPage />} />
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
