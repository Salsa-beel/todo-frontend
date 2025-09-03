/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FriendsReqService } from './friendsReq.service';

describe('Service: FriendsReq', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FriendsReqService]
    });
  });

  it('should ...', inject([FriendsReqService], (service: FriendsReqService) => {
    expect(service).toBeTruthy();
  }));
});
