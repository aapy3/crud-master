import { Component } from '@angular/core';
import { ModalService } from './modal.service';
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl, FormControl } from '@angular/forms';
import { CommonValidator } from './common-validator'
import { CommonServiceService } from './common-service.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './jw-modal/jw-modal.component.scss']
})
export class AppComponent {
  title = 'crud-master';
  public registerForm: FormGroup;
  searchProperty = new FormControl();
  searchPropertyValue = new FormControl();
  column: any;
  isDesc: boolean = false;
  employeeList: any = [];
  // employeeList: Observable<any[]>;
  currentEmployeeData: any;
  selectedIndex: any = -1;
  skip: any = 0;
  limit: any = 5;
  maxDate = new Date().getFullYear() + '-' + Number(new Date().getMonth()) + 1 + '-' + new Date().getDate();
  employeePaginationList: any = [];
  constructor(private modalService: ModalService, private fb: FormBuilder, private commonService: CommonServiceService) {
    this.registerForm = fb.group({
      'id': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(20)])],
      'first_name': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9_-]*$/)])],
      'last_name': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9_-]*$/)])],
      'job_title': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': ['', Validators.compose([Validators.required, CommonValidator.email])],
      'phone_no': ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
      'region_name': ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z0-9_-]*$/)])],
      // 'dob': ['',Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9_-]*$/)])],
      'dob': ['',Validators.compose([Validators.required])]
    });


    // this.employeeList = this.searchPropertyValue.valueChanges
    //   .pipe(
    //     map(emp => emp ? this._filterEmployee(emp) : this.employeeList.slice())
    //   );
  }

  ngOnInit() {
    this.getEmployee();
    this.searchProperty.setValue('preferredFullName');
  }

  getEmployee() {


    if (localStorage.getItem('employeeList')) {
      this.employeeList = JSON.parse(localStorage.getItem('employeeList'));
    }
    else {
      this.commonService.getEmployee().subscribe(
        (response: any) => {
          if (response) {
            this.employeeList = response;
            localStorage.setItem('employeeList', JSON.stringify(this.employeeList))
          }
        }, error => {
          console.log(error)
        });
    }
    // this.employeePaginationList = this.employeeList;
    this.pagination();
  }


  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id);
    this.currentEmployeeData = undefined;
    this.selectedIndex = -1;
    this.getEmployee();
    if (id = "create-edit") {
      this.resetForm(this.registerForm);
    }
  }

  viewEmployee(data, index) {
    this.currentEmployeeData = data;
    this.selectedIndex = index;
    this.openModal('view');
  }

  deleteEmployee(data, index) {
    this.currentEmployeeData = data;
    this.selectedIndex = index;
    this.openModal('delete');
  }

  editEmployee(data, index) {
    this.currentEmployeeData = data;
    this.selectedIndex = index;
    this.openModal('create-edit');
    this.setFormValue();
  }

  createEmployee(id){
    this.currentEmployeeData = undefined;
    this.resetForm(this.registerForm);
    this.openModal(id);
  }

  setFormValue() {
    this.registerForm.controls.first_name.setValue(this.currentEmployeeData.firstName);
    this.registerForm.controls.last_name.setValue(this.currentEmployeeData.lastName);
    this.registerForm.controls.email.setValue(this.currentEmployeeData.emailAddress);
    this.registerForm.controls.id.setValue(this.currentEmployeeData.employeeCode);
    this.registerForm.controls.phone_no.setValue(this.currentEmployeeData.phoneNumber);
    this.registerForm.controls.job_title.setValue(this.currentEmployeeData.jobTitleName);
    this.registerForm.controls.region_name.setValue(this.currentEmployeeData.region);
    let dob = new Date(this.currentEmployeeData.dob).getFullYear() + '-' + Number(new Date(this.currentEmployeeData.dob).getMonth()) + 1 + '-' + new Date(this.currentEmployeeData.dob).getDate();
    this.registerForm.controls.dob.setValue(dob);
  }

  resetForm(form: FormGroup) {

    form.reset();

    // Object.keys(form.controls).forEach(key => {
    //   form.get(key).setErrors(null) ;
    // });
  }


  _keyPressAlphaNumber(event: any) {
    const pattern = /^[0-9 ]*$/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
    // let x = event.which || event.keycode;
    // if ((x >= 48 && x <= 57) || x == 8 || (x >= 35 && x <= 40) || x == 46) {
    //     return true;
    // }
    // else {
    //     event.preventDefault();
    //     return false;
    // }
  }

  onSubmit(formValue) {
    const payload = {
      "jobTitleName": formValue.job_title,
      "firstName": formValue.first_name,
      "lastName": formValue.last_name,
      "preferredFullName": formValue.first_name + ' ' + formValue.last_name,
      "employeeCode": formValue.id,
      "region": formValue.region_name,
      // "dob": '30/11/1995',
      "dob": new Date(formValue.dob).getFullYear() + '-' + Number(new Date(formValue.dob).getMonth()) + 1 + '-' + new Date(formValue.dob).getDate(),
      "phoneNumber": formValue.phone_no,
      "emailAddress": formValue.email
    }
    // if(this.currentEmployeeData){
    //   payload['id'] = this.currentEmployeeData.id
    // }
    // this.commonService.registerUser(payload).subscribe(
    //   (response: any) => {
    //     console.log(response);
    //      if(response) { 
    //      }
    //     }, error => {
    //       console.log(error)
    //     });


    if (this.currentEmployeeData && this.selectedIndex != -1) {
      this.employeeList[this.selectedIndex] = payload;
    }
    else {
      this.employeeList.push(payload);
    }
    localStorage.setItem('employeeList', JSON.stringify(this.employeeList));
    this.closeModal('create-edit');
  }

  delete() {
    // const payload = {
    //   'id': this.currentEmployeeData.id
    // }
    // this.commonService.deleteUser(payload).subscribe(
    //   (response: any) => {
    //     console.log(response);
    //      if(response) { 
    //      }
    //     }, error => {
    //       console.log(error)
    //     });
    if (this.currentEmployeeData && this.selectedIndex != -1) {
      this.employeeList.splice(this.selectedIndex, 1)
      localStorage.setItem('employeeList', JSON.stringify(this.employeeList));
      this.closeModal('delete');
    }
  }

  sortByColoumn(property) {
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    let direction = this.isDesc ? 1 : -1;


    this.employeePaginationList.sort(function (a, b) {

      if (property == 'preferredFullName' || property == 'emailAddress') {
        if (a[property].toLowerCase() < b[property].toLowerCase()) {
          return -1 * direction;
        }
        else if (a[property].toLowerCase() > b[property].toLowerCase()) {
          return 1 * direction;
        }
        else {
          return 0;
        }
      }
      else {
        if (a[property] < b[property]) {
          return -1 * direction;
        }
        else if (a[property] > b[property]) {
          return 1 * direction;
        }
        else {
          return 0;
        }
      }
    });
  };

  onChangeProperty() {
    this.skip = 0;
    this.searchPropertyValue.reset();
    this.pagination();
  }

  private _filterEmployee(value): [] {
    const filterValue = value.toLowerCase();
    return this.employeeList.filter(employee => employee[this.searchProperty.value].toLowerCase().indexOf(filterValue) === 0);
  }

  pagination() {
    // this.skip += this.limit;
    if(this.skip >= 0 && this.skip <= this.employeeList.length - 1){
      let paginatedArray = this.employeeList.slice(this.skip, this.limit + this.skip);
      this.employeePaginationList = paginatedArray;      
    }
  }

  setSkip(flag){
    this.onChangeProperty();
    if(this.limit < this.employeeList.length){
      if(flag){
        this.skip += this.limit;
        if(this.skip > this.employeeList.length - 1){
          this.skip = this.employeeList.length - 1 ;
        }
      }
      else{
        this.skip -= this.limit;
        if(this.skip < 0){
          this.skip = 0;
        }
      }
      this.pagination();
    }
  }

  searchEmployee() {
    let tmp = []
    if (this.searchPropertyValue.value && this.searchPropertyValue.value.length > 2) {
      this.employeeList.forEach(element => {
        if (element[this.searchProperty.value].toLowerCase().indexOf(this.searchPropertyValue.value.toLowerCase()) != -1) {
          tmp.push(element)
        }
      });
      this.employeePaginationList = tmp;
    }
    else{
      this.pagination();
    }    
  }
}



