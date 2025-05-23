window.addEventListener('load', function () {
  const canvas = this.document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = 600
  canvas.height = 600

  ctx.lineWidth = 50
  ctx.lineCap = 'round'
  ctx.strokeStyle = 'orange'
  ctx.fillStyle = 'black'

  class Fractal {
    constructor(canvasWidth, canvasHeight) {
      this.canvasHeight = canvasHeight
      this.canvasWidth = canvasWidth
      this.size = this.canvasWidth * 0.4
      this.sides = 17
    } 

    draw(context) {
      context.save()
      context.translate(this.canvasWidth / 2, this.canvasHeight / 2)
      context.scale(1, 1)
      context.rotate(0)
      
      for (let i = 0; i < this.sides; i++) {
        this.#drawLine(context)
        context.rotate((Math.PI * 2) / this.sides)
      }
   
      context.restore()
    }
    
    #drawLine(context) {
      context.beginPath()
      context.moveTo(0, 0)
      context.lineTo(this.size, 0)
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