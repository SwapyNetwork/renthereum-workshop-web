import { TestBed, inject } from '@angular/core/testing';

import { RenthereumService } from './renthereum.service';

describe('RenthereumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RenthereumService]
    });
  });

  it('should be created', inject([RenthereumService], (service: RenthereumService) => {
    expect(service).toBeTruthy();
  }));
});
