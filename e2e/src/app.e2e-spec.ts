import { AppPage } from './app.po';

describe('Aplicacion', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Prueba por defecto', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Inicio');
  });



});
