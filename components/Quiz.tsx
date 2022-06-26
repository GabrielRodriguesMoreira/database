import React,{useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import '../styles/quiz.css'

var n = 0;
var points = 0;
var choiseds = [''];
var colors = ['']
export function Quiz(){
    const questions = ["Uma mãe tem 30 reais para dividir entre duas filhas. Qual o horário?", 
    "Em um avião há 4 romanos e 1 inglês. Qual é o nome da aeromoça?",
    "Pinóquio sempre mente. Pinóquio diz: Todos os meus chapéus são verdes. Podemos concluir que:", 
    "Sabe-se que é falsa a seguinte afirmação: “Morgana não é médica ou Carla é advogada”. Segue, a partir desta informação, que uma das afirmativas a seguir é verdadeira. Assinale-a: ", 
    "Uma família resolveu ir ao spa. Entraram 1 avó, 2 mães, 2 filhas e 1 neta. Qual o número mínimo de mulheres dessa família que entraram nesse spa?"];
    const answers1 = ["09:20", "Raquel", "Pinóquio tem pelo menos um chapéu", "Morgana é médica e Carla é advogada", "5 mulheres"];
    const answers2 = ["16:20", "Ivone", "Pinóquio tem apenas um chapéu verde", "Se Morgana é médica, então Carla é advogada", "8 mulheres"];
    const answers3 = ["16:25", "Rochele", "Pinóquio não tem chapéus", "Morgana não é médica e Carla não é advogada", "3 mulheres"];
    const answers4 = ["13:45", "Judite", "Pinóquio tem pelo menos um chapéu verde", "Se Carla é advogada, então Morgana é médica", "12 mulheres"];
    const corrects = ["answ4", "answ2", "answ1", "answ4", "answ3"];
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

