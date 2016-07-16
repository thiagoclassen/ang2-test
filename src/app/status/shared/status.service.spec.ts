/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { StatusService } from './status.service';

describe('Status Service', () => {
  beforeEachProviders(() => [StatusService]);

  it('should ...',
      inject([StatusService], (service: StatusService) => {
    expect(service).toBeTruthy();
  }));
});
