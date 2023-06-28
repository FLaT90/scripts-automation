describe('Inicio de sesión', function() {
    it('Inicia sesión exitosamente', function() {
      // Visita la página de inicio de sesión
      cy.visit('http://199.187.208.16/qa-test/index.php')
  
      // Rellena el formulario de inicio de sesión
      cy.get('#ingresoUsuario').type('luis.mora@example.com', {delay: 100}) // Reemplaza 'TuUsuario' con un usuario válido
      cy.get('#ingresoContrasena').type('Abcdef@123', {delay: 100}) // Reemplaza 'TuContraseña' con una contraseña válida
  
      // Haz clic en el botón de inicio de sesión
      cy.get('.btn-block').click()
    })
  })