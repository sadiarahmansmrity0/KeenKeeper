"use client";
import { createContext, useState } from "react";
import { getAllFromLocalDB } from "@/utils/localDB";

export const InterectionsContext = createContext();

const InterectionsProvider = ({ children }) => {

  const [interections, setInterections] = useState([...getAllFromLocalDB()]);

  const data = {
    interections, setInterections,
  

  };

  return (
    <InterectionsContext value={data}>
      {children}
    </InterectionsContext>
  );
};

export default InterectionsProvider;