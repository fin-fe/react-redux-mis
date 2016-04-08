fis.set('project.files', '/index.html'); // 按需编译。

// 采用 commonjs 模块化方案。
fis.hook('commonjs', {
  baseUrl: './modules',
  extList: ['.js', '.ts', '.tsx','.jsx']
});

/*fis.match('*.{ts,tsx}', {
  parser: fis.plugin('typescript'),
  rExt: '.js'
});*/

fis.match('{/modules/**.js,*.jsx,*.ts,*.tsx}', {
  //parser: fis.plugin('typescript'),
  
  // typescript 就是编译速度会很快，但是对一些 es7 的语法不支持，可以用 babel 来解决。用以下内容换掉 typescript 的parser配置就好了。
   parser: fis.plugin('babel-5.x', {
        sourceMaps: true,
       optional: ["es7.decorators", "es7.classProperties"]
   }),
  rExt: '.js'
});


// 该用 npm 方案，而不是用 fis-components
fis.unhook('components');
fis.hook('node_modules');

// 设置成是模块化 js
fis.match('/{node_modules,modules}/**.{js,ts,tsx,jsx}', {
  isMod: true
});

fis.match('::package', {
  // 本项目为纯前段项目，所以用 loader 编译器加载，
  // 如果用后端运行时框架，请不要使用。
  postpackager: fis.plugin('loader', {
    useInlineMap: true
  })
});


// 请用 fis3 release production 来启用。
fis.media('production')

  // 对 js 做 uglify 压缩。
  .match('*.{js,ts,tsx,jsx}', {
    optimizer: fis.plugin('uglify-js')
  })

  .match('::package', {

    // 更多用法请参考： https://github.com/fex-team/fis3-packager-deps-pack
    packager: fis.plugin('deps-pack', {
      'pkg/index.js': /*当有多条时，请用数组*/[
        'modules/index2.jsx',
        'modules/index2.jsx:deps', // 以及其所有依赖
      ]
    })
  })

  fis.match('*.{js,es,es6,jsx,ts,tsx}', {
        preprocessor: fis.plugin('js-require-css')
  })

fis.match('/node_modules/**.js', {
   optimizer: fis.plugin('uglify-js'),
   packTo: '/pkg/third.js'
});
fis.match('/modules/**.{js,jsx}', {
  packTo: '/pkg/app.js'
});
fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});
