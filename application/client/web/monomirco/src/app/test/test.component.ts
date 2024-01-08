import { Component, OnInit, ViewChild } from '@angular/core';
import { TestService } from './test.service';





@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})

export class TestComponent implements OnInit {
    public ticket:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        severity: '',
        types: '',
    }
    public types:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }
    public severity:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }




    constructor (
        private testService: TestService,
    ) { }

    ngOnInit() {
        this.ticket.created_by = sessionStorage.getItem('email') || ''; 
        this.types.created_by = sessionStorage.getItem('email') || ''; 
        this.severity.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    Create() {
        this.testService.Create(this.ticket).subscribe((data:any) => {
            this.ticket.name = ''
 	 	this.ticket.severity = ''
 	 	this.ticket.types = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}