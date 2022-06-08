import WatchButton from './WatchButton.vue'
import { ref } from 'vue'
describe('WatchButton', () => {
  beforeEach(() => {
    cy.mount(() => {
      return (<div class="p-4">
        <WatchButton />
      </div>)
    })
  })

  it('shows "watched" text when clicked', () => {
    // Given: asserting the state is how i think it should be
    cy.findByText('Watched').should('not.exist')
    // When, I click the button
      .get('button').click()

    // Then, the state should be flipped
      .findByText('Watched').should('be.visible')
      .findByText('Watch').should('not.exist')
  })

  it('shows "watch" text by default', () => {
    cy.findByText('Watch').should('be.visible')
      .findByText('Watched').should('not.exist')
  })
})

describe('WatchButton API', () => {
  it.skip('takes an initialWatch prop in', () => {
    const watched = ref(false)
    const onModelValueUpdate = cy.spy().as('onModelValueUpdate')
    cy.mount(() => (<div class="p-4">
      <WatchButton
        modelValue={watched.value}
        onUpdate:modelValue={(newVal) => {
          watched.value = newVal
          onModelValueUpdate()
        }}/>
    </div>))
      .get('button').click()
      .get('@onModelValueUpdate').should('have.been.called')
  })

  it.only('takes an initialWatch prop in', () => {
    const watched = ref(false)
    const onModelValueUpdate = cy.spy().as('onModelValueUpdate')
    cy.mount(WatchButton, {
        props: {
        'onUpdate:modelValue': (newVal) => {
          watched.value = newVal
          onModelValueUpdate()
        },
      modelValue: watched
    }})
      .get('button').click()
      .get('@onModelValueUpdate').should('have.been.called')
  })
})
