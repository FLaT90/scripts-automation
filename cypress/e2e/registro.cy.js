describe('Registro de usuario', function() {
  it('Registra un nuevo usuario exitosamente', function() {
    cy.visit('http://199.187.208.16/qa-test/index.php')

    //Enlace de registro en la página que redirige al formulario de registro
    cy.get('.enlace').click()

    // Rellena el formulario de registro
    cy.get('#name').type('Luis Mora', {delay: 100})
    cy.get('#email').type('luis.mora@example.com', {delay: 100})
    cy.get('#pwd').type('Abcdef@123', {delay: 100})
    cy.get('#pwdRepeat').type('Abcdef@123', {delay: 100})

    // Haz clic en el botón de registro
    cy.get('.btn-block').click()
  })
})








