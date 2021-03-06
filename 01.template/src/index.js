import hellowWord from "./hellowWord";
import imgSrc from './assets/camaro_PNG28.png'
import imgSvg from './assets/backbtn.svg'
import demoTxt from './assets/demo.txt'
import jpgMap from './assets/user.jpg'
import jpgMap2 from './assets/guideBg.jpg'
import './style.css'
import './style.less'
import Data from './assets/data.xml'
import Notes from './assets/data.csv'
import toml from './assets/data.toml'
import yaml from './assets/data.yaml'
import json5 from './assets/data.json5'

hellowWord()

const img = document.createElement('img')
img.src = imgSrc
document.body.appendChild(img)

const img2 = document.createElement('img')
img2.src = imgSvg
document.body.appendChild(img2)

const block = document.createElement('div')
block.style.cssText = 'width:200px;height:300px;background: aliceblue'
block.classList.add('block-bg')
block.textContent = demoTxt
document.body.appendChild(block)

const jpg = document.createElement('img')
jpg.src = jpgMap
document.body.appendChild(jpg)

const jpg2 = document.createElement('img')
jpg2.src = jpgMap2
document.body.appendChild(jpg2)

document.body.classList.add('hello')


console.log(Data)
console.log(Notes)

console.log(toml.title)
console.log(toml.owner.name)
console.log(yaml.title)
console.log(yaml.owner.name)
console.log(json5.title)
console.log(json5.owner.name)