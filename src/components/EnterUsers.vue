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
                 v-on:keyup.enter="updateUserList($event, index)"
                 v-show="!hiddenIndex.includes(index)"
                 type="text" name="User" :key="index" placeholder="Enter User Name here">
            <i v-show="hiddenIndex.includes(index)" class="fas fa-angle-down"
               @click="removeIndex(index)">
            </i>
        </div>

        <button v-on:click="submitUsers()"
           v-show="userList.length > 0"
          class="btn btn-success submit-user-btn"> Continue</button>
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
    something() {
      return this.$store.state.count
    }
  },
  methods: {
    updateUserList($event, index) {
      let newUser = $event.srcElement.value

      if (this.userList[index]) {
        this.userList[index] = newUser
      } else {
        this.userList.push(newUser)
        this.inputLength++
      }

      this.hiddenIndex.push(index)
    },
    removeIndex(index) {
      let indexVal = this.hiddenIndex.indexOf(index)
      if (indexVal != undefined) {
        this.hiddenIndex.splice(indexVal, 1)
      }
    },
    submitUsers() {
      this.$store.commit("updateUserList", this.userList)
      this.$store.commit("goToNextView")
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

  .arrow-container {
    position: relative;
  }

  .user-inputs {
    position: relative;
  }

  i {
    font-size: 20px;
    position: absolute;
    right: 30px;
    bottom: 3px;
  }

  .submit-user-btn {
    color: white;
    margin: 5px;
  }

</style>
