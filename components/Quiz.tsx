import React,{useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import '../styles/quiz.css'

var n = 0;
var points = 0;
var choiseds = [''];
var colors = ['']
export function Quiz(){
    const questions = ["TA QUANTO ESSE REVORVE?", "qt2", "qt3", "qt4", "qt5"];
    const answers1 = ["CUSTA 500 CONTO", "qt2", "qt3", "qt4", "qt5"];
    const answers2 = ["2 E CINQUENTA", "qt2", "qt3", "qt4", "qt5"];
    const answers3 = ["OS ZOI DA CARA", "qt2", "qt3", "qt4", "qt5"];
    const answers4 = ["NÃO TO VENDENDO NADA NÃO", "qt2", "qt3", "qt4", "qt5"];
    const corrects = ["answ1", "answ1", "answ1", "answ1", "answ1"];
    const [current_question,set_current_question] = useState(questions[n]);
    const [current_answer1,set_current_answer1] = useState(answers1[n]);
    const [current_answer2,set_current_answer2] = useState(answers2[n]);
    const [current_answer3,set_current_answer3] = useState(answers3[n]);
    const [current_answer4,set_current_answer4] = useState(answers4[n]);

useEffect(() => {
        if (n>4){
            let parent = document.getElementById("show");
            var elem = <Resultado />
            ReactDOM.render(<Resultado />,document.getElementById("show") )
        }
})


    function fun() {
        if (n < 4) {

        n++;
        set_current_question(questions[n]);
        set_current_answer1(answers1[n]);
        set_current_answer2(answers2[n]);
        set_current_answer3(answers3[n]);
        set_current_answer4(answers4[n]);
        choiseds[n - 1] = (document.querySelector(
            'input[name="option"]:checked'
        ) as HTMLInputElement).value;
        } else {
        choiseds[n] = (document.querySelector(
            'input[name="option"]:checked'
        ) as HTMLInputElement).value;
        

        let parent = document.getElementById("show");
        parent?.removeChild(parent.firstChild!);
        var elem = <Resultado />
        ReactDOM.render(<Resultado />,document.getElementById("show") )
        }
    };



         
function Perguntas(){
    return(
        <div className='quizcontainer'>
            <div className='questionask'><h1 id="question_ask" >{current_question}</h1></div>
            <form action="">
                <div className='asnwercolumn'>
                    <input type="radio" id="option1" name="option" value="answ1" />
                    <label htmlFor="option1" id="label1" ><span>{current_answer1}</span></label>
                    <input type="radio" id="option2" name="option" value="answ2" />
                    <label htmlFor="option2" id="label2"><span>{current_answer2}</span></label>
                </div>
                <div className='asnwercolumn'> 
                    <input type="radio" id="option3" name="option" value="answ3" />
                    <label htmlFor="option3" id="label3"><span>{current_answer3}</span></label>
                    <input type="radio" id="option4" name="option" value="answ4" />
                    <label htmlFor="option4" id="label4" ><span>{current_answer4}</span></label>
                </div>
            </form>
            <section className='centerbutton'>
                <button id="next_button" className="nextbutton" onClick={fun} >
                    Next
                </button>
            </section>
           
        </div>
    )
}


function Resultado(){
    if (n<=4){
    for (let i = 0; i <= 4; i++) {
        if (choiseds[i] == corrects[i]) {
        points++;
        colors[i] = '4px solid #1cf540'
        } else { colors[i] = '4px solid #b80101'}
        }
        n=5;
    }

    useEffect(() => {
    document.getElementById('line1')!.style.borderBottom  = colors[0]
    document.getElementById('line2')!.style.borderBottom  = colors[1]
    document.getElementById('line3')!.style.borderBottom  = colors[2]
    document.getElementById('line4')!.style.borderBottom  = colors[3]
    document.getElementById('line5')!.style.borderBottom  = colors[4]
})

    return(
        <div className='quizresultcontainer'>
            <div  id='showresult' >
                <h1>Pontuação:</h1>
                <h1>{points}/5</h1>
                <div className='aling'>
                    <h1 id='line1'>1</h1>
                    <h1 id='line2'>2</h1>
                    <h1 id='line3'>3</h1>
                    <h1 id='line4'>4</h1>
                    <h1 id='line5'>5</h1>
                </div>
            </div>
        </div>
    )
}


return(
    <div id='show' >
        <Perguntas  />
        
    </div>
    

)

}

