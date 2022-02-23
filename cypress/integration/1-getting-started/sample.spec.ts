describe("Home Page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});
	it("Renders heading Home Page", () => {

		cy.get(".heading").should("have.text", "Home Page");
	});
});

export {};
