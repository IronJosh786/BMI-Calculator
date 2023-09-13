function calculateBMI () {
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;
    height = height/100;
    let res = (weight/(height*height)).toFixed(2);
    let result = document.querySelector(".result");
    if(weight<=0 || height<=0 || isNaN(res)) {
        result.innerHTML = `** Inputs NOT valid **`;
    }
    else {
        result.innerHTML = `** Your BMI is: ${res} **`;
    }
    return;
}