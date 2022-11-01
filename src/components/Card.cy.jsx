import Card from './Card.vue'
import CoffeeIcon from '~icons/mdi/coffee'
import { faker } from '@faker-js/faker'

const defaultContent = faker.lorem.words(10)

describe('<Card/>', () => {
  it('renders the default slot', () => {
    cy.mount(
      <Card image={false} class="m-10 text-center group">
        {/* Consider using data-testid or cy.findByText to target and test if the default slot was rendered */}
        <CoffeeIcon class="text-4xl mx-auto group-hover:text-blue-600 duration-250 transition" />
        <div data-testid="default-slot">{defaultContent}</div>
      </Card>,
    ).get('[data-testid=default-slot]')
  })
})
