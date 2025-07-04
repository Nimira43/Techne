window.addEventListener('load', function () {

  const textInput = this.document.getElementById('textInput')
  const canvas = document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight 

  class Particle {
    constructor() {

    }
    draw() {

    }
    update() {
      
    }
  }
  
  class Effect {
    constructor(context, canvasWidth, canvasHeight) {
      this.context = context
      this.canvasWidth = canvasWidth
      this.canvasHeight = canvasHeight
      this.textX = this.canvasWidth / 2
      this.textY = this.canvasHeight / 2
    }
    wrapText(text) {
      this.context.fillText(text, this.textX, this.textY)
    }
    convertToParticles() {

    }
    render() {

    }
  }

  const effect = new Effect()

  function animate() {

  }

  // ctx.lineWidth = 3
  // ctx.strokeStyle = '#006400' 
  // ctx.beginPath()
  // ctx.moveTo(canvas.width / 2, 0)
  // ctx.lineTo(canvas.width / 2, canvas.height)
  // ctx.stroke()
  
  // ctx.strokeStyle = '#006400' 
  // ctx.beginPath()
  // ctx.moveTo(0, canvas.height / 2)
  // ctx.lineTo(canvas.width, canvas.height / 2)
  // ctx.stroke()

  // const gradient = ctx.createLinearGradient(
  //   0, 0, canvas.width, canvas.height
  // )
  // gradient.addColorStop(0.3, '#ffd700')
  // gradient.addColorStop(0.5, '#ff4500')
  // gradient.addColorStop(0.7, '#ff0000')
  // ctx.fillStyle = gradient
  // ctx.strokeStyle = '#ffd700'
  // ctx.font = '80px Helvetica'
  // ctx.textAlign = 'center'
  // ctx.textBaseline = 'middle'
  
  // const maxTextWidth = canvas.width * 0.8
  // const lineHeight = 80

  // function wrapText(text) {
  //   let linesArray = []
  //   let lineCounter = 0
  //   let line = ''
  //   let words = text.split(' ')

  //   for (let i = 0; i < words.length; i++) {
  //     let testLine = line + words[i] + ' '
  //     if (ctx.measureText(testLine).width > maxTextWidth) {
  //       line = words[i] + ' '
  //       lineCounter++
  //     } else {
  //       line = testLine
  //     }
  //     linesArray[lineCounter] = line 
  //   }
  //   let textHeight = lineHeight * lineCounter
  //   let textY = canvas.height / 2 - textHeight / 2
  //   linesArray.forEach((el, index) => {
  //     ctx.fillText(el, canvas.width / 2, textY + (index * lineHeight))
  //   })
  //   console.log(linesArray)
  // }

  // textInput.addEventListener('keyup', function(e) {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height)
  //   wrapText(e.target.value)
  // })
})

