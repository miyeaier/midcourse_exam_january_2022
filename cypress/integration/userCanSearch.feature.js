describe('serching for "Barack ', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://api.github.com//search/users/", {
      fixture: "searchForTheGHUserRepository.json"
    })
    cy.visit('/')
    cy.get('[data-cy=search-field]').type("Barack")
    cy.get('[data-cy=search-button]').click()
  });
  it('is expected to make a network call', () => {
    cy.wait('@userSeach')
      .its("requset.method")
      .should("eq", "GET")
      .and("response.statusCode")
      .should("eq", 200)

  });
  it("is expected to paoulate view with search results", () => {

    cy.get('[data-cy=results]').children().should('have.length',3)
  })
});