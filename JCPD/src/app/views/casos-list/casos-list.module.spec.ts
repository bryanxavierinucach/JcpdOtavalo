import { CasosModule } from './casos-list.module';

describe('CasosModule', () => {
  let casosModule: CasosModule;

  beforeEach(() => {
    casosModule = new CasosModule();
  });

  it('should create an instance', () => {
    expect(casosModule).toBeTruthy();
  });
});
