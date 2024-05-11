export const getObject = (key) => {
    const str = localStorage.getItem(key);
    return str ? JSON.parse(str) : null;
}

export const saveObject = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
}

export const resolveCountDisplay = (value) => {
    if (value < 1000) {
        return value.toString();
    } else if (value < 1000000) {
        return (value / 1000).toFixed(1) + 'K';
    } else {
        return (value / 1000000).toFixed(1) + 'M';
    }
}

// export const getString = (key) => {
//     return localStorage.getItem(key);
// }

// export const saveString = (key) => {
//     return
// }