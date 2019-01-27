import { CasoModule } from './caso-form.module';

describe('CasosModule', () => {
  let casoModule: CasoModule;

  beforeEach(() => {
    casoModule = new CasoModule();
  });

  it('should create an instance', () => {
    expect(casoModule).toBeTruthy();
  });
});
