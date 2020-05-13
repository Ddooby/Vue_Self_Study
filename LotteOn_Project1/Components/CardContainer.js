const CardContainerTemplate =
    `
<div>
    <!-- <Carousels/> -->
    <slot name="carousels">
    </slot>

    <v-container>
      <h3 class="title content-title">최근 등록 상품</h3>
      
      <v-row no-gutters>
        <template v-for="goods in goodsDatas">
            <v-col
            cols="12"
            sm="4"
            >
                <my-card :goods-data="goods"></my-card>
            </v-col>
        </template>
        </v-row>
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="12"
        >
          <div class="text-center more-view">
            <v-btn outlined color="primary" >더보기</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-card-text style="height: 100px; position: fixed; bottom: 0; right: 10px;">
        <v-btn
          absolute
          dark
          fab
          top
          right
          color="deep-purple"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-text>
    </v-container>
</div>
`

const CardContainer = Vue.component('card-container', {
    props : {
        goodsDatas : Array,
    },
    template : CardContainerTemplate,
    components : {
        // MyCard,
    }
})