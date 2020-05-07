const mainComponent = Vue.component('main-component', {
    props : [],
    template : 
    `
    <div>
        <v-app id="inspire">
            <v-row>
            <v-col>
                <v-sheet height="400">
                <v-calendar
                    ref="calendar"
                    :now="today"
                    :value="today"
                    :events="events"
                    color="primary"
                    type="week"
                ></v-calendar>
                </v-sheet>
            </v-col>
            </v-row>
        </v-app>
    </div>
    `
});