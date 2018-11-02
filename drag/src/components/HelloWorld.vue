<template>
  <div class="wrapper">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
    <div class="item6">6</div>
    <div class="item7">7</div>
    <div class="item8">8</div>
    <div class="item9">9</div>
  </div>
</template>

<script>
import interact from 'interactjs'
export default {
  name: 'HelloWorld',
  mounted () {
    interact('.item1').on('dragstart dragmove dragend', function (event) {
      console.log(1)
    })
  }
}
</script>

<style>
  .wrapper {
    width: 1000px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 100px);
    grid-gap: 13px;
  }
  .wrapper div {
    background-color: #8ef4a6
  }

  .item1 {
    grid-column: span 2;
    grid-row: span 2;
  }
</style>
