const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports={
    entry:path.join(__dirname,"./src/main.js"),
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js"
    },
    devServer:{
        /*--open --port 3000 --contentBase src --hot*/
        open:true,
        port:3000,
        hot:true,
        host:'192.168.1.160'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,"./src/index.html"),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|bmp|png|jpeg|gif)$/,use:['url-loader?limit=24857&name=[hash:8]-[name].[ext]']},
            { test:/\.(eot|ttf|woff|woff2|svg)$/, loader: 'url-loader'},
            { test:/\.js$/, loader: 'babel-loader',exclude:/node_modules/},
            { test:/\.vue$/, loader: 'vue-loader'}
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.js'
        }
    }
}