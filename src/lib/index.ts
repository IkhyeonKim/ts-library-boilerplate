export * from "./components";
import "./tailwind/base.css";

export function helloWorld(thing: string): string {
  return `Hello ${thing}!`;
}
