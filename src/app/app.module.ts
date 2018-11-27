import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SuperTabsModule } from "ionic2-super-tabs";
import { LoginPage } from '../pages/login/login';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { MemesProvider } from '../providers/memes/memes';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
     {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    MemesProvider
  ]
})
export class AppModule {}
