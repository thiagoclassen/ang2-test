import { Ang2SeedPage } from './app.po';

describe('ang2-seed App', function() {
  let page: Ang2SeedPage;

  beforeEach(() => {
    page = new Ang2SeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
