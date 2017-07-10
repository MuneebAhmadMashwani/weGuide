import { PrimengcliPage } from './app.po';

describe('primengcli App', () => {
  let page: PrimengcliPage;

  beforeEach(() => {
    page = new PrimengcliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
