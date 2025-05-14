window.addEventListener('load', function () {
  const canvas = this.document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = 600
  canvas.height = 600

  class Fractal {
    constructor(canvasWidth, canvasHeight) {
      this.canvasHeight = canvasHeight
      this.canvasWidth = canvasWidth
    }
    draw(context) {
      context.beginPath()
      context.moveTo(0, 0)
      context.lineTo(canvas.width, canvas.height)
      context.stroke()
    }
  }

  class Particle {

  }

  class Rain {

  }
})