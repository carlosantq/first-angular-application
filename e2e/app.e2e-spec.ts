import { ImdMinicursoPage } from './app.po';

describe('imd-minicurso App', () => {
  let page: ImdMinicursoPage;

  beforeEach(() => {
    page = new ImdMinicursoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
