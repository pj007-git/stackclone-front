<template>
  <div class="container mt-5">
    <Message v-if='message' :message="message" :type="messageType"/>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h3 class="mb-0">Stack Overflow Login</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="login" ref="loginForm">
              <div class="form-group">
                <label for="username" class="mb-3">Username</label>
                <input
                  type="text"
                  class="form-control input-field"
                  id="username"
                  v-model="username"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary btn-block mt-3">
                Log In
              </button>
            </form>
            <div class="text-center mt-3">
              <router-link to="/signup"
                >Don't have an account? Sign Up</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from  './Message.vue'

export default {
  components:{
    Message
  },
  data() {
    return {
      username: "",
      password: "",
      message: "",
      messageType:''
    };
  },
  methods: {
    login() {
      let self = this;
      let userData = {
        username: self.username
      };
      self.$store.dispatch('loginUser', userData).then((response) => {
        if(response.status == 200){
          self.username = ''
          self.message = response.data.message;
          self.messageType = 'success';
          self.$refs['loginForm'].reset();
        }
      }).catch((err) => {
        self.message = err.message;
        self.messageType = 'danger';
        self.$refs['loginForm'].reset();
      });
      console.log()
      // Implement your login logic here, using the 'username' and 'password' fields.
      // You can use Axios or another HTTP library for this purpose.
    },
  },
};
</script>

<style>
.input-field {
  width: 80%;
  margin: auto;
}
</style>
