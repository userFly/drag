<template>
  <div class="wrapper">
    <div id="drag-1" class="draggable">
      <p> You can drag one element </p>
    </div>
    <div id="drag-2" class="draggable">
      <p> with each pointer </p>
    </div>
  </div>
</template>

<script>
import interact from 'interactjs'

export default {
  name: 'Interact',
  mounted () {
    interact('.draggable')
      .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        restrict: {
          restriction: 'self',
          endOnly: true,
          elementRect: {top: 0, left: 0, bottom: 1, right: 1}
        },
        // enable autoScroll
        autoScroll: true,
        onmove (event) {
          let target = event.target
          let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
          let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
          // translate the element
          target.style.webkitTransform =
            target.style.transform =
              'translate(' + x + 'px, ' + y + 'px)'

          // update the posiion attributes
          target.setAttribute('data-x', x)
          target.setAttribute('data-y', y)
        }
      })
  },
  methods: {
    dragMoveListener (event) {
      let target = event.target
      // keep the dragged position in the data-x/data-y attributes
      let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
      let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

      // translate the element
      target.style.webkitTransform =
          target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)'

      // update the posiion attributes
      target.setAttribute('data-x', x)
      target.setAttribute('data-y', y)
    }
  }
}
</script>

<style>
  #drag-1, #drag-2 {
    width: 25%;
    height: 100%;
    min-height: 6.5em;
    margin: 10%;
    background-color: #29e;
    color: white;
    border-radius: 0.75em;
    padding: 4%;
    user-select: none;
    -webkit-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
  }
</style>
