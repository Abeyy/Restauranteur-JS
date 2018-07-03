<template>
  <div class="enter-users-screen">
    <h1 class="enter-user-title">Whose Splitting The Bill?</h1>

    <div class="enter-users-card card" style="width: 18rem;">
      <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
      <div class="card-body">
        <h5 class="card-title">Enter Diner Names:</h5>

        <div class="user-inputs" v-for="(user, index) in inputLength">
          <span class="user-display"> {{userList[index]}} </span>
          <input v-on:change="updateUserList($event, index)"
                 v-show="!hiddenIndex.includes(index)"
                 type="text" name="User" :key="index" placeholder="Enter User Name here">
          <!-- TODO: Turn this into  -->
          <span v-show="hiddenIndex.includes(index)"> V </span>
        </div>

        <a href="#" class="btn btn-primary">Continue</a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_amt: 0,
      inputLength: 1,
      hiddenIndex: [],
      userList: []
    }
  },
  computed: {

  },
  methods: {
    updateUserList($event, index) {
      let newUser = $event.srcElement.value

      if (this.userList[index]) {
        this.userList[index] = newUser
      } else {
        this.userList.push(newUser)
      }

      this.hiddenIndex.push(index)

      this.inputLength++

    }
  }
}
</script>

<style lang="css">
  .enter-users-screen {
    text-align: center;
    background: url('../assets/simpleCooking.jpg');
    /* TODO: Change this up.  */
    min-height: 100vh;
  }

  .enter-user-title {
    color: white;
  }

  .enter-users-card {
    margin-left: auto;
    margin-right: auto;
  }


</style>
