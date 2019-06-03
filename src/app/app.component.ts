import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AnalyticsProvider} from './services/analytics.service';
import 'hammerjs';
import {Facebook} from '@ionic-native/facebook/ngx';
import {GOOGLE_ANALYTICS_ID} from '../environments/environment';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public appPages = [
        {
            title: 'Today',
            url: '/today',
            icon: 'home'
        },
    ];

    constructor(private platform: Platform,
                private splashScreen: SplashScreen,
                private statusBar: StatusBar,
                public facebook: Facebook,
                public analyticsProvider: AnalyticsProvider) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            if (this.platform.is('cordova')) {
                this.statusBar.styleDefault();
                this.splashScreen.hide();
            }
        });
        this.analyticsProvider.startTrackerWithId(GOOGLE_ANALYTICS_ID);
    }
}
