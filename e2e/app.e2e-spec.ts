import { GoogyappPage } from './app.po';

describe('googyapp App', () => {
  let page: GoogyappPage;

  beforeEach(() => {
    page = new GoogyappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
