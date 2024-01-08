import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestService } from './test.service';
import { SharedService } from '../../shared/shared.service';

describe('testService', () => {
  let service: TestService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let sharedService: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ TestService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    service = TestBed.inject(TestService);
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });


  // test case gp create
  it('should send a POST request to the server', () => {
    const ticket = { 
    name: 'name 1'
    severity: 'severity 1'
    types: 'types 1'
    }
    const types = { 
    name: 'name 1'
    description: 'description 1'
    }
    const severity = { 
    name: 'name 1'
    description: 'description 1'
    }
    const jwtToken = '123Hsdf_23234fdsjk';
    
    // Make the API call
    service.GpCreate(tickettypesseverity).subscribe(response => {
      expect(response).toEqual(tickettypesseverity)
    });

    // Expect a POST request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${sharedService.WEB_API}/ticket?jwt_token=${jwtToken}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(tickettypesseverity);

    // Flush the mocked response
    req.flush(tickettypesseverity);
  });



  
});
