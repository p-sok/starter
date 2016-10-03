# starter

starter with webpack, npm, babel, autoprefixer, sass, bootstrap


## Requirement

### node.js/npm
Installation: <br />
    - https://nodejs.org/en/download/ <br />
    - npm install npm -g (to get the latest version)

Check version:<br />
    - npm -v (The version should be higher than 2.1.8)

### webpack
Installation:<br />
    - npm install webpack --save-dev <br />
    - npm install webpack-dev-server --save-dev

### Directories tree

```

|_ babel.rc                 // Babel configuration
|_ package.json             // Node configuration
|_ webpack.config.js        // Webpack configuration
|_ dist                     // Compiled bundles (css + js) for prod environment
|_ scripts                  // Javascript files
|_ images                   // Images
|_ styles                   // SCSS files

```

## Usage

```

npm install                  // Install node module packages
npm start                    // Start watcher
npm run build                // Compile files in production mode

```
