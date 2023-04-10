import { createStore } from 'vuex'
// import axios from 'axios';
import { LOADING_SPINNER_SHOW_MUTATION } from './storeconstants';

const store = createStore({

    // -----------------------In state we can store data-------------------
    state: {
       
    },


// --------------This part is for loading spinner--------------
    state() {
        return {
            showLoading: false,
        };
    },

//    ----------------------Mutations in which we can set data---------------------------
    mutations:{
   

        // -----------------SET DATA OF LOADING-------------------------------

        [LOADING_SPINNER_SHOW_MUTATION](state, payload) {
            state.showLoading = payload;
        },
    },


// ------------------------In action we can get api----------------------
    actions:{
       
},


})
export default store