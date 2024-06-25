class Gall {
    constructor() {
        this.bodParts = [
            'assets/image/body/head.svg', 'assets/image/body/body.svg', 'assets/image/body/hand-one.svg',
            'assets/image/body/hand-two.svg', 'assets/image/body/leg-one.svg', 'assets/image/body/leg-two.svg'
        ]
        this.elem = `<div class='gall-wrapper'><div class="gall"><div class="body"></div></div></div>`
    }

    render() {
        document.querySelector('.view').insertAdjacentHTML('afterbegin', this.elem);
        
        this.bodParts.forEach((v, i) => {
            const body = document.querySelector('.body');
            let elem = document.createElement('img');
            elem.src = v;
            elem.alt = `${i}`;
            elem.classList.add('body-img')
            elem.classList.add(`img${i+1}`)

            body.append(elem)
        })
    }
}

export default Gall