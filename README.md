# react-redux-mis 仅供学习参考

------
## 开发部署
### 安装nodejs
```
  jumbo install nodejs
```
### 全局安装fis3
```
 npm install -g fis3
```
###部署运行
linux命令行执行：
```javascript
git clone https://github.com/fin-fe/react-redux-mis.git
cd  react-redex-mis
npm install
npm run dev
```
##目录结构
```javascript
.
├── fis-conf.js  //fis的配置文件
├── index.html  //入口html
├── modules  //业务模块
│   ├── actions  //redux的actions
│   ├── api //与server交互的api定义
│   ├── components //木偶组件
│   ├── constants //常量，action变量以及filter的常量
│   ├── containers //容器组件
│   ├── index.jsx //入口js
│   ├── reducers //redex 的reducers
│   ├── router  //redex 的router
│   └── store   //redex 的store
├── node_modules //通过npm安装的插件及依赖库
├── package.json //npm依赖描述 当执行 npm install时，会从这个文件获取依赖
└── static  //公共的静态资源，并且不需要模块化的
    ├── index.css
    └── mod.js  //fis3进行模块化加载的js
```


