import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HmsPushService } from './services/hms-push.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private hmsPushService: HmsPushService
  ) {
    this.platform.ready().then(() => this.hmsPushService.registerPN());
  }
}
