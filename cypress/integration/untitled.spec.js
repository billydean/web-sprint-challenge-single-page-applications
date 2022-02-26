// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Sprint Tests', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    })

const nameInput = () => cy.get('input[name="name"]')
const pepperoni = () => cy.get('input[name="pepperoni"]')
const sausage = () => cy.get('input[name="sausage"]')
const size = () => cy.get('select[name="size"]')
const sauce = () => cy.get('select[name="sauce"')
const quantity = () => cy.get('input[name="quantity"]')
const button = () => cy.get('button[id="order-button"]')

it('Can type in text fields', ()=>{
    nameInput()
        .should('have.value','')
        .type('Billy')
        .should('have.value','Billy')
})
it('Can select multiple toppings', ()=>{
    pepperoni()
        .check(),
    sausage()
        .check()
})
it('You can submit the form',()=>{
    nameInput()
        .type('Billy')
    pepperoni()
        .check()
    size()
        .select('14')
    sauce()
        .select('white')
    quantity()
        .type('1')
    button()
        .should('not.be.disabled')
        .click()
})
})