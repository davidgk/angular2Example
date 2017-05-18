import { MiNuevoProyectoAngular2Page } from './app.po';

describe('mi-nuevo-proyecto-angular2 App', () => {
  let page: MiNuevoProyectoAngular2Page;

  beforeEach(() => {
    page = new MiNuevoProyectoAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
