Cypress.Commands.add('login', (user, pass) => {
  cy.visit('http://199.187.208.16/qa-test/index.php')
  cy.get('#ingresoUsuario').type(user, {delay: 100}) 
  cy.get('#ingresoContrasena').type(pass, {delay: 100}) 
  cy.get('.btn-block').click()
})


describe('Cerrar sesión', function() {
  beforeEach(() => {
    cy.login('luis.mora@example.com', 'Abcdef@123'); // Reemplaza 'TuUsuario' y 'TuContraseña' con credenciales válidas
  })

  it('Cierra la sesión exitosamente', function() {
    // Imagina que el usuario ya ha iniciado sesión y está en la página de inicio
    cy.visit('http://199.187.208.16/qa-test/home.php')

    // Click en el boton para cerrar sesion
    cy.get('.btn').click()
  })
})
