type Advice =  {
    "slip": { 
        "id": string, 
        "advice": string,
    }
}

const displayAdvice = async () => {
    const adviceNumberSpan: HTMLSpanElement = document.getElementById('advice-number') as HTMLSpanElement;
    const adviceTextSpan: HTMLSpanElement   = document.getElementById('advice-text') as HTMLSpanElement;
    const diceBtn: HTMLAnchorElement = document.getElementById('advice-btn') as HTMLAnchorElement;


    const getAdvice = fetch('https://api.adviceslip.com/advice')
        .then(response => {
            if (!response.ok) throw new Error('Response was not OK.')
            return response.json();
        })
        .then(({ slip }) => {
            adviceNumberSpan.innerText = slip.id.toString();
            adviceTextSpan.innerText = slip.advice;
        })
        .catch(error => {
            throw new Error('Error in displayAdvice Function');
        })    

}

document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    displayAdvice();
}, false)


const handleClick = (event: MouseEvent): void => {
    displayAdvice();
}