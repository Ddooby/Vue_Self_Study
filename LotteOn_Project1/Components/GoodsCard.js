const template = 
`
<v-card
    :loading="loading"
    class="mx-auto my-4"
    max-width="374"
  >
    <v-img
      height="250"
      :src="goodsData.image"
    ></v-img>

    <v-card-title>{{goodsData.name}}</v-card-title>

    <v-card-text>
      <div class="my-2 title">
        {{goodsData.price}}
      </div>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-icon small @click="countUp">mdi-heart</v-icon>
        <div class="grey--text ml-1">{{goodsData.likeCount}}</div>
      </v-row>
      <div class="my-2 subtitle-1">
        {{goodsData.address}}
      </div>
    </v-card-text>

    <v-card-actions justify="end">
      <v-btn
        block
        color="primary"
        text
      >
        구매하기
      </v-btn>
    </v-card-actions>
  </v-card>
`;

const data = {}

const MyCard = Vue.component('my-card',{
    props:["goodsData"],
    template: template,
    data: function() {
        return data;
    },
    methods: {
        countUp: function() {
            this.goodsData.likeCount++;
        },
        purchase: function() {
            alert("No Service yet..")
        }
    }

})