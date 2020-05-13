const CarouselsTemplate = 
`
<v-card
    max-width="100%"
    class="mx-auto main-banner"
  >
    <v-system-bar lights-out></v-system-bar>
    <v-carousel
      cycle
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="350"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">
              {{ slide }}
              <v-list class="hot-search-list">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="title">인기 검색어</v-list-item-title>
                    <v-list-item-subtitle class="order-item">1. 아이패드</v-list-item-subtitle>
                    <v-list-item-subtitle class="order-item">2. 아이폰</v-list-item-subtitle>
                    <v-list-item-subtitle class="order-item">3. 에어팟</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
`

const Carousels = Vue.component('carousels', {
    template : CarouselsTemplate,
    data () {
        return {
          colors: [
            'deep-purple',
            'indigo darken-2'
          ],
          cycle: false,
          slides: [
            '중고 직거래마켓 나비마켓',
            '중고 직거래마켓 나비마켓'
          ]
        }
    },
})