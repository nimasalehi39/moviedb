import { NimadbPage } from './app.po';

describe('nimadb App', function() {
  let page: NimadbPage;

  beforeEach(() => {
    page = new NimadbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
