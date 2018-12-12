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

To configure google maps add google map api key index.html and app.module.ts

```
<script src="https://maps.googleapis.com/maps/api/js?key=[GOOGLE MAP API KEY]"></script>
```
```
AgmCoreModule.forRoot({
      apiKey: "[GOOGLE MAP API KEY]",
      libraries: ["places"]
    })
```

