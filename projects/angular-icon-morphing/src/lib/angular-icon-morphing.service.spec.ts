import { TestBed } from '@angular/core/testing';

import { AngularIconMorphingService } from './angular-icon-morphing.service';

describe('AngularIconMorphingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularIconMorphingService = TestBed.get(AngularIconMorphingService);
    expect(service).toBeTruthy();
  });
});
