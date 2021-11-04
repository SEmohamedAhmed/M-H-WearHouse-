function SetColor(color) {
    document.documentElement.style.setProperty("--main-color", color);
};

SetColor(localStorage.getItem("mainColor") || "red");
function getColor(color) {
    return document.getElementById("color-" + color);
}

getColor("red").addEventListener("click", () => {
    localStorage.setItem("mainColor", "red");
    SetColor(localStorage.setItem("mainColor") || "red");
});
getColor("green").addEventListener("click", () => {
    localStorage.setItem("mainColor", "green");
    SetColor(localStorage.setItem("mainColor") || "red");
});
getColor("blue").addEventListener("click", () => {
    localStorage.setItem("mainColor", "blue");
    SetColor(localStorage.setItem("mainColor") || "red");
});
getColor("rgb(230,220,220)").addEventListener("click", () => {
    localStorage.setItem("mainColor", "rgb(230,220,220)");
    SetColor(localStorage.setItem("mainColor") || "red");
});
getColor("rgb(240, 128, 128)").addEventListener("click", () => {
    localStorage.setItem("mainColor", "rgb(240, 128, 128)");
    SetColor(localStorage.setItem("mainColor") || "red");
});
getColor("rgb(255, 182, 193)").addEventListener("click", () => {
    localStorage.setItem("mainColor", "rgb(255, 182, 193)");
    SetColor(localStorage.setItem("mainColor") || "red");
});
getColor("rgb(255, 165, 0)").addEventListener("click", () => {
    localStorage.setItem("mainColor", "rgb(255, 165, 0)");
    SetColor(localStorage.setItem("mainColor") || "red");
});
getColor("rgb(240, 230, 140)").addEventListener("click", () => {
    localStorage.setItem("mainColor", "rgb(240, 230, 140)");
    SetColor(localStorage.setItem("mainColor") || "red");
});
getColor("rgb(175, 238, 238)").addEventListener("click", () => {
    localStorage.setItem("mainColor", "rgb(175, 238, 238)");
    SetColor(localStorage.setItem("mainColor") || "red");
});
getColor("rgb(192, 192, 192)").addEventListener("click", () => {
    localStorage.setItem("mainColor", "rgb(192, 192, 192)");
    SetColor(localStorage.setItem("mainColor") || "red");
});
    const updateButton1 = document.getElementById('updateButton1');
    const updateButton2 = document.getElementById('updateButton2');
    const updateButton3 = document.getElementById('updateButton3');
    const updateButton4 = document.getElementById('updateButton4');
    const updateButton5 = document.getElementById('updateButton5');
    const updateButton6 = document.getElementById('updateButton6');
    const updateButton7 = document.getElementById('updateButton7');
    const updateButton8 = document.getElementById('updateButton8');
    const updateButton9 = document.getElementById('updateButton9');
    const updateButton10 = document.getElementById('updateButton10');
    const updateButton11 = document.getElementById('updateButton11');
    const updateButton12 = document.getElementById('updateButton12');
    const updateButton13 = document.getElementById('updateButton13');
    const updateButton14 = document.getElementById('updateButton14');
    const updateButton15 = document.getElementById('updateButton15');
    const updateButton16 = document.getElementById('updateButton16');
    const updateButton17 = document.getElementById('updateButton17');
    const updateButton18 = document.getElementById('updateButton18');
    const updateButton19 = document.getElementById('updateButton19');
    const updateButton20 = document.getElementById('updateButton20');
    const updateButton21 = document.getElementById('updateButton21');
    const updateButton22 = document.getElementById('updateButton22');
    const updateButton23 = document.getElementById('updateButton23');
    const updateButton24 = document.getElementById('updateButton24');
    const updateButton25 = document.getElementById('updateButton25');
    const PriceIn = document.getElementById('PriceIn');
        updateButton1.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price1", "80$");
            }
    else {
        localStorage.setItem("Price1", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton2.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price2", "80$");
            }
    else {
        localStorage.setItem("Price2", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton3.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price3", "80$");
            }
    else {
        localStorage.setItem("Price3", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton4.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price4", "80$");
            }
    else {
        localStorage.setItem("Price4", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton5.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price5", "80$");
            }
    else {
        localStorage.setItem("Price5", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton6.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price6", "80$");
            }
    else {
        localStorage.setItem("Price6", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton7.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price7", "80$");
            }
    else {
        localStorage.setItem("Price7", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton8.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price8", "80$");
            }
    else {
        localStorage.setItem("Price8", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton9.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price9", "80$");
            }
    else {
        localStorage.setItem("Price9", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton10.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price10", "80$");
            }
    else {
        localStorage.setItem("Price10", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton11.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price11", "80$");
            }
    else {
        localStorage.setItem("Price11", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton12.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price12", "80$");
            }
    else {
        localStorage.setItem("Price12", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton13.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price13", "80$");
            }
    else {
        localStorage.setItem("Price13", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton14.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price14", "80$");
            }
    else {
        localStorage.setItem("Price14", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton15.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price15", "80$");
            }
    else {
        localStorage.setItem("Price15", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton16.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price16", "80$");
            }
    else {
        localStorage.setItem("Price16", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton17.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price17", "80$");
            }
    else {
        localStorage.setItem("Price17", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton18.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price18", "80$");
            }
    else {
        localStorage.setItem("Price18", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton19.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price19", "80$");
            }
    else {
        localStorage.setItem("Price19", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton20.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price20", "80$");
            }
    else {
        localStorage.setItem("Price20", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton21.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price21", "80$");
            }
    else {
        localStorage.setItem("Price21", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton22.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price22", "80$");
            }
    else {
        localStorage.setItem("Price22", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton23.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price23", "80$");
            }
    else {
        localStorage.setItem("Price23", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton24.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price24", "80$");
            }
    else {
        localStorage.setItem("Price24", PriceIn.value);
    PriceIn.value = "";
            }
        });
        updateButton25.addEventListener('click', () => {
            if (PriceIn.value == "") {
        localStorage.setItem("Price25", "80$");
            }
    else {
        localStorage.setItem("Price25", PriceIn.value);
    PriceIn.value = "";
            }
        });




