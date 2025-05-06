import { type Config } from "tailwindcss";
import preset from "@entity-filer/config/tailwind-preset";

export const theme = preset as Config;

export * from "./components/button";
export * from "./components/card";
export * from "./components/accordion";
export * from "./components/input";
export * from "./components/slider";
export * from "./components/toast"; 