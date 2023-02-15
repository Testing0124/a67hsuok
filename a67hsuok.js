 cy.request({
        'method': 'POST',
        "failOnStatusCode": false,
        'url': ('a67hsuok'),
        'body': {
            "email": Cypress.env('a67hsuok'),
            "password": Cypress.env('a67hsuok')
        }
    }).as('tokenRequest')
