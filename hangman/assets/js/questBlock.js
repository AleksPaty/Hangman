class QuestBlock {
    constructor() {
        this.tasks = [
            {'quest': 'Двухколесное транспортное средство', 'word': 'Велосипед'},
            {'quest': 'Декоративный подвесной светильник', 'word': 'Люстра'},
            {'quest': 'Высокоинтеллектуальное морское млекопитающее', 'word': 'Дельфин'},
            {'quest': 'Астрономическое событие, наблюдаемое с земли', 'word': 'Затмение'},
            {'quest': 'Длинношеее животное в Африке', 'word': 'Жираф'},
            {'quest': 'Длинный, заостренный кусок льда', 'word': 'Сосулька'},
            {'quest': 'Сложная строительная структура, с неявным выходом', 'word': 'Лабиринт'},
            {'quest': 'Плодородное место в пустыне', 'word': 'Оазис'},
            {'quest': 'Знаменитый итальянский десерт', 'word': 'Тирамису'},
            {'quest': 'Устройство для защиты от дождя или солнца', 'word': 'Зонт'},
        ];
        this.doneTaskInd = [];
        this.currentWord = null;
        this.worldElem = '<div class="wordBlock"><ul class="letters"></ul><p class="clue"></p><p class="wrong-count"></p></div>'
    }

    randomIndex(min, max) {
        const randomInd = min + Math.random() * (max + 1 - min);
        if (this.doneTaskInd.includes(Math.floor(randomInd))) this.randomIndex(min, max)

        return Math.floor(randomInd);
    }

    reShowCounter(count) {
        document.querySelector('.wrong-count').innerText = `Неверных попыток: ${count}/6`;
    }

    render() {
        const ind = this.randomIndex(0, this.tasks.length - 1);
        const choosenWordObj = this.tasks[ind];
        this.currentWord = choosenWordObj.word.toUpperCase();

        for (let i = 0; i < choosenWordObj.word.length; i++) {
            const elem = document.createElement('li');
            elem.classList.add('letter');
            
            document.querySelector('.letters').append(elem)
        }

        document.querySelector('.clue').innerText = `Это: ${choosenWordObj.quest}`;
        this.reShowCounter(6)
    }
}

export default QuestBlock