import { PharmaShopAppPage } from './app.po';

describe('pharma-shop-app App', () => {
  let page: PharmaShopAppPage;

  beforeEach(() => {
    page = new PharmaShopAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
