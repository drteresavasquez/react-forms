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
- [Semantic-UI-React](https://react.semantic-ui.com/introduction)
- [Semantic-UI-CSS](https://www.npmjs.com/package/semantic-ui-css)
- [WebPack](https://webpack.github.io/)
- [StyleGuidist](https://react-styleguidist.js.org/)
- [JSON Server](https://github.com/typicode/json-server)
- [React-Router-DOM](https://www.npmjs.com/package/react-router-dom)

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
#### Tab 3
```
json-server --watch -p 4000 db.json
```