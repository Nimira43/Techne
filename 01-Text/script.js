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
  
  const maxTextWidth = canvas.width * 0.8

  function wrapText(text) {
    let linesArray = []
    let lineCounter = 0
    let line = ''
    let words = text.split(' ')

    for (let i = 0; i < words.length; i++) {
      let testLine = line + words[i] + ' '
      if (ctx.measureText(testLine).width > maxTextWidth) {
        line = words[i] + ' '
        lineCounter++
      } else {
        line = testLine
      }
      linesArray[lineCounter] = line 
    }
    linesArray.forEach((el, index) => {
      ctx.fillText(el, canvas.width / 2 , canvas.height / 2 + index * 70)
    })
    console.log(linesArray)
  }
  
  wrapText('This project explores the power of Vanilla JavaScript to create elegant, dynamic text animations. With no external libraries, it showcases how pure code can bring words to life on screen.')
})

