import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = "feedback-form-state";
let objectToSave = {};

form.addEventListener('input', throttle(e => {

    objectToSave[e.target.name] = e.target.value.trim();

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
}, 500)
);

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(objectToSave);

    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
});

const load = key => {
    try {
        const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
        return savedData === null ? undefined : JSON.parse(savedData);
    } catch (error) {
        console.error("Get state error: ", error.message);
    }
};

// const storageData = load(LOCALSTORAGE_KEY);
// if (storageData) {
//     email.value = storageData.email;
//     message.value = storageData.message;
// };

const storageData = load(LOCALSTORAGE_KEY);
if (storageData) {
    Object.entries(storageData).forEach(([name, value]) => {
        form.elements[name].value = value;
    });
};
