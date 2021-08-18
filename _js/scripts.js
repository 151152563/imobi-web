$(document).ready(function() {
    $('.sidenav').sidenav();

    $('.dropdown-trigger').dropdown();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    $('.modal').modal();
    
    $('.sidenav').sidenav();

    $('select').formSelect();

});
$(document).ready(function() {

    $("#filter-trigger").click(function() {
        $("#card-filter").animate({
            width: "98%"
        })
        $("#card-filter").css("background-color", "white");
        $("#filter-actions").stop(true, true).delay(700).fadeIn(300);
    })



});



function myFunction(images) {
    var imgText = document.getElementById("img-legend");
    var expandImg = document.getElementById("expandedImg");
    console.log(expandImg);
    expandImg.src = images.src;
    imgText.innerHTML = images.alt;


}

$(document).ready(function () {
    $('.collapsible').collapsible();
    $('.collapsible').collapsible();
    $(".botao-envia").click(function () {
        $(".progress").addClass("carregando");
        $(".formulario").fadeOut(500);
    });
    $('#formulario').submit(function (event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "_phpmailer/envia.php",
            data: $(this).serialize(),
            success: function (data) {
                $(".progress").removeClass("carregando");
                if (data == "Infelizmente ocorreu um erro, tente novamente" || "Por favor, verifique o campo Nome!" || "Por favor, verifique o campo Telefone!") {
                    $("#answer").fadeIn(500);
                    $("#try-again").fadeIn(500);
                    document.querySelector("#answer").innerHTML = `<h5>${data}</h5>`
                } else {
                    $("#answer").fadeIn(500);
                    document.querySelector("#answer").innerHTML = `<h5>${data}</h5>`
                }
            }
        });
    });
    $(".try-again").click(function () {
        $("#try-again").fadeOut(300);
        $("#answer").fadeOut(300);
        $(".formulario").fadeIn(600);
    });
    
});