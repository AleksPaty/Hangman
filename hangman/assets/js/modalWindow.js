const createModalWindow = (className, headerText, bodyText, btnText, callback) => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const modal = document.createElement('div');
    modal.classList.add('modal-wrap', `${className}`);

    const header = document.createElement('div');
    header.classList.add('modal-header');
    header.innerText = `${headerText}`;

    const body = document.createElement('div');
    body.classList.add('modal-body');
    body.innerText = `${bodyText}`;

    const button = document.createElement('button');
    button.classList.add('modal-btn');
    button.innerText = `${btnText}`;
    button.addEventListener('click', closeModal);

    overlay.append(modal);
    body.append(button);
    modal.append(header, body);

    document.body.append(overlay)

    function openModal () {
        const modal = document.querySelector(`.${className}`);
        modal.parentElement.classList.add('open')
    }
    function closeModal () {
        const parent = document.querySelector(`.${className}`).parentElement;
        parent.classList.remove('open');
        callback()
    }

    return openModal
}

export default createModalWindow