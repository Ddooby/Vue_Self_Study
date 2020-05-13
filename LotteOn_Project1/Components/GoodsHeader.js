const GoodsHeaderTemplate = 
`
    <v-app-bar
      app
      color="grey lighten-5"
    >
      <v-toolbar-title color="deep-purple" @click="routeMain">나비마켓</v-toolbar-title>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-text-field
        hide-details
        prepend-icon="ID"
        color="primary"
        single-line
      ></v-text-field>
      <v-text-field
        hide-details
        prepend-icon="PW"
        color="primary"
        single-line
      ></v-text-field>
      <v-btn text @click="routeLogin">
        Login
      </v-btn>
      <v-btn text @click="routeJoin">
        Join
      </v-btn>

      <v-btn text>
        <v-icon>mdi-basket-outline</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon @click="routeRegistration">mdi-account-outline</v-icon>
      </v-btn>
    </v-app-bar>
`

const GoodsHeader = Vue.component('goods-header', {
    template : GoodsHeaderTemplate,
    methods: {
        routeRegistration : function() {
            this.$emit('route-page',['RegistrationPage']);
        },
        routeMain : function() {
            this.$emit('route-page',['MainPage']);
        },
        routeLogin : function() {
            this.$emit('route-page',['LoginPage']);
        },
        routeJoin : function() {
            this.$emit('route-page',['JoinPage']);
        }
    },
})