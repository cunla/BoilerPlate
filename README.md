Boilerplate app
===================

# Create environment
* Make sure you have nodejs and npm installed, check that using node version 10 or above `node -v`
* Install ionic 5 if you haven't already, run `npm -g i ionic` (this might require `sudo`)
* Check that you have the latest ionic client installed, run `ionic -v`, the version when writing this is higher than 4.6.0
* Run `npm install` to download all dependencies
* Run `ionic serve`
* Go in your browser to the address `http://localhost:8100`

# Connect to firebase
* Create a firebase project
* Go to the project settings (next to Project overview menu item)
* Under general find the webapp config which should look like
```javascript
const environment = {
    production: false,
    firebase: {
        apiKey: '...',
        authDomain: '...',
        databaseURL: '...',
        projectId: '...',
        storageBucket: '...',
        messagingSenderId: '...'
    },
};
```
** Note the app would not work if you don't set up this settings properly **

* Copy these settings to `environments/environment.ts`
* In the Authentication tab, enable authentication types you would like to enable using the app. This boiler plate supports facebook, google and email login.  

# Deploy
* Install `firebase-tools` by running `npm i -g firebase-tools` (`sudo` might be required)


# Different views and services
## `LoginPage`
## `SignupPage`
## `AboutPage`
## `AuthService`


### AppComponent
The app starts in this page, which contains also the menu with links to other pages

# Services

### AnalyticsProvider
Google Analytics provider for app
