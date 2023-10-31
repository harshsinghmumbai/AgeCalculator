let enter_age = document.getElementById("enter_age");
let calculate = document.getElementById("calculate");
// console.log(enter_age, calculate);

calculate.addEventListener("click", function () {
    if (enter_age.value == "") {
        alert("Please enter your age");
    }
    else{

    // -----------------------Receives user year------------------------------

        // console.log(enter_age.value);
        let current=new Date(enter_age.value);
        // console.log(current);
        let ageis =current.getFullYear();
        // console.log(ageis);

        // ---------------------------------Current Year--------------------------
        let current1=new Date();
        // console.log(current1);
        let ageis1=current1.getFullYear();
        // console.log(ageis1);

        let user_age=ageis1-ageis;
        document.getElementById("your_age").innerHTML=user_age;
    }
});