export const getObject = (key) => {
    const str = localStorage.getItem(key);
    return str ? JSON.parse(str) : null;
}

export const saveObject = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
}

// export const getString = (key) => {
//     return localStorage.getItem(key);
// }

// export const saveString = (key) => {
//     return
// }