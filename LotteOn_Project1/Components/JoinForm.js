const JoinFormTemplate = 
`
<v-layout row class="text-xs-center bg-content">
    <v-container class="text-xs-center">
      <v-layout class="minHeightExample" row child-flex justify-center align-center wrap>
        <v-flex class="login-box" fill-height>
          <v-card class="pa-10" outlined>
            <v-card-title class="sign-title text-center">
              <h4>판매자 등록</h4>
            </v-card-title>
            <v-form>
              <v-text-field name="Id" label="Id" v-model="user.id"></v-text-field>
              <v-text-field name="Password" label="Password" type="password" v-model="user.password"></v-text-field>
              <v-text-field name="name" label="name" v-model="user.name"></v-text-field>
              <v-card-actions>
                <v-row align="center">
                  <v-col cols="12" sm="12">
                    <div class="text-center">
                      <div class="my-4">
                        <v-btn large block color="primary" @click="doSignUp">Sign Up</v-btn>
                      </div>
                      <div>
                        <v-btn primary large block>Cancel</v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
`

const signUpData = {
    user : {
        id : "",
        password : "",
        name : "",
    }
};

const JoinFormComp = Vue.component('join-form', {
    template : JoinFormTemplate,
    data : function() {
        return signUpData;
    },
    methods : {
        doSignUp : function() {
            console.log(this.signUpData.user);
            // axios.post(
            //     'http://localhost:3000/user', 
            //     this.signUpData.user
            // )
            // .then(function (response) {
            //     alert('등록성공');
            // })
            // .catch(function (error) {
            //     alert('등록실패');
            // });
        }
    }
})