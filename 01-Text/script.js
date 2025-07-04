window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight 

  ctx.lineWidth = 3
  ctx.strokeStyle = '#006400' 
  ctx.beginPath()
  ctx.moveTo(canvas.width / 2, 0)
  ctx.lineTo(canvas.width / 2, canvas.height)
  ctx.stroke()
  
  ctx.strokeStyle = '#006400' 
  ctx.beginPath()
  ctx.moveTo(0, canvas.height / 2)
  ctx.lineTo(canvas.width, canvas.height / 2)
  ctx.stroke()

  ctx.fillStyle = '#ff4500'
  ctx.strokeStyle = '#ffd700'
  ctx.font = '80px Verdana'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  
  function wrapText(text) {
    let linesArray = []
    let linesCounter = 0
    let line = ''
    let words = text.split(' ')

    for (let i = 0; i < words.length; i++) {
      let testLine = line + words[i] + ' '
      console.log(ctx.measureText(testLine).width)
      ctx.fillText(testLine, canvas.width / 2 , canvas.height / 2)
    }
    
  }
  
  wrapText('NimiraTech')
})

// const text = 'This project explores the power of Vanilla JavaScript to create elegant, dynamic text animations. With no external libraries, it showcases how pure code can bring words to life on screen.'