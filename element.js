const hide = (e /** @type {HTMLElement} */) => {
    e.style.display = "none";
};
const show = (e /** @type {HTMLElement} */) => {
    e.style.display = "inherit";
};
const validateForm = (e /** @type {HTMLFormElement} */) => e.reportValidity();
