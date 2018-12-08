# DumpMash

### Overview

### Useage

To configure user authentication add firebase auth key and auth domain at "app.component.ts"
```
ngOnInit() {
    firebase.initializeApp({
      apiKey: "[Get appkey from firbase console]",
      authDomain: "[Get authDomain from firbase console]",
    });
  }
```
To configure database add your firbase realtime database collection path at "shared/data.storage.service.ts"
```
private firebaseBaseUrl : string = '[firbase_database_base_url]';
```
