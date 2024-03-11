import {Component, OnInit} from '@angular/core';
import {gitInfoService} from "./service/git-info.service";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  branches: any[] = [];

  constructor(private git: gitInfoService) {
  }

  ngOnInit() {
    combineLatest([this.git.getCommitInfo(), this.git.getBranchInfo()]).subscribe(([commit, res]) => {
      this.branches = res.map(br => {
        return {
          epicName: br.name.split('/')[0],
          name: br.name.split('/')[1] ? br.name.split('/')[1]: br.name,
        }
      });
      console.log(this.branches);
    })
  }
}
