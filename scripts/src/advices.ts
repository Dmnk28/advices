let displayAdvice = async () => {
    const adviceNumberSpan: HTMLSpanElement = document.getElementById('advice-number') as HTMLSpanElement;
    const adviceTextSpan: HTMLSpanElement   = document.getElementById('advice-text') as HTMLSpanElement;
    
    fetch('https://api.adviceslip.com/advice', {cache: 'no-store'}) // {cache: 'no-store'} for preventing Mozilla Firefox from caching the response and not sending a new one.
        .then(response => {
            if (!response.ok) throw new Error('Response was not OK.');
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

document.addEventListener('DOMContentLoaded', 
    displayAdvice, false)

const handleClick = (): void => {
    displayAdvice();
}