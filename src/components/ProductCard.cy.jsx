import ProductCard from './ProductCard.vue'

// A Vite-specific parameter to resolve the url of your image.
import TypewriterUrl from '../assets/typewriter.jpg?url'

const img = {
  alt: 'A vintage typewriter on a white background.',
  src: TypewriterUrl,
}

const description = `Vintage Typewriter to post awesome stories about UI design and webdev.`
const price = '$49.50'
const additional = 'Eligible for Shipping To Mars or somewhere else.'
const rating = 4.67

describe('<ProductCard />', () => {
  beforeEach(() => {
    cy.mount(() => 
      (<div class="resize overflow-auto">
      <ProductCard
        class="m-2"
        img={img}
        description={description}
        price={price}
        additional={additional}
        rating={rating}
      />
      </div>),
    )
  })

  it('works', () => {})

  it('renders the image', () => {})
  it('renders the description', () => {
    cy.findByText(description).should('be.visible')
  })
  it('renders the price', () => {
    cy.findByText(price).should('be.visible')
  })
  it('renders the rating', () => {
    cy.findByText(rating).should('be.visible')
  })

  it('has a watch button', () => {})
  it('the product watch button is not selected by default', () => {})
  it('when you click watch, the product is watched', () => {})
})
