import {browser, element, by } from 'protractor';
 
describe('Mi Test2', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/inicio");

    });
    //creación de prueba 1
    it("Prueba carga de noticias", ()=>{
        expect(element(by.css(".titulo")).getText()).toContain("Noticias");
    });  

});