import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  allowEdit: Boolean = false;

  changesSaved: boolean = false;

  constructor(private serversService: ServersService,
  private route: ActivatedRoute,
private router: Router) { }

  ngOnInit() {

    
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);

    this.route.queryParams.subscribe(
      (queryParams: Params) => this.allowEdit = queryParams['allowEdit'] == '1'
    )

    this.route.params.subscribe(
      (params: Params) => { 
        var id: number = +params['id'];
        this.server = this.serversService.getServer(id);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;

      }
    )

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;

    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowEdit)
      return true;

      if((this.server.name !== this.serverName || this.server.status !== this.serverStatus) && this.changesSaved === false) 
        return confirm('are you sure?');
      else
        return true;
  }

}
