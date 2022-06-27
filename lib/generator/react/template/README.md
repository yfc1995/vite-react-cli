# pnpm vite react react-router-dom redux eslint husky lint-staged jest antd-mobile

### 介绍

使用 vite 搭建的 react 移动端项目，UI 框架 antd-mobile，里面配置好了路有权限以及嵌套结构
使用 eslint husky lint-staged 保证代码质量，简单的配置了些别名，代理配置

### 目录

|-- vite
|-- .eslintrc.js
|-- .gitignore
|-- README.md
|-- index.html
|-- package.json
|-- pnpm-lock.yaml
|-- vite.config.js
|-- .husky
| |-- pre-commit
| |-- \_
| |-- .gitignore
| |-- husky.sh
|-- public
|-- src
| |-- App.css
| |-- App.jsx
| |-- favicon.svg
| |-- index.css
| |-- logo.svg
| |-- main.jsx
| |-- assets
| | |-- images
| |-- components
| |-- pages
| | |-- Demo
| | | |-- index.jsx
| | |-- Index
| | | |-- index.jsx
| | |-- Layout
| | | |-- index.jsx
| | |-- Login
| | | |-- index.jsx
| | |-- ReduxDemo
| | | |-- index.jsx
| | |-- RouterDemo
| | |-- detail.jsx
| | |-- index.jsx
| |-- router
| | |-- AuthProvider.jsx
| | |-- RouteWithSubRoutes.jsx
| | |-- routerConfig.js
| |-- store
| | |-- index.js
| | |-- modules
| | |-- reduxDemo.js
| |-- utils
| |-- common.js
| |-- axios
| |-- downAxios.js
| |-- request.js
| |-- until.js
|-- tests
|-- unit
|-- sum.js
|-- sum.test.js

---

###简单过程

> #### eslint
>
> ```
> pnpm install -D eslint vite-plugin-eslint
> npx eslint --init
> ```
>
> 配置 package.json
>
> ```
> "scripts": {
>    ...
>    "lint": "eslint --fix --ext .js,.jsx src",
>    ...
> }
> ```
>
> 配置 vite.config
>
> ```
> import eslintPlugin from 'vite-plugin-eslint'
> plugins: [react(), importDynamicModule(), eslintPlugin({include: ['src/**/*.js', 'src/**/*.jsx', >'src/*.js', 'src/*.jsx'], cache: false})],
> ```

---

> #### husky 和 lint-staged
>
> ```
> pnpm dlx husky-init && pnpm install
> pnpm i -D lint-staged
> ```
>
> 配置根目录下 husky 里面的 pre-commit 默认为 test 修改你想要的命令
> 例如 pnpm checkEslintCommit
> 配置 package.json
>
> ```
> "scripts": {
>    ...
>    "prepare": "husky install",
>    "checkEslintCommit": "pnpm lint:commit",
>    "lint:commit": "lint-staged",
>    ...
> }
> ```

---

> #### jest
>
> ```
> pnpm i -D jest
> ```
>
> 配置 package.json
>
> ```
> "scripts": {
>    ...
>    "test:unit": "jest"
>    ...
> }
> ```


另外 husky在mac下默认不执行 需要先执行
```
chmod 777 ./husky/pre-commit
```
