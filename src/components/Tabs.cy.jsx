import Tabs from './Tabs.vue'
import {faker} from '@faker-js/faker'

const items = [
  {
    key: faker.datatype.uuid(),
    text: faker.commerce.department(),
  },
  {
    key: faker.datatype.uuid(),
    text: faker.commerce.department(),
  },
  {
    key: faker.datatype.uuid(),
    text: faker.commerce.department(),
  },
]

let onSelectSpy;

describe('<Tabs />', () => {
  beforeEach(() => {
    onSelectSpy = cy.spy().as('selectSpy')
  })
  it('renders the items using object syntax', () => {
    cy.viewport(400, 200)
    cy.mount(Tabs, {
      props: {
        onSelect: onSelectSpy,
        items
      }
    })
  })

  it('renders the items', () => {
    cy.viewport(400, 200)
    cy.mount(() => (
      <div class="m-8">
        <Tabs onSelect={onSelectSpy} items={items} />
      </div>
    ))

    // Things to assert:
    // 1. The event was emitted
    // 2. The focus state is set (See `have.focus` assertion)
    // 3. Keybindings are working as expected

    cy.findByText(items[1].text).click().should('have.focus')
    cy.get('@selectSpy').should('have.been.calledWith', items[1])
  })

  it('renders all the items passed in', () => {
    cy.mount(() => (
      <Tabs items={items} />
    )).wrap(items)
    .each((item) => {
      cy.get('body').findByText(item.text).should('be.visible').and('contain.text',item.text)
    })

    // Things to assert:
    // 1. The event was emitted
    // 2. The focus state is set (See `have.focus` assertion)
    // 3. Keybindings are working as expected

    // cy.findByText(items[1].text).click().should('have.focus')
    // cy.get('@selectSpy').should('have.been.calledWith', items[1])
  })
})
