window.addEventListener('load', function () {
  const canvas = this.document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = 600
  canvas.height = 600

  // Ctx Default Value:
  // ctx.lineWidth = 10                        
  // ctx.lineCap = 'round'
  // ctx.fillStyle = '#ff45000'                  
  // ctx.shadowColor = 'black'                 
  // ctx.shadowOffsetY = 10                    
  // ctx.shadowOffsetX = 5                     
  // ctx.shadowBlur = 10
  // Change value below

  ctx.lineWidth = 2                      
  ctx.lineCap = 'round'
  ctx.fillStyle = '#ff45000'                  
  ctx.shadowColor = 'black'                 
  ctx.shadowOffsetY = 10                    
  ctx.shadowOffsetX = 5                     
  ctx.shadowBlur = 10                       
  
  const canvas2 = this.document.getElementById('canvas2')
  const ctx2 = canvas2.getContext('2d')
  canvas2.width = window.innerWidth
  canvas2.height = window.innerHeight

  class Fractal {
    constructor(canvasWidth, canvasHeight) {
      this.canvasHeight = canvasHeight
      this.canvasWidth = canvasWidth

      // Properties Default Values
      // this.size = this.canvasWidth * 0.26    
      // this.sides = 6                         
      // this.maxLevel = 5
      // this.scale = 0.55                       
      // this.spread = Math.random() * 2.8 + 0.1 
      // this.branches = 2                       
      // this.colour = 'hsl(' + Math.random() * 360 + ', 100%, 50%)'
      // Change values here

      this.size = this.canvasWidth * 0.26    
      this.sides = 6                         
      this.maxLevel = 5
      this.scale = 0.55                       
      this.spread = Math.random() * 2.8 + 0.1 
      this.branches = 2                       
      this.colour = 'hsl(' + Math.random() * 360 + ', 100%, 50%)'
    }

    draw(context) {
      context.strokeStyle = this.colour

      //Circular code - turn on/off with lines 78-80
      // context.fillStyle = this.colour 

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

      // Turn on/off Circular code
      // context.beginPath()
      // context.arc(this.size * 1.5, 0, 50, 0, Math.PI * 2)
      // context.stroke()
      // context.fill()
      // End of Circular code

      for (let i = 0; i < this.branches; i++) {
        context.save()  
        context.translate(this.size - (this.size / this.branches) * i, 0)
        context.scale(this.scale, this.scale)
        
        context.save()
        context.rotate(this.spread)
        this.#drawLine(context, level + 1)
        context.restore()
        
        context.save()
        context.rotate(-this.spread)
        this.#drawLine(context, level + 1)
        context.restore()
        context.restore()
      }
    }
  }

  class Particle {
    constructor(canvasWidth, canvasHeight, image) {
      this.canvasWidth = canvasWidth
      this.canvasHeight = canvasHeight
      this.image = image
      this.x = Math.random() * this.canvasWidth
      this.y = Math.random() * this.canvasHeight

      // Change Size Modifer
      // Default: 0.5 + 1
      this.sizeModifier = Math.random() * 0.5 + 0.1
      
      this.width = this.image.width * this.sizeModifier
      this.height = this.image.height * this.sizeModifier

      // Change Speed
      // Default: 1 + 0.5
      this.speed = Math.random() * 1 + 0.85

      // Change Angle
      // Default: 0
      this.angle = 0

      // Change Velocity of Angle
      // Default: 0.01 - 0.005
      this.velocityOfAngle = Math.random() * 0.03 - 0.105
    }

    update() {
      this.angle += this.velocityOfAngle
      this.x += this.speed
      if (this.x > this.canvasWidth + this.width) this.x = -this.width
      this.y += this.speed
      if (this.y > this.canvasHeight + this.height) this.y = -this.height
    }

    draw(context) {
      context.save()
      context.translate(this.x, this.y)
      context.rotate(this.angle)


      // Default:
      // -this.width / 2,   // or just 0 
      // -this.height / 2,  // or just 0
      // Change second and third parameters

      context.drawImage(
        this.image,
        -this.width / 2,   // or just 0 
        -this.height / 2,  // or just 0
        this.width,
        this.height
      )

      context.restore()
    }
  }

  class Rain {
    constructor(canvasWidth, canvasHeight, image) {
      this.canvasWidth = canvasWidth
      this.canvasHeight = canvasHeight
      this.image = image

      // Change number of particles 
      // Default Value: 10
      this.numberOfParticles = 60

      this.particles = []
      this.#initialise()
    }

    #initialise() {
      for (let i = 0; i < this.numberOfParticles; i++) {
        this.particles.push(new Particle(
          this.canvasWidth,
          this.canvasHeight,
          this.image
        ))
      }   
    }

    run(context) {
      this.particles.forEach(particle => {
        particle.draw(context)
        particle.update()
      })   
    }
  }

  const fractal1 = new Fractal(canvas.width, canvas.height)
  fractal1.draw(ctx)
  
  const fractalImage = new Image()
  fractalImage.src = canvas.toDataURL()
  fractalImage.onload = function () {
    const rainEffect = new Rain(canvas2.width, canvas2.height, fractalImage)

    function animate() {
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height)
      rainEffect.run(ctx2)
      requestAnimationFrame(animate)
    }
    
    animate()
  }
})