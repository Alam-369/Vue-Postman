<template>
  <div class="container">
      <br><br>
    <h1>Login</h1>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form @submit.prevent="Auth">
          <div class="form-group">
            <!-- <label>{{ user[0].email }}</label> -->
            <input
              type="email"
              class="form-control"
              id="useremail"
              v-model="user.email"
              placeholder="Enter email"
            /> 
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="Password"
              v-model="user.password"
              placeholder="Password"
            />
          </div>
         
          <button type="submit" class="btn btn-primary" @click="Auth()"> Submit </button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue ,Watch} from "vue-property-decorator";
//import HelloWorld from "../components/HelloWorld.vue"; // @ is an alias to /src
import Api from "../service/dataService";
import User from "../type/User";
//import store from "../App.vue"
//import router from "../router/index"



@Component
export default class Home extends Vue{
    $store:any;
   
    $router:any;

    get auth(){
      return { email:this.$store.state.user.email,password:this.$store.state.user.password}
    }
    
    // set aauth(auth){
    //     this.auth.email = this.$store.state.email,
    //     this.auth.password = this.$store.state.password;
    // }
    
      //password :this.$store.state.user.password,
      
    
    
    user :User={
      email : "",
      password : "",
    }
     //check: boolean = false;
      Auth() : boolean{
        let email = this.user.email;
        let password = this.user.password;
        if(email===this.auth.email && password===this.auth.password){
          console.log(true);
          this.$router.push('/');
          return true
        }
        else{
          console.log(false);
          this.$router.push('/login');
          return false;
        }
      }
     newPage(){
       //this.$router.push('/');
     }
  //  saveTutorial() {
   

  //   Api.getAll()

  //     .then((response) => {
  //       this.user = response.data;
  //       console.log(response.data);
  //       //this.submitted = true;
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

    
 
 
    
    
};
</script>
<style scoped>
</style>
