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
      this.size = this.canvasWidth * 0.4 // Change this
      this.sides = 19      // Change this
      this.maxLevel = 8    // Change this
    } 

    draw(context) {
      context.save()
      context.translate(this.canvasWidth / 2, this.canvasHeight / 2)
      context.scale(1, 1)
      context.rotate(0)
      
      for (let i = 0; i < this.sides; i++) {
        this.#drawLine(context, 0)
        context.rotate((Math.PI * 2) / this.sides)
      }
   
      context.restore()
    }
    
    #drawLine(context, level) {
      if (level > this.maxLevel) return

      context.beginPath()
      context.moveTo(0, 0)
      context.lineTo(this.size, 0)
      context.stroke()

      context.save()
      context.translate(this.size, 0)
      context.scale(0.2, 7.5) // Change this
      context.rotate(1.5)     // Change this
      this.#drawLine(context, level + 1)
      context.restore()
    }
  }

  const fractal1 = new Fractal(canvas.width, canvas.height)
  fractal1.draw(ctx)

  class Particle {

  }

  class Rain {

  }
})