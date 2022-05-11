"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const displayAdvice = () => __awaiter(void 0, void 0, void 0, function* () {
    const adviceNumberSpan = document.getElementById('advice-number');
    const adviceTextSpan = document.getElementById('advice-text');
    const diceBtn = document.getElementById('advice-btn');
    const getAdvice = fetch('https://api.adviceslip.com/advice')
        .then(response => {
        if (!response.ok)
            throw new Error('Response was not OK.');
        return response.json();
    })
        .then(({ slip }) => {
        adviceNumberSpan.innerText = slip.id.toString();
        adviceTextSpan.innerText = slip.advice;
    })
        .catch(error => {
        throw new Error('Error in displayAdvice Function');
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    displayAdvice();
}, false);
const handleClick = (event) => {
    displayAdvice();
};
