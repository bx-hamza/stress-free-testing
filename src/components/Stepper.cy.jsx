import Stepper from './Stepper.vue'

// Arrange, Act, Assert 
// Given, When, Then "Gherkin"
const textSelector = '[data-testid=counter]'
const incrementSelector = '[data-testid=increment]'
const decrementSelector = '[data-testid=decrement]'

describe('<Stepper />', () => {
  it('renders', () => {
    cy.mount(Stepper)
    cy.get(textSelector).should('contain.text', '0')
    cy.get(incrementSelector).click()
    cy.get(textSelector).should('contain.text', '1')
    cy.get(decrementSelector).click().click()
    cy.get(textSelector).should('not.contain.text', '-1')
  })

  it('has a min property that defaults to 0', () => {
    cy.mount(Stepper)
      .get(decrementSelector)
      .click()
      .get(textSelector)
      .should('contain.text', '0')
  })

  it('has a min property and starts there as the initial value', () => {
    cy.mount(Stepper, {
      props: {
        min: 3
      }
    })
      .get(decrementSelector)
      .click()
      .get(textSelector)
      .should('contain.text', '3')
  })

  it('has a value that is 0 by default', () => {
    cy.mount(Stepper)
    .get(textSelector)
    .should('contain.text', '0')
  })

  it('has a max property', () => {
    cy.mount(Stepper, {
      props: {
        max: 2
      }
    })
    .get(incrementSelector)
    .click()
    .click()
    .click()
    .get(textSelector)
    .should('contain.text', '2')
  })

  it('emits an event called "change" any time the value is updated', () => {
    const onChangeSpy = cy.spy().as('onChange')
    cy.mount(Stepper, {
      props: {
        onChange: onChangeSpy
      }
    })
    .get(incrementSelector)
    .click()
    .click()
    .click()
    .click()
    .click()
    .get('@onChange')
    .should('have.been.calledWith', 5)
  })
})
