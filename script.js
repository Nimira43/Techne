window.addEventListener('load', function () {
  const canvas = this.document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = 600
  canvas.height = 600

  ctx.lineWidth = 50
  ctx.lineCap = 'round'

  class Fractal {
    constructor(canvasWidth, canvasHeight) {
      this.canvasHeight = canvasHeight
      this.canvasWidth = canvasWidth
      this.size = 100
    }

    draw(context) {
      context.beginPath()
      context.moveTo(150, 150)
      context.lineTo(this.size, 300)
      context.stroke()
    }
  }

  const fractal1 = new Fractal(canvas.width, canvas.height)
  fractal1.draw(ctx)

  class Particle {

  }

  class Rain {

  }
})