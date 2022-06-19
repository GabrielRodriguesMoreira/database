import React,{useState} from 'react'
import '../styles/quiz.css'

var n = 0;
var points = 0;
var choiseds = [''];

export function Quiz(){

        const questions = ["Pergunta valento 1 milhao de merreis?", "qt2", "qt3", "qt4", "qt5"];
        const answers1 = ["resopsta 1", "qt2", "qt3", "qt4", "qt5"];
        const answers2 = ["resposta 2", "qt2", "qt3", "qt4", "qt5"];
        const answers3 = ["resposta 3", "qt2", "qt3", "qt4", "qt5"];
        const answers4 = ["resposta 4", "qt2", "qt3", "qt4", "qt5"];
        const corrects = ["answ1", "answ1", "answ1", "answ1", "answ1"];
  

        const [current_question,set_current_question] = useState(questions[n]);
        const [current_answer1,set_current_answer1] = useState(answers1[n]);
        const [current_answer2,set_current_answer2] = useState(answers2[n]);
        const [current_answer3,set_current_answer3] = useState(answers3[n]);
        const [current_answer4,set_current_answer4] = useState(answers4[n]);
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
            for (let i = 0; i <= 4; i++) {
                if (choiseds[i] == corrects[i]) {
                points++;
                }
            }
            }
        };
return(
        <div className='quizcontainer'>
            <div className='questionask'><h1 id="question_ask" >{current_question}</h1></div>
            <form action="">
                <input type="radio" id="option1" name="option" value="answ1" />
                <label htmlFor="option1" id="label1" ><span>{current_answer1}</span></label> <br></br>
                <input type="radio" id="option2" name="option" value="answ2" />
                <label htmlFor="option2" id="label2"><span>{current_answer2}</span></label><br />
                <input type="radio" id="option3" name="option" value="answ3" />
                <label htmlFor="option3" id="label3"><span>{current_answer3}</span></label><br />
                <input type="radio" id="option4" name="option" value="answ4" />
                <label htmlFor="option4" id="label4" ><span>{current_answer4}</span></label> <br/>
            </form> 
        <button id="next_button" className="nextbutton" onClick={fun} >
        Next
        </button>
        </div>
)
}