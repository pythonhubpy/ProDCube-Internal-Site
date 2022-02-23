import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home Page", () => {
	it("Renders heading Home Page", () => {
		render(<Home />);

		const heading = screen.getByText("Home Page");

		expect(heading).toBeInTheDocument();
	});
});
