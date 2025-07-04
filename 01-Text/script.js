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

  const text = 'NimiraTech'
  const textX = canvas.width / 2
  const textY = canvas.height / 2
  ctx.fillStyle = '#ff4500'
  ctx.strokeStyle = '#ffd700'
  
  ctx.font = '80px Verdana'
  ctx.textAlign = 'center'
  ctx.fillText(text, textX, textY)
  ctx.strokeText(text, textX, textY)
})