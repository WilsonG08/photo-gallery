import { TestBed, inject } from '@angular/core/testing';



import { PhotoService } from './photo.service';
import { Injectable } from '@angular/core';





describe('PhotoService', () => {
  let service: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
