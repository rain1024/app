## Development Kit for every developers 

Do you love html, css, js? Do you love yo, grunt, nodejs?

Do you want build desktop app, mobile app, web app?

We works hard for making a **sdk** for you.

### Features

* LocalStorage
* AngularJS, Nodewebkit

### Installation

1. Go to [git release](https://github.com/rain1024/desktop-app/releases), download the lastest version
2. Unzip
3. Install dependences

```
# install npm modules
npm install
# install bower modules
bower install
# install nodejs app dependences modules 
cd app
npm install 
```

Success! Desktop App is ready for you.

Come [API section](#api) to see how it works.

### API 

```sh
# Run Web Application 
grunt serve
```

```sh
# Build Desktop Application 
grunt buildDesktop
```

```sh
# Run Desktop Application 
grunt runDesktop
```

```sh
# Build and Run Desktop Application 
grunt desktop 
```

[what's next?](https://github.com/rain1024/desktop-app/issues?q=is%3Aissue+is%3Aopen)

### Dependences

**Core**

* AngularJS
* Node-Webkit

**Bower Modules**

* CSS/HTML : `boostrap 3`
* Javascript Utilities: `underscore`
* Angular Directive: `x-editable`

**NPM Modules**

* Builder: `grunt-node-webkit-builder`

Based on other awesome works: `yo`, `grunt`
