import { FcPage } from './app.po';

describe('fc App', () => {
  let page: FcPage;

  beforeEach(() => {
    page = new FcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
