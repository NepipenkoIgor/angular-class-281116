import { AngularClass281116Page } from './app.po';

describe('angular-class-281116 App', function() {
  let page: AngularClass281116Page;

  beforeEach(() => {
    page = new AngularClass281116Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
