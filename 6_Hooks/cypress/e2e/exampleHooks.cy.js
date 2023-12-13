beforeEach(() => {
  //root-level hook
  //runs before wvery test
  cy.log('Root Before each');
});

context('Hooks', () => {
  before(() => { cy.log('Before: runs once before all tests in the block'); });
  beforeEach(() => { cy.log('Before Each: runs before each test in the block'); });

  //Open Cypress| Set ".only"
  it('Test 01', () => { });
  //Open Cypress| Set ".only"
  it('Test 02', () => { });

  afterEach(() => { cy.log('After Each: runs after each test in the block'); });
  after(() => { cy.log('After: runs once after all tests in the block'); });
})