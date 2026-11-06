import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Experience from "./Experience";
import Header from "./components/Header";

// CRA's Jest resolver predates React Router 7's package exports.
jest.mock("react-router-dom", () => {
  global.TextEncoder = require("util").TextEncoder;
  global.TextDecoder = require("util").TextDecoder;
  return jest.requireActual("../node_modules/react-router/dist/development/index.js");
}, { virtual: true });

afterEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove("dark");
});

test("Experience navigation opens the route and renders the three roles in order", () => {
  render(
    <MemoryRouter initialEntries={["/projects"]}>
      <Routes>
        <Route path="/projects" element={<Header />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </MemoryRouter>
  );
  fireEvent.click(screen.getByRole("link", { name: "Experience" }));
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Professional Experience");
  expect(screen.getByRole("link", { name: "Experience" })).toHaveClass("active");
  const cards = screen.getAllByRole("article");
  expect(cards).toHaveLength(3);
  ["Netways", "Velents.AI", "Hectar App"].forEach((company, index) => {
    expect(within(cards[index]).getByText(company)).toBeInTheDocument();
  });
  expect(within(cards[0]).getByText("March 2026 – Present")).toBeInTheDocument();
  expect(within(cards[1]).getByText("April 2025 – February 2026")).toBeInTheDocument();
  expect(within(cards[2]).getByText("September 2024 – March 2025")).toBeInTheDocument();
  expect(within(cards[0]).getByRole("list", { name: "Technologies" }).children).toHaveLength(10);
});

test("direct Experience route preserves the saved theme and can toggle both themes", () => {
  localStorage.setItem("theme", "light");
  render(<MemoryRouter initialEntries={["/experience"]}><Experience /></MemoryRouter>);
  expect(document.documentElement).not.toHaveClass("dark");
  fireEvent.click(screen.getByTitle("Toggle Theme"));
  expect(document.documentElement).toHaveClass("dark");
  expect(localStorage.getItem("theme")).toBe("dark");
  fireEvent.click(screen.getByTitle("Toggle Theme"));
  expect(document.documentElement).not.toHaveClass("dark");
  expect(screen.getAllByRole("article")).toHaveLength(3);
});
