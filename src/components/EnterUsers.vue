<template>
  <div class="enter-users-screen">
    <h1 class="enter-user-title">Whose Splitting The Bill?</h1>

    <div class="enter-users-card card" style="width: 18rem;">
      <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
      <div class="card-body">
        <h5 class="card-title">Enter Diner Names:</h5>
        <input type="text" name="User" placeholder="Enter User Name here">
        <a href="#" class="btn btn-primary">Continue</a>
        {{ user_amt }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_amt: 0
    }
  }
}
</script>

<style lang="css">
  .enter-users-screen {
    text-align: center;
    background: url('../assets/simpleCooking.jpg');
    height: 100vh;
  }

  .enter-user-title {
    color: white;
  }

  .enter-users-card {
    margin-left: auto;
    margin-right: auto;
  }


</style>
