const questionsData = [
    {
        id: 1,
        question:
            "Khi nói về lực hấp dẫn giữa hai chất điểm, phát biểu nào sau đây sai?",
        answer: [
            "Lực hấp dẫn có phương trùng với đường thẳng nối hai chất điểm",
            "Lực hấp dẫn có điểm đặt tại mỗi chất điểm.",
            "Lực hấp dẫn của hai chất điểm là cặp lực trực đối.",
            "Lực hấp dẫn của hai chất điểm là cặp lực cân bằng."
        ],
    },
    {
        id: 2,
        question: "Hiện tượng thủy triều xảy ra do:",
        answer: [
            "Chuyển động của các dòng hải lưu.",
            "Trái đất quay quanh mặt trời.",
            "Lực hấp dẫn của mặt trăng - mặt trời.",
            "Lực hấp dẫn của mặt trăng - trái đất."
        ]
    },
    {
        id: 3,
        question:
            "Một vài có khối lượng m đặ ở nơi cso gia tốc trọng trường g. Phát biểu nào sau đây sai?",
        answer: [
            "Trọng lực có độ lớn được xác định bởi biểu thức P = mg.",
            " Điểm đặt của trọng lực là trọng tâm của vật.",
            "Trọng lực tỉ lệ nghịch với khối lượng của vật.",
            "Trọng lực là lực hút của Trái Đất tác dụng lên vật."
        ]
    },
    {
        id: 4,
        question: "Trái đất chuyển động gần như tròn quanh mặt trời là do:",
        answer: [
            "Chuyển động theo quán tính.",
            "Mặt trời và trái đất đều tròn.",
            "Lực hấp dẫn của trái đất - mặt trời.",
            "Trái đất có chuyển động tự quay."
        ]
    },
    {
        id: 5,
        question:
            "Một vật có khối lượng m, ở độ cao h so với mặt đất. Gọi M là khối lượng Trái Đất, G là hằng số hấp dẫn và R là bán kính Trái Đất. Gia tốc rơi tự do tại vị trí đặt vật có biểu thức là?",
        answer: ["g=GM(R+h)2 .", "g=GmMR2 .", "g=GM(R+h) .", " g=GMR2."]
    },
    {
        id: 6,
        question:
            "Một vật ở trên mặt đất có trọng lượng 9 N. Khi ở một điểm cách tâm Trái Đất 3R (R là bán kính trái đất) thì có trọng lượng bằng",
        answer: ["81 N.", "27 N.", "3 N.", "1 N."],
    },
    {
        id: 7,
        question:
            "Một viên đá đang nằm yên trên mặt đất, lực hấp dẫn do Trái Đất tác dụng vào hòn đá có giá trị?",
        answer: [
            "Lớn hơn trọng lượng của hòn đá.",
            "Nhỏ hơn trọng lượng của hòn đá.",
            "Bằng trọng lượng của hòn đá.",
            "Bằng 0."
        ]
    },
    {
        id: 8,
        question:
            "Biết bán kính của Trái Đất là R. Lực hút của Trái Đất đặt vào một vật khi ở trên mặt đất là 40 N, khi lực hút là 10 N thì vật ở độ cao h bằng",
        answer: ["R.", "4R.", "R4 .", "R2 ."]
    },
    {
        id: 9,
        question:
            "Hai quả cầu đồng chất có khối lượng 20 kg, bán kính 10 cm, khoảng cách giữa hia tâm của chúng là 50 cm. Biết rằng số hấp dẫn là G =   Độ lớn lực tương tác hấp dẫn giữa chúng là",
        answer: [
            "1,0672.10-8 N.",
            "1,0672.10-6 N.",
            "1,0672.10-7 N.",
            "1,0672.10-5 N."
        ]
    },
    {
        id: 10,
        question:
            "Khối lượng sao Hỏa bằng 325 khối lượng Trái Đất, bán kính sao Hỏa bằng 1325 bán kính Trái Đất. Gia tốc rơi tự do trên mặt đất là g = 10 m/s2. Gia tốc rơi tự do trên sao Hỏa là",
        answer: ["2,34 m/s2.", "1,67 m/s2.", "4,44 m/s2.", "5,23 m/s2."]
    }


];
const answersData = [
    {
        id: 1,
        answer: "Lực hấp dẫn của hai chất điểm là cặp lực cân bằng.",
    },
    {
        id: 2,
        answer: "Lực hấp dẫn của mặt trăng - trái đất.",
    },
    {
        id: 3,
        answer: "Trọng lực tỉ lệ nghịch với khối lượng của vật.",
    },
    {
        id: 4,
        answer: "Lực hấp dẫn của trái đất - mặt trời.",
    },
    {
        id: 5,
        answer: "g=GM(R+h)2 .",
    },
    {
        id: 6,
        answer: "1 N.",
    },
    {
        id: 7,
        answer: "Bằng trọng lượng của hòn đá.",
    },
    {
        id: 8,
        answer: "R.",
    },
    {
        id: 9,
        answer: "1,0672.10-7 N.",
    },
    {
        id: 10,
        answer: "4,44 m/s2.",
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const order = document.querySelector(".order");
    const question = document.querySelector(".question");
    const questionCount = document.querySelector(".question-count");
    const questionSentence = document.querySelector(".question-sentence");
    const answerItem = document.querySelectorAll(".answers li");
    const answersChoose = document.querySelectorAll(".answers-choose");
    const proccessItemFalse = document.querySelector('.proccess-item-false')
    const proccessItem = document.querySelector('.proccess-item')
    const proccessText = document.querySelector('.proccess-text')
    const prev = document.querySelector("#pre");
    const next = document.querySelector("#next");
    const orders = document.querySelector(".orders");
    const timeText = document.querySelector(".time-text");
    const submit = document.querySelector('#submit')
    const start = document.querySelector(".start");
    let orderItem = document.querySelectorAll(".orders li");
    let listSubmit = [];
    let listCorrect = [];
    let currentIndex = null;
    let checkStart = false
    let checkFinish = false
    let countCorrect = 0
    const quiz = {
        handleNext: function () {
            next.addEventListener("click", () => {
                ++currentIndex;
                if (currentIndex >= questionsData.length) {
                    currentIndex = 0;
                }
                orderItem[currentIndex].click();
            });
        },
        handlePrev: function () {
            prev.addEventListener("click", () => {
                --currentIndex;
                if (currentIndex < 0) {
                    currentIndex = questionsData.length - 1;
                }
                orderItem[currentIndex].click();
            });
        },
        handleKey : function(e){
            document.addEventListener('keydown',(e) => {
                if (e.keyCode === 37){
                    prev.click()
                }else if (e.keyCode === 39){
                    next.click()
                }
            })
        },
        
        renderStart: function () {
            start.classList.add('close');
            order.classList.remove('close');
            question.classList.remove('close');
            start.previousElementSibling.classList.remove('close');
        },
        handleStart: function () {
            start.addEventListener('click', () => {
                checkStart = true
                this.renderStart()
            });
        },
        formatTime: function (value) {
            return value < 10 ? `0${value}` : value
        },
        handleTime: function (minutes, seconds) {
            let timerExpired = false;
            timeText.innerHTML = `${this.formatTime(minutes)} : ${this.formatTime(seconds)}`;
            let timer = setInterval(() => {
                if (seconds === 0 && minutes === 0) {
                    timerExpired = true;
                } else {
                    if (seconds === 0) {
                        minutes--;
                        seconds = 59;
                    } else {
                        seconds--;
                    }
                }
                if (timerExpired) {
                    timeText.innerHTML = `Hết thời gian`;
                    clearInterval(timer);
                } else {
                    timeText.innerHTML = `${this.formatTime(minutes)} : ${this.formatTime(seconds)}`;
                }
            }, 1000);
        },
        renderProccess: function () {
            proccessItem.style = `stroke-dasharray: ${0} 9999;`
            proccessText.innerHTML = `0/${questionsData.length}`
        },
        handleProccess: function (countCorrect) {
            let lengthAnswer = listSubmit.filter((item) => item >= 0)
            let r = proccessItem.getAttribute('r')
            if (!checkFinish) {
                proccessItem.style = `stroke-dasharray: ${(2 * Math.PI * r * lengthAnswer.length) / questionsData.length} 9999;`
                proccessText.innerHTML = `${lengthAnswer.length}/${questionsData.length}`
            } else {
                proccessItem.style = `stroke-dasharray: ${(2 * Math.PI * r * countCorrect) / questionsData.length} 9999;`
                proccessText.innerHTML = `${countCorrect}/${questionsData.length}`
            }
        },
        renderQuestions: function () {
            let temp = "";
            questionsData.forEach((item, index) => {
                temp += `
                    <li class="item-order">${index + 1}</li>
                `;
            });
            orders.innerHTML = temp;
            orderItem = document.querySelectorAll(".orders li");
        },
        handleQuestions: function () {
            orderItem.forEach((item, index) => {
                item.addEventListener("click", () => {
                    currentIndex = index;
                    item.scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });
                    this.renderQuestionCurrent();
                    orderItem.forEach((item) => item.classList.remove("active"));
                    orderItem[currentIndex].classList.add("active");
                    answerItem.forEach((item) => item.classList.remove("active"));
                    let checked = listSubmit[currentIndex];
                    checked >= 0 && answerItem[checked].click();
                    if (checkFinish){
                        this.renderAnswer()
                    }
                });
            });
            orderItem[0].click();
        },
        renderQuestionCurrent: function () {
            questionCount.innerHTML = `
                Question ${currentIndex + 1} of ${questionsData.length}
            `;
            questionSentence.innerHTML = questionsData[currentIndex].question;
            answersChoose.forEach((item, index) => {
                item.innerHTML = questionsData[currentIndex].answer[index];
            });
        },
        renderAnswer : function(){
            if (listSubmit[currentIndex] === listCorrect[currentIndex]){
                answerItem.forEach((item,index) => {
                    item.classList.remove('false')
                })
                answerItem[listCorrect[currentIndex]].classList.add('correct')
            }else{
                answerItem.forEach((item,index) => {
                    item.classList.remove('correct')
                    item.classList.remove('false')
                })
                answerItem[listSubmit[currentIndex]].classList.add('false')
                answerItem[listCorrect[currentIndex]].classList.add('correct')
            }
        },
        handleAnswer: function () {
            answerItem.forEach((item, index) => {
                item.addEventListener("click", () => {
                    if (!checkFinish) {
                        answerItem.forEach((item) => item.classList.remove("active"));
                        item.classList.add("active");
                        orderItem[currentIndex].classList.add("selected");
                        listSubmit[currentIndex] = index;
                        this.handleProccess()
                    }else{
                        return;
                    }
                });
            });
        },
        handleSubmit: function (e) {
            submit.addEventListener('click', () => {
                const processLength = listSubmit.filter((item) => item >= 0)
                if (processLength.length < questionsData.length) {
                    alert("Bạn chọn thiếu đáp án kìa vui lòng xem lại nhé !!")
                } else {
                    checkFinish = true
                    questionsData.forEach((item, index) => {
                        const result = answersData.find(
                            (rs) => rs.id === questionsData[index].id
                        );  
                        if (item.answer[listSubmit[index]] === result.answer) {
                            countCorrect += 1
                            listCorrect[index] = listSubmit[index]
                        } else {
                            orderItem[index].classList.add('false')
                            listCorrect[index] = item.answer.indexOf(result.answer)
                        }
                    })
                    this.handleProccess(countCorrect)
                }

            })
        },
       
        render : function(){
            this.renderQuestions();
            this.renderProccess();
        },
        handle : function(){
            this.handleStart()
            this.handleQuestions();
            this.handleAnswer();
            this.handleNext();
            this.handlePrev();
            this.handleTime(15, 0);
            this.handleSubmit();
            this.handleKey();
        },
        start: function () {
            this.render()
            this.handle()
        },
    };
    quiz.start();
});
