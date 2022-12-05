'use strict'
var audioWin = new Audio('sound/win.mp3')
var audioWrong = new Audio('sound/wronganswer.mp3')

var gQuests = [
    { id: 1, opts: ['Brown', 'Green'], correctOptIndex: 1 },
    { id: 2, opts: ['Rectangle', 'Star'], correctOptIndex: 0 },
    { id: 3, opts: ["😯", "🤐"], correctOptIndex: 0 }
]

var gCurrQuestIdx = 0
var gCurrPicture = 1
var gCurrstate = true

function onInit() {
    gCurrstate=true
    if ((gCurrstate) && gCurrQuestIdx < gQuests.length) {
        renderPicture(gCurrQuestIdx)
        setTimeout(() => {
            renderQuests(gQuests, gCurrQuestIdx)
        }, 2000)
    } else {
        victory()
        gCurrQuestIdx = 0
        gCurrPicture = 1
        gCurrstate = false
    }
}


function renderPicture() {

    var strPic = `<img src="img/${gCurrPicture}.png" div class="picture" ></div>`
    const elBox = document.querySelector('.box')
    elBox.innerHTML = strPic

    setTimeout(() => {
        const elImg = document.querySelector('img')
        elImg.src = `img/${gCurrPicture+ 1}.png`
    }, 2000)
}

function renderQuests(gQuests, idx) {
    var currQuest = gQuests[idx]
    var strHTML = ''
    for (var i = 0; i < currQuest.opts.length; i++) {
        const answer = currQuest.opts[i]
        strHTML += `<div class="answer-box" id="${i}" onclick="checkAnswer(+id)">
       ${answer}
       </div>`
    }
    const elBox = document.querySelector('.box')
    elBox.innerHTML += strHTML
}

function checkAnswer(optIdx) {

    if (gCurrstate) {
        var correctAnswer = gQuests[gCurrQuestIdx].correctOptIndex
        if (optIdx === correctAnswer) {
            gCurrQuestIdx++
            gCurrPicture=gCurrPicture+2
            onInit()
        }
        else{
            audioWrong.play()
        }
    }
}

function victory() {
    audioWin.play()
    var strHTML = '<div class="winning">Game Over<button id="btn" onclick="onInit(this)">Play Again</button></div>'

    const elBox = document.querySelector('.box')
    elBox.innerHTML = strHTML
}











































// function onMark(elBtn) {
//     // TODO: change text in the button
//     // TODO: mark all spans inside .box
//     var els = document.querySelectorAll('.box span')
//     for (var i = 0; i < els.length; i++) {
//         if (!gIsMark) {
//             els[i].classList.add("mark")
//             elBtn.innerText = 'Unmark'
//         }
//         else {
//             els[i].classList.remove("mark")
//             elBtn.innerText = 'Mark'
//         }
//     }
//     gIsMark = !gIsMark

// }
// function onImgClicked() {
//     // onOpenModal()
//     onBless()
// }

// function onMouseOver(elImg) {
//     // TODO: change the image
//     elImg.src = 'img/ca.png'
// }

// function onMouseOut(elImg) {
//     // TODO: change the image
//     elImg.src = 'img/ninja.png'

// }

// function onChangeSubHeader(elSpan) {
//     // elSpan.classlist
//     // TODO: change the text in the span inside the h2
//     if (!gIsMark) return
//     var elH2S = document.querySelector('h2 span')
//     elH2S.innerText = elSpan.innerText
// }

// function onHandleKey(ev) {
//     // TODO: close the modal if escape is pressed
//     console.log('ev:', ev);
//     if (ev.key === 'Escape')
//         onCloseModal()

// }

// function onOpenModal() {
//     var elModal = document.querySelector('.modal')
//     elModal.style.display = 'block'
//     setTimeout(onCloseModal, 5000)
// }
// function onCloseModal() {
//     // Todo: hide the modal
//     var elModal = document.querySelector('.modal')
//     elModal.style.display = 'none'
// }


// function onBless() {
//     // Todo: update the modal content and use openModal
//     var elH2Modal = document.querySelector('.modal h2')
//     var currTime = getTime()
//     var randomColor = getRandomColor()
//     elH2Modal.innerText = `You were blessed at ${currTime}`
//     elH2Modal.style.color = randomColor
//     onOpenModal()
// }


// function getTime() {
//     return new Date().toString().split(' ')[4];
// }

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

