window.onload = () => {
    const transtion_element = document.querySelector('.transition');
    setTimeout(() => {
        transtion_element.classList.remove('is-active');
    }, 500); // millisecondes
}

