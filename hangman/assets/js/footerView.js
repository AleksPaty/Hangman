import QuestBlock from "./questBlock.js";
import KeyBoard from "./keyBoard.js";

class FooterView {
    constructor() {
        this.questBlock = new QuestBlock();
        this.keyBoard = new KeyBoard();
        this.footerElem = `<div class="footer-view">${this.questBlock.worldElem}${this.keyBoard.wrapElem}</div>`;
         
    }

    checkLetter(letter, word) {
        const includeLettersInd = [];

        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) includeLettersInd.push(i)
        }
        return includeLettersInd
    }

    openLetter(letters, word) {
        letters.forEach((v) => {
            const elem = document.querySelectorAll('.letter')[v];
            elem.classList.add('open');
            elem.innerText = word[v];
        })
    }

    clickHandler(event, word) {
        if (event.target.nodeName === 'LI' && !event.target.classList.contains('used')) {
            const letter = event.target.innerText;
            const findLetterArr = this.checkLetter(letter, word);

            event.target.classList.add('used');
            if (findLetterArr.length < 1) return 'wrong';
            if (findLetterArr.length > 0) this.openLetter(findLetterArr, word);
        }
    }

    render() {
        this.questBlock.render()
        this.keyBoard.render()
    }
}

export default FooterView