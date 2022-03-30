import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormImages } from 'src/app/model/image.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  formImage: FormImages[];
  auxFormImage: FormGroup;
  categorys: string[] = ['science','education','people','feelings','computer','building'];
  searchValidator:boolean = false;
  tags:any[] = [];
  constructor(private services: ServiceService,
              private formBuilder: FormBuilder) { 
                this.formImages()
              }

  ngOnInit(): void {
  }
  formImages() {
    this.auxFormImage = this.formBuilder.group({
      tags: [''],
      filter: ['']
    })
  }

  search() {
    let tags = this.auxFormImage.controls['tags'].value.slice(0,100);
    const category = this.auxFormImage.controls['filter'].value;
    let vecTags = tags.split(' ');
    tags = vecTags.join('+')
    this.services.getInfo(tags,category)
    .subscribe(
      (data) => {
        this.formImage = data;
        this.searchValidator = true;
        console.log(this.formImage)
      })
  }

}
