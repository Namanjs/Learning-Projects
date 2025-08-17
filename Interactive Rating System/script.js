let selected_score;

document.querySelectorAll(".rating").forEach(function (input) {
    input.addEventListener("click", function () {
        selected_score = input.textContent;
        input.style.backgroundColor = "rgb(32, 31, 30)";
    });
});


document.querySelector("#submit").addEventListener("click", function () {
    if (!selected_score) {
        alert("Please select a rating before submitting.");
        return;
    }

    let rating_page = document.querySelector("#rating-page");
    rating_page.innerHTML = `
      <div id="thanks">
        <div id="mobile">
          <img src="./images/illustration-thank-you.svg" alt="thank you">
        </div>
        <p id="user_score">You selected ${selected_score} out of 5</p>
        <h2>Thank you!</h2>
        <p id = "salutation" >We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    `;
});
