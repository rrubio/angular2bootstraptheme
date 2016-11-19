import { SimpleTemplatePage } from './app.po';

describe('simple-template App', function() {
  let page: SimpleTemplatePage;

  beforeEach(() => {
    page = new SimpleTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
