window.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#button");
    let para = document.createElement("p");
    let body = document.querySelector("body");

    button.addEventListener('click', function () {
        fetch("expression.txt")
        .then((response) => response.text())
        .then((response) => {
            // paragraphe.textContent = response;
            para.innerHTML = response;
            body.append(para);

          })
        .catch((error) => console.log(error));
    });
});
