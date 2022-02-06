import hellowWord from "./hellowWord";
import imgSrc from './assets/camaro_PNG28.png'
import imgSvg from './assets/backbtn.svg'
import demoTxt from './assets/demo.txt'
import jpgMap from './assets/user.jpg'
import jpgMap2 from './assets/guideBg.jpg'

hellowWord()

const img = document.createElement('img')
img.src = imgSrc
document.body.appendChild(img)

const img2 = document.createElement('img')
img2.src = imgSvg
document.body.appendChild(img2)

const block = document.createElement('div')
block.style.cssText = 'width:200px;height:30px;background: aliceblue'
block.textContent = demoTxt
document.body.appendChild(block)

const jpg = document.createElement('img')
jpg.src = jpgMap
document.body.appendChild(jpg)

const jpg2 = document.createElement('img')
jpg2.src = jpgMap2
document.body.appendChild(jpg2)