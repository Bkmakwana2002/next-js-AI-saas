"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4c7cda09-9812-49c0-a395-2584cbebdc55");
  }, []);

  return null;
};
