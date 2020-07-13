import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);

// Vue.http.options.root = 'https://vuejs-http-395bc.firebaseio.com/data.json';
Vue.http.options.root = 'https://vuejs-http-395bc.firebaseio.com';

/**'interceptors' is an array of functions we wanna execute on each request*/

/** most of the time, you won't let your request end in this function
 * so 'next' will allow it to travel on other callback function to execute
 */
Vue.http.interceptors.push((request, next) => {
  console.log('request: ', request);
  if(request.method == 'POST') {
    request.method = 'PUT'
  }
  next(response => {
    response.json = () => { return { message: response.body } }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
