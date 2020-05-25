const VueLoderPlugin = require('vue-loader/lib/plugin');
// path는 Node 가 만들어준 Script
const path = require('path');

// Node 의 모듈
module.exports = {
    // webpacking
    entry: {
        // webpack으로 Script들을 하나로 합쳐줄 메인 Script 파일
        // app 은 하나로 합쳐질 하나의 파일 이름
        //app: './main.js',
        app: path.join(__dirname, 'main.js'),
    },
    // ★ : webpack의 핵심
    module: {
        // Script 파일들을 합칠때 어떻게 합칠건지, 어떻게 처리할건지를 rules안에 정의한다.
        rules: [{
            // /\.vue$/, : .vue로 끝나는 파일
            test: /\.vue$/,
            loader: 'vue-loader',   // npm install vue-loader -D
        }],
    },
    plugins: [
        new VueLoderPlugin(),
    ],
    // entry 로 Script 파일들을 하나로 모으고 output의 filename으로 쓴다.
    output: {
        filename: '[name].js', // = app.js
        // 절대경로를 써줘야한다. Node가 제공하는 메소드 사용하면 편하다.
        // __dirname : 현재경로
        //path: './dist',
        path: path.join(__dirname, 'dist'),
    },

    // 기타
    mode: 'development',
    devtool: 'eval',    // eval 로 설정하면 webpack이 build 하는 속도가 빨라진다.
    resolve: {
        extensions: ['.js', '.vue'],
    }
};