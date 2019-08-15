import { TestBed } from '@angular/core/testing';

import { DummyContactService } from './dummy-contact.service';

describe('DummyContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DummyContactService = TestBed.get(DummyContactService);
    expect(service).toBeTruthy();
  });
});
