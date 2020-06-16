let form = document.getElementById("form");

let quote = document.getElementsByClassName("card");
$(window).on("load", function () {
  $("#model  ").prop("disabled", "disabled");
  $("#storage  ").prop("disabled", "disabled");
  $("#policy ").prop("disabled", "disabled");
});

form.addEventListener("submit", getQuote);

function getQuote(e) {
  e.preventDefault();
  $(".card").css("display", "block");
}

$("#make").on("change", function (e) {
  $("#model  ").removeAttr("disabled");

  let selector = $(this).val();
  $("#model >option ").hide();
  $("#model> option")
    .filter(function () {
      return $(this).data("pub") == selector;
    })
    .show();
});

$("#model").on("change", function (e) {
  $("#storage  ").removeAttr("disabled");
  $("#policy  ").removeAttr("disabled");
  let selector1 = $(this).val();
  $("#storage > option").hide();
  $("#storage > option")
    .filter(function () {
      return $(this).data("pub") == selector1;
    })
    .show();
});
