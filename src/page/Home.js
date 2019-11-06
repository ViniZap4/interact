import React, {useState}from 'react'

import './home.css'

export default function Home(){
  const [img_interact, setimg_interact] = useState('https://alpha--zapala.repl.co/img/woman.jpg') //trocar imagem

//    const opstions
  const [opacit_style,setopacit_style] = useState('flex')
  const [option1, setoption1] = useState('option 1');
  const [option2, setoption2] = useState('option 2');
  const [option3, setoption3] = useState('option 3');
  const [option4, setoption4] = useState('option 4');
  const [option5, setoption5] = useState('option 5');

  const [res_right, setres_right] = useState(1); // validar resposta


  function res(vae){
    var s = 1000;
    if(vae === res_right){
    setTimeout(() => { 
      setopacit_style('flex')
      setoption1('option 6')
      setoption2('option 7')
      setoption3('option 8')
      setoption4('option 9')
      setoption5('option 10')
    
      setimg_interact('https://alpha--zapala.repl.co/img/woman.jpg')
      
    }, 2.5*s)

     setTimeout(() => { setopacit_style('none')}, 1*s)
     setimg_interact('https://alpha--zapala.repl.co/img/wow.jpg')
     setres_right(res_right + 4)
    }
  }

  const options_style ={
    display: opacit_style
  }
  
  return(
  <div className="app">

    <div className="interact_box">
      <img className="img_interact" alt="interact" src={img_interact} />
      <div className="options" style={options_style}>

        <span className="option" onClick={() => res(1)} > {option1}</span>
        <span className="option" onClick={() => res(2)} > {option2}</span>
        <span className="option" onClick={() => res(3)} > {option3}</span>
        <span className="option" onClick={() => res(4)} > {option4}</span>
        <span className="option" onClick={() => res(5)} > {option5}</span>
      </div>
    </div>

  </div>  
  );
}