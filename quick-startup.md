# Quick Setup
```
git clone https://github.com/drteresavasquez/react-forms.git
cd react-forms
```
## Open In Visual Studio Code
```
code .
```
## Install Dependencies
```
npm i
```
### Dependencies Used In This Project
- Semantic-UI-React
- Semantic-UI-CSS
- WebPack
- StyleGuidist

## Start Your Servers in new terminal tabs
Note: You can [npm i concurrently](https://www.npmjs.com/package/concurrently) and set up your app to take one command to start all servers.
### Tab 1
```
npx styleguidist server
```
### Tab 2
```
npm start
```
### Tab 3
```
json-server --watch -p 4000 db.json
```
