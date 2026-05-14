import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Column from './Column'
import Modal from './Modal'
import Row from './Row'

function App() {
  const [count, setCount] = useState(0)
  const [column,setColumn] = useState({})
  const [row,setRow] = useState([])
  const [isOpen,setIsOpen] = useState(false)
  const columnInRow = 100 //1つのrowに何個column入れるか
  //こっちで全体のcolumnを分割してrowに渡そう
  //row用のwrapper作っとこう
  const testcolumn = {
    fret:[null,null,null,null],
    hammer_on:true,
    pull_off:false,//ここ二つをeffectで文字列で判別でもいいかも ex.effect:hammer_on
    bar:true
  }
  const test_score = () => {
    return Array.from({length:15},()=>({
      fret:[
        Math.floor(Math.random()*21),
        Math.floor(Math.random()*21),
        Math.floor(Math.random()*21),
        Math.floor(Math.random()*21),
      ],
      hammer_on:false,
      pull_off:false,
      bar:false
    }))
  }
  return (
    <>
      <Modal
        IsOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className='score-wrapper'>
        <div className='row-wrapper'>
          <Row columns={[...test_score(),testcolumn,...test_score()]}></Row>
        </div>
      </div>
      <button
        type='button'
        className='open-btn'
        onClick={()=>{setIsOpen(true)}}
      >
        edit this row
      </button>
    </>
  )
}

export default App
