export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const hasEmptyFields = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === undefined || obj[key] === '' || obj[key] === null) {
            return true;
        }
    }
    return false;
}