describe('Read files using Fixture', function () {
    it('Should read data from example.json fixture', function () {
        cy.fixture('example.json').then((data) => {
            cy.log(data.name);
            cy.log(data.email);
        });
    });
});

it('write file demo', function(){

    cy.writeFile('sample.txt','Hello I am Gilbert\n')
    cy.writeFile('sample.txt', 'I am learning Cypress', { flag: 'a+' });

})
