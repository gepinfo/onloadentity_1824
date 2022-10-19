import { Component, OnInit } from '@angular/core';
import { SefscreenService } from './sefscreen.service';
// @ts-ignore
import grapesjs from 'grapesjs';
// @ts-ignore
import * as  Highcharts from 'highcharts';
// @ts-ignore
import faker from 'faker';


@Component({
  selector: 'app-sefscreen',
  templateUrl: './sefscreen.component.html',
  styleUrls: ['./sefscreen.component.scss'],
})

export class SefscreenComponent implements OnInit {
        public User = {
            created_date: '',
            created_by: '',
            last_modified_by: '',
            last_modified_date: '',
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            phonenumber: '',
            avatar: '',
            Idtoken: '',
            loggedinDate: '',
            loggedoutDate: '',
            role: '',
            org: '',
            org_country: '',
            org_sub1: '',
            org_sub2: '',
            org_sub3: '',
        }
        public homedata = {
            created_date: '',
            created_by: '',
            last_modified_by: '',
            last_modified_date: '',
            name: '',
            value: '',
        }

        public url: any = '';
        public firstName = '';
        public lastName = '';
        public Id: any;
        public Image: any;
        public changeName: any;
        public open: any;
        public close: any;

    constructor (
            private sefscreenService: SefscreenService,
    ) { }

    ngOnInit() {
            this.User.created_by = sessionStorage.getItem('email') || ''; 
            this.homedata.created_by = sessionStorage.getItem('email') || ''; 
            this.Id = sessionStorage.getItem('Id');
            this.Image = sessionStorage.getItem('Image');

            this.GpSEFAllValues();
    }
    public this.GpSEFAllValues(){
                    this.sefscreenService.GpSEF(this.Id).subscribe(data => {
                        
                                this.firstName = data.user.firstname;
 	 	
                                this.lastName = data.user.lastname;
 	 	this.homedata.name = data.homedata.name,this.homedata.value = data.homedata.value

                    });
    }
}