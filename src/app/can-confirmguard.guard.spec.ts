import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { canConfirmguardGuard } from './can-confirmguard.guard';

describe('canConfirmguardGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canConfirmguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
