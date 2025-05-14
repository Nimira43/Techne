window.addEventListener('load', function () {
  const canvas = this.document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = 600
  canvas.height = 600

  ctx.lineWidth = 20

  class Fractal {
    constructor(canvasWidth, canvasHeight) {
      this.canvasHeight = canvasHeight
      this.canvasWidth = canvasWidth
    }

    draw(context) {
      context.beginPath()
      context.moveTo(50, 50)
      context.lineTo(canvas.width - 50, canvas.height - 50)
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