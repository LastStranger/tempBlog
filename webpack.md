#### Webpack
### 关于tree shaking
```js
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}
```
1. webpack默认会将两个function都打包进去即使你只用到了其中一个,但是为什么平时没有发现没使用的function被打包进去, 因为webpack设置了"mode=production"  
```js
// webpack.production.config.js
module.exports = {
+  mode: 'production',
- performance: {
-   hints: 'warning'
- },
- output: {
-   pathinfo: false
- },
- optimization: {
-   namedModules: false,
-   namedChunks: false,
-   nodeEnv: 'production',
-   flagIncludedChunks: true,
-   occurrenceOrder: true,
-   sideEffects: true,
-   usedExports: true, // 目测就是这两行帮我们进行了tree shaking
-   concatenateModules: true,
-   splitChunks: {
-     hidePathInfo: true,
-     minSize: 30000,
-     maxAsyncRequests: 5,
-     maxInitialRequests: 3,
-   },
-   noEmitOnErrors: true,
-   checkWasmTypes: true,
-   minimize: true,
- },
- plugins: [
-   new TerserPlugin(/* ... */),
-   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
-   new webpack.optimize.ModuleConcatenationPlugin(),
-   new webpack.NoEmitOnErrorsPlugin()
- ]
}
```
[Thanks to the usage of the optimization.usedExports and the unused option of the UglifyJsPlugin, unnecessary code was removed. Please note, that it is a default behavior in the UglifyJsPlugin, so using it with default configuration will also remove dead code (aside from running many other compressing processes).](https://wanago.io/2018/08/13/webpack-4-course-part-seven-decreasing-the-bundle-size-with-tree-shaking/)

```js
"presets": [
    [
      "@babel/preset-react"
    ],
    [
      "@babel/preset-env",{"modules": "cjs"}
    ]
  ],
  ```
  2. 设置modules等于cjs将不会进行树摇优化,如果不设置modules,默认是auto,会进行树摇优化,如果设置为false也会进行树摇优化
