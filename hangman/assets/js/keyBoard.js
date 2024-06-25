class KeyBoard {
    constructor() {
        this.alphabet = [
            "А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й",
            "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф",
            "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"
        ];
        this.wrapElem = '<div class="keyboard-wrap"><ul class="keys"></ul></div>';
    }

    render() {
        for (let i = 0; i < this.alphabet.length; i++) {
            const elem = document.createElement('li');
            elem.classList.add('key');
            elem.innerText = this.alphabet[i];
            
            document.querySelector('.keys').append(elem)
        }
    }
    
}

export default KeyBoard