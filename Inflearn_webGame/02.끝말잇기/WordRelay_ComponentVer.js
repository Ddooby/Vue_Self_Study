// Component template should contain exactly one root element.
// template 은 무조건 하나의 부모 태그에 감싸져있어야한다.
// template을 감싸는 <div></div> 추가
const WordRelayTemplate = 
`
<div>
    <div>{{word}}</div>
        <form v-on:submit="onSubmitForm">
            <input v-model="value" ref="answer">
            <button type="submit">입력</button>
        </form>
    <div>{{result}}</div>
</div>
`
// `` 의 이름은 백틱or백쿼트 라고한다.

// 표기법
// WordRelay 파스칼케이스(PascalCase)
// wordRelay 캐멀케이스(camelCase)
// word-relay 캐밥케이스(kebab-case)
const WordRelay = Vue.component('word-relay', {
    props : {
        'startWord' : String,
    },
    template : WordRelayTemplate,
    // Component 에서는 data를 함수로 만들어야한다(참조관계 때문에 그렇다-여러번사용할수있게 만들어야하므로)
    data : function() {
        return {
            word : this.startWord,
            result : '',
            value : '',
        }
    },
    methods : {
        onSubmitForm : function(e) {
            e.preventDefault();
            if ( this.word[this.word.length - 1] === this.value[0]) {
                this.result = '딩동댕';

                this.word = this.value;
                this.value = '';
                // focusing
                this.$refs.answer.focus();
            } else {
                this.result = '땡';
                this.$refs.answer.focus();
            }
        }
    },
});