[![ice](https://img.shields.io/badge/developing%20with-ICE-2077ff.svg)](https://github.com/alibaba/ice)

# Use-iceWorks

iceworks-desktop编译之后的源代码。

```json
{
  "name": "iceworks-desktop",
  "productName": "Iceworks",
  "private": true,
  "description": "ICE Desktop Application.",
  "version": "1.0.0",
  "author": {
    "name": "Alibaba Group Holding Limited",
    "email": "ice-admin@alibaba-inc.com",
    "url": "http://alibaba.github.io/ice"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/alibaba/ice"
  },
  "main": "./main/index.js",
  "scripts": {
    "start": "electron ./main/index.js",
    "package:linux32": "electron-packager ./ Iceworks --platform=linux --arch=ia32 ~/Desktop/Iceworks --version 0.30.2 --overwrite --icon=./static/touchbar/logo.png",
    "package:linux64": "electron-packager ./ Iceworks --platform=linux --arch=x64 ~/Desktop/Iceworks --version 0.30.2 --overwrite --icon=./static/touchbar/logo.png",
    "package:mac": "electron-packager ./ Iceworks --platform=darwin --arch=x64 ~/Desktop/Iceworks --version 0.30.2 --overwrite --icon=./static/touchbar/logo.png",
    "package:win32": "electron-packager ./ Iceworks --platform=win32 --arch=ia32 ~/Desktop/Iceworks --version 0.30.2 --overwrite --icon=./static/touchbar/logo.png",
    "package:win64": "electron-packager ./ Iceworks --platform=win32 --out=./dist --arch=x64 ~/Desktop/Iceworks --version 0.30.2 --overwrite --icon=./static/touchbar/logo.png"
  },
  "dependencies": {
    "electron": "~1.7.8",
    "app-path": "^2.2.0",
    "app-root-path": "^2.0.1",
    "axios": "^0.17.1",
    "co": "^4.6.0",
    "debug": "^3.1.0",
    "detect-port": "^1.2.2",
    "ejs": "^2.5.7",
    "electron-is": "^2.4.0",
    "electron-log": "^2.2.13",
    "electron-settings": "^3.1.4",
    "electron-store": "^1.3.0",
    "electron-updater": "^2.20.1",
    "fix-path": "^2.1.0",
    "gitconfiglocal": "^2.0.1",
    "kebab-case": "^1.0.0",
    "macaddress": "^0.2.8",
    "menubar": "^5.2.3",
    "mkdirp": "^0.5.1",
    "node-ipc": "^9.1.1",
    "npm": "^5.6.0",
    "npm-run-path": "^2.0.2",
    "path-exists": "^3.0.0",
    "prettier": "^1.10.2",
    "ramda": "^0.25.0",
    "request": "^2.83.0",
    "rimraf": "^2.6.2",
    "tar": "^2.0.0",
    "tree-kill": "^1.2.0",
    "update-notifier": "^2.3.0",
    "uppercamelcase": "^3.0.0",
    "uuid": "^3.1.0"
  }
}
```

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# if your system is window,you need to install these two packages first
npm install electron -g
npm install electron-packager -g

# Clone this repository
git clone -b desktop https://github.com/mowatermelon/Use-iceWorks.git
# Go into the repository
cd Use-iceWorks
# Install dependencies
cnpm i
# Run the app iceworks ipc started at 8000
npm run start
# package win32 application
npm run package:win32
# package win64 application
npm run package:win64
# package linux32 application
npm run package:linux32
# package linux64 application
npm run package:linux64
# package mac application
npm run package:mac
```