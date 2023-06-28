Cypress.Commands.add('login', (user, pass) => {
  cy.visit('http://199.187.208.16/qa-test/index.php')
  cy.get('#ingresoUsuario').type(user, {delay: 100}) 
  cy.get('#ingresoContrasena').type(pass, {delay: 100}) 
  cy.get('.btn-block').click()
})


describe('Cerrar sesión', function() {
  beforeEach(() => {
    cy.login('luis.mora@example.com', 'Abcdef@123');
  })

  it('Cierra la sesión exitosamente', function() {
    cy.visit('http://199.187.208.16/qa-test/home.php')
    cy.get('.btn').click()
  })
})
