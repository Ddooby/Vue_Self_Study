// main.js 가 제일 중요한 파일이다. 그래서 main.js 파일을 중심으로 다른 파일들을 다 연결한다. 

// Vue 설치한 것을 가져오는 것(최신문법)
import Vue from 'vue';
import NumberBaseball from './NumberBaseball';

// Vue 인스턴스 생성
new Vue(NumberBaseball).$mount('#root');