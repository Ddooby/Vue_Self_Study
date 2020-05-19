<template>
    <div>
        <h1>{{result}}</h1>
        <!-- <form v-on:submit="onSubmitForm"> -->
        <form @submit="onSubmitForm">
            <input ref="answer" minlength="4" maxlength="4" v-model="value" onKeyup="this.value=this.value.replace(/[^0-9]/g,'');"/>
            <button type="submit">입력</button>
        </form>
        <div>시도 : {{tries.length}}</div>

        <ul>
            <li v-for="(t,index) in tries" v-bind:key="index">
                <!-- {{t}} -->
                <div>{{t.try}}</div>
                <div>{{t.result}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
const getNumbers = () => {
    const candidates = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for( let i = 0; i < 4; i+=1 ) {
        const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
};

export default { // = Vue.component('word-relay', 
    data() {
        return {
            answer:getNumbers(),    // 정답 숫자 ex) [1,4,3,6]
            tries:[],               // 시도수 
            value: '',              // 입력값
            result: '',             // 결과
        }
    },
    // data : function() {
    //     return {
    //         value: '',
    //         result: '',
    //     }
    // },
    methods: {
        onSubmitForm(e) {
            console.log(e);
            
            // submit 일때, 쓰는데 생략하고 @submit 부분에 
            // @:submit.prevent 라고 써줘도 됨.(preventDefault가 자동 적용됨)
            e.preventDefault(); 

            if ( this.value === this.answer.join('')) {
                this.tries.push({
                    try     : this.value,
                    result  : '홈런',
                });

                this.result ='홈런';
                alert('정답입니다.\n게임을 다시 실행합니다.');

                // 초기화
                this.value  ='';
                this.answer = getNumbers();
                this.tries  =[];
                this.$refs.answer.focus();

            } else {
                // 정답 틀렸을 때
                if ( this.tries.length > 9 ) {
                // 10번째 시도    
                    this.result = `10번 넘게 틀려서 실패! 답은 ${this.answer.join(',')}였습니다.`;
                    alert('게임을 다시 시작합니다.');
                    
                    // 초기화
                    this.value = '';
                    this.answer = getNumbers();
                    this.tries = [];
                    this.$refs.answer.focus();
                }

                let strike  = 0;
                let ball    = 0;

                // 문자배열을 숫자배열로 바꾸는 코드
                const answerArray = this.value.split('').map(v => parseInt(v));

                for (let i = 0; i < 4; i++ ) {
                    if ( answerArray[i] === this.answer[i]) {
                    // 숫자, 자릿수 모두 정답
                        strike++;
                    } else if ( this.answer.includes(answerArray[i])) {
                    // 숫자만 정답
                        ball++;
                    }
                }
                this.tries.push({
                    try : this.value,
                    result: `${strike} 스트라이크, ${ball} 볼 입니다.`,
                });
                this.value='';
                this.$refs.answer.focus();
            }

            // this.tries.push(this.value);
            // this.tries.push({
            //     try : this.value,
            //     result : '홈런',
            // });
            // this.value='';
            // this.$refs.answer.focus();
        }
    } 
}
</script>
<style scoped>

</style>