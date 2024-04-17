/// <reference types = "cypress"/>
/// <reference types = "cypress-downloadfile"/>

// it ('File upload Test', function(){

//     cy.visit('https://trytestingthis.netlify.app/')
//     cy.get('#myfile').attachFile('signature.png')

// })

it ('dowload File Test', function(){

    cy.downloadFile('https://commons.wikimedia.org/wiki/Commons:Wiki_Loves_Africa_2024/en#/media/File:Wiki_Loves_Africa_2024_Twitter_Post_1.png', 'mydownloads', 'example.jpg')
    

})