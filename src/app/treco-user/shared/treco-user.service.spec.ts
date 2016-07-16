/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TrecoUserService } from './treco-user.service';

describe('TrecoUser Service', () => {
  beforeEachProviders(() => [TrecoUserService]);

  it('should ...',
      inject([TrecoUserService], (service: TrecoUserService) => {
    expect(service).toBeTruthy();
  }));
});
