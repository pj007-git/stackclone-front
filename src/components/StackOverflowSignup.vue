<template>
  <div class="container mt-5">
    <Message v-if='message' :message="message" :type="messageType"/>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h3 class="mb-0">Stack Overflow Sign Up</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="signUp" ref="registerForm">
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
              <button type="submit" class="btn btn-primary btn-block mt-3">Sign Up</button>
            </form>
            <div class="text-center mt-3">
              <router-link to="/">Already have an account?</router-link>
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
    signUp() {
      let self = this;
      let userDate = {
        username : self.username
      }
      self.$store.dispatch('registerUser',userDate).then((result) => {
        if(result.status == 200){
          self.username = ''
          self.message = result.data.message;
          self.messageType = 'success';
          self.$refs['registerForm'].reset();
        }
      }).catch((err) => {
        self.message = err.message;
        self.messageType = 'danger';
        self.$refs['registerForm'].reset();
      });
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