window.addEventListener('load', function () {
  const canvas = this.document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  class Particle {
    constructor() {
      this.x = 0
      this.y = 0
      this.size = 3
    }
  }

  class Effect {
  }

  function animate() {
  }
})