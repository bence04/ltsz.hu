import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  nameMap = new Map([
    ["liskonferencia", "LisKonferencia"],
    ["liska-est", "LiskaEst"],
    ["bevonotaborok", "Bevonótáborok"],
    ["liska-tibor-szakmai-napok", "Liska Tibor Szakmai Napok"],
    ["liskaland", "LisKaland"]
  ]);

  id = "";

  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.project;
  }

  getName() {
    return this.nameMap.get(this.id);
  }

  changeProject() {
    console.log(this.nameMap.entries().next().value); // todo generate new site for every project
    // this.id = projectId;
  }

}
