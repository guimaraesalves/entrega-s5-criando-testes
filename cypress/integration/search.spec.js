context("Search", () => {
  it("zip code search", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
    cy.get("input").type(29101120);
    cy.contains("Buscar pelo CEP").click();
  });
});
