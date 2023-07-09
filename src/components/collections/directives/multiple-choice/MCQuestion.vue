<template>
  <div class="mc-question-header">
    <div class="header-icon">
      <font-awesome-icon icon="fa-regular fa-file-lines" />
    </div>
    <div class="header-text">Exercise</div>
  </div>
  <div class="mc-question-content"><slot /></div>
</template>

<style>
.mc-question-header {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: rgb(225, 225, 232);
}
.header-icon {
  padding-right: 10px;
}
.mc-question-content {
  padding: 10px 15px;
  background-color: rgb(255, 255, 255);
}
</style>
