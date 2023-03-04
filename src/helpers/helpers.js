import { REGEXLETTER, REGEXNUMBER } from "../constance";

export const validateJustLetters = (text) => REGEXLETTER.test(text)
export const validateJustNumbers = (text) =>REGEXNUMBER.test(text)

export const randomString = (lengthText) =>{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (var i = 0; i < lengthText; i++) result += characters.charAt(Math.floor(Math.random() * lengthText));
    return result;
}

export const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`
}