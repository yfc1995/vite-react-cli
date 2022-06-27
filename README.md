# pnpm vite react react-router-dom redux eslint husky lint-staged jest antd-mobile

### 介绍
 pnpm vite react 脚手架


### 简单过程

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
