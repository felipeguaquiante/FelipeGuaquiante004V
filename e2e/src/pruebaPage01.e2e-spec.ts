import {browser, element, by } from 'protractor';
 
describe('Mi Test', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/login");

    });
    //creación de prueba 1
    it("El formulario se carga exitosamente", ()=>{
        expect(element(by.css(".label")).getText()).toContain("Email");
    });  

});
