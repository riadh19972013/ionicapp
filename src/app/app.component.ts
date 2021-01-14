import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomePage } from './home/home.page';
import { AboutusPage } from './aboutus/aboutus.page';
import { NewsPage } from './news/news.page';
import { MoviesPage } from './movies/movies.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    
   
    {
      
        title: 'Home',component: HomePage,
        icon: 'heart', url:'home'
        
      },
      {
      
        title: 'Check the last news',component: NewsPage,
        icon: 'globe', url:'news'
        
      },
      {
      
        title: 'Entertainment field',component: MoviesPage,
        icon: 'videocam', url:'movies'
        
      },

      {
        title: 'AboutMe',component: AboutusPage,
        icon: 'person',url:'aboutus'
        
      },

    
  ];
 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('home/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
