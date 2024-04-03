import Api from '../Api/api';

export const createCarHandle = (
    e: Event,
    setCar: (name: string, color: string, id: number) => HTMLElement,
    setLastId: (lastId: number) => number,
    setCarCount: (carCaunt: number) => number,
    carValues?: string[]
): void => {
    const curBtn = e.currentTarget as HTMLButtonElement;
    const raceList = document.body.querySelector('.garage-main');
    const form =
        curBtn.innerText === 'CREATE'
            ? curBtn.previousElementSibling
            : curBtn.previousElementSibling?.previousElementSibling;

    const textInput = form?.children[0] as HTMLInputElement;
    const colorInput = form?.children[1] as HTMLInputElement;

    if (textInput.value === '' && !carValues) {
        return;
    }

    const carData = carValues
        ? {
              name: carValues[0],
              color: carValues[1],
          }
        : {
              name: textInput.value,
              color: colorInput.value,
          };

    if (textInput.value !== '') textInput.value = '';
    if (colorInput.value !== '#000000') colorInput.value = '#000000';

    Api.createCar(carData)
        .then((status) => {
            if (status === 201) {
                const garageHeader = raceList?.previousElementSibling?.children[0] as HTMLElement;
                const carCount = setCarCount(0);
                setCarCount(carCount + 1);

                garageHeader.innerText = `Garage(${carCount + 1})`;
                if (raceList && raceList.children.length < 7) {
                    const lastId = setLastId(0);
                    const newLastId = setLastId(lastId + 1);
                    raceList?.append(setCar(carData.name, carData.color, newLastId));
                }
            }
        })
        .catch((err: Error) => console.error('Method deleteCar Error:', err.message));
};

export const controlAllCarHandle = (e: Event) => {
    const curBtn = e.currentTarget as HTMLButtonElement;
    const btnsClass = curBtn.innerText === 'RACE' ? 'btn_startMove' : 'btn_stopMove';
    const garage = document.body.querySelector('.garage-main');
    const allBtnsStart = garage?.querySelectorAll(`.${btnsClass}`);

    if (curBtn.innerText === 'RACE') {
        garage?.classList.add('race');
        curBtn.disabled = true;
    } else {
        const raceBtn = curBtn.previousElementSibling as HTMLButtonElement;
        raceBtn.disabled = false;
        garage?.classList.remove('finish');
        garage?.classList.remove('race');
    }

    allBtnsStart?.forEach((btn) => {
        (btn as HTMLButtonElement).click();
    });
};
