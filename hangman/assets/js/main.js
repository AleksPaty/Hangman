import Gall from "./gall.js";
import FooterView from "./footerView.js";
import createModalWindow from "./modalWindow.js";

class Game {
    constructor() {
        this.header = '<div class="header"><h1>Hangman</h1></div>';
        this.footer = new FooterView();
        this.main = `<main class="main">${this.header}<div class="view">Main</div>${this.footer.footerElem}</main>`;
        this.gallows = new Gall();

        this.counter = 6;
    }

    start() {
        document.body.insertAdjacentHTML('beforeend', this.main);
        this.footer.render();
        this.gallows.render();
        document.querySelector('.wrong-count').innerText = `Неверных попыток: ${this.counter}/6`;

        const loseModalOpen = createModalWindow(
            'losed', 'Повешен!', `Загаданное слово: ${this.footer.questBlock.currentWord}`, 'Попробовать ешё раз', startGame
        )
        const winModalOpen = createModalWindow(
            'winer', 'Поздравляю!', `Загаданное слово: ${this.footer.questBlock.currentWord}`, 'Попробовать ешё раз', startGame
        )

        document.querySelector('.keys').addEventListener('click', (e) => {
           let result = this.footer.clickHandler(e, this.footer.questBlock.currentWord);

           if (result === 'wrong') {
                const bodyInd = 6 - this.counter;
                this.counter -= 1;

                document.querySelectorAll('.body-img')[bodyInd].classList.add('show')
                this.footer.questBlock.reShowCounter(this.counter)

                if (this.counter === 0) loseModalOpen();
           }

           (function() {
                let allLeters = document.querySelectorAll('.letter');
                let openLetters = document.querySelectorAll('.letter.open');
                if (openLetters.length === allLeters.length) {
                    winModalOpen()
                }
           })()
        })
        console.log(this.counter)
    }
}

function startGame() {
    if (document.body.childNodes.length > 1) {
        document.body.replaceChildren()
    }
    
    const game = new Game()
    game.start()
}

startGame()