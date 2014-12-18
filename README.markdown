## Desktop App for All

### Features

* LocalStorage
* AngularJS, Nodewebkit

### Installation

1. Go to git release, download the lastest version
2. Unzip
3. Install dependences

```
npm install
bower install
```

Success! Desktop App is ready for you. Come [usage section](#usage) to see how it works.

### Usage

```sh
# Run Web Application 
grunt serve
```

```sh
# Build app 
grunt buildApp
```

```sh
# Run Desktop Application 
grunt runApp
```

```sh
# Build and Run Desktop Application 
grunt desktop 
```

### Changes

**Next**

* Build complete **Note** app
	* Memory: Nedb
	* Two resource `tags` and `notes`

**Done**

* Web
	* Build complete todo list app <- (vesion 1.0.0)
	* Enhance UI 
	* CRUD

**Future**

* ★★★★☆ App (Window, Linux support)
* ★★★☆☆ Mobile (UI, build support)
* ★☆☆☆☆ Complete UI Set
* ★☆☆☆☆ Dropbox, Google Drive API support 

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
