const RegistFormTemplate = 
`
<v-container data-app>
    <h3 class="title content-title">상품 등록 편집</h3>
    <div class="my-10">
      <v-row no-gutters>
        <v-col
          cols="4"
          sm="4"
        >
          <v-list-item-avatar
            tile
            size="300"
            color="grey lighten-1"
            class="my-10"
          >
            <v-img
              height="250"
              :src="goodsData.image"
            ></v-img>
          </v-list-item-avatar>

          <input type="file" accept="image/*" @change="uploadImage"/>
        </v-col>
        <v-col
          cols="8"
          sm="8"
        >
          <v-form class="pa-4">
            <v-text-field v-model="goodsData.name" name="상품명" label="상품명"></v-text-field>
            <!--
              TODO: v-model 은 아래와 같은 syntax 이다.
              <v-text-field v-bind="goodsData.name" @="name.target">
            -->
            <v-text-field v-model="goodsData.address" name="위치" label="위치"></v-text-field>
            <v-text-field v-model="goodsData.price" name="가격" label="가격"></v-text-field>
            <v-radio-group v-model="goodsData.isPurchase" row>
              <v-radio label="판매중" value="showing"></v-radio>
              <v-radio label="판매완료" value="complete"></v-radio>
            </v-radio-group>
            <v-select
              :items="categories"
              label="카테고리"
              v-model="goodsData.category"
            ></v-select>
          </v-form>
        </v-col>
        <v-col
          cols="12"
          sm="12"
        >
          <v-textarea
            counter
            v-model="goodsData.description"
            name="상품설명"
            label="상품설명"
            :rules="rules"
            :value="value"
          ></v-textarea>
        </v-col>
        <v-col
          cols="12"
          sm="12"
        >
          <div class="text-center">
            <v-btn
              large
              color="primary"
              class="mx-2"
              dark
              @click="submit"
            >
              등록
            </v-btn>
            <v-btn
              large
              class="mx-2"
            >
              취소
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- <h1>{{goodsData}}</h1> -->
  </v-container>
`

const datas = {
    goodsData : {      
      name : '',
      address : '',
      price : '',
      likeCount : 0,
      isPurchase : '',
      category : '',
      description : '',
      image : '',
    },
    categories: ['패션잡화', '여성의류', '남성의류', '디지털/가전', '도서/티켓/취미/애완', '유아동/출산', '생활/문구/가구/식품'],
}

const RegistForm = Vue.component('regist-form', {
    template: RegistFormTemplate,
    data: function() {
        return datas;
    },
    methods : {
      uploadImage : function(event) {
        let fileList = event.target.files;
        let file = fileList[0];

        convertBase64(file)
        .then((data) => {
          //
          this.goodsData.image = data;
        })
      },
      submit : function() {
        console.log(getInstance(this.goodsData.name, this.goodsData.price, this.goodsData.address, this.goodsData.likeCount, this.goodsData.isPurchase, this.goodsData.category, this.goodsData.description, this.goodsData.image));

        // axios.post(
        //     'http://localhost:3000/goods', 
        //     getInstance(this.goodsData.name, this.goodsData.price, this.goodsData.address, this.goodsData.likeCount, this.goodsData.isPurchase, this.goodsData.category, this.goodsData.description, this.goodsData.image)
        // )
        // .then(function (response) {
        //     alert('등록성공');
        // })
        // .catch(function (error) {
        //     alert('등록실패');
        // });
      }
    }
});

const convertBase64 = function(image) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onload = (event) => {
      resolve(event.target.result);
    };

    reader.onerror = (event) => {
      reject(event);
    };
  })
}