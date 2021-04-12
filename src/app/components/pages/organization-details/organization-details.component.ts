import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-practice-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss']
})
export class OrganizationDetailsComponent implements OnInit {
  nameMap = new Map([
    ["board", "Elnökség"],
    ["hr-team", "HR-Csapat"],
    ["marketing-team", "Marketingcsapat"],
    ["financial-team", "Pénzügyi Csapat"],
    ["pr-team", "PR-Kommandó"],
    ["professional-team", "Szakmai Bizottság"],
    ["seniors", "Seniorok"],
    ["supervisory-board", "Felügyelőbizottság"],
    ["selection-board", "Felvételi Bizottság"]
  ]);

  id = "";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.team;
  }

  getName() {
    return this.nameMap.get(this.id);
  }

  changeTeam(teamId) {
    this.id = teamId;
  }

}
