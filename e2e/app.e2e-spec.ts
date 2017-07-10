import { Uber4deliveryPage } from './app.po';

describe('uber4delivery App', () => {
  let page: Uber4deliveryPage;

  beforeEach(() => {
    page = new Uber4deliveryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
