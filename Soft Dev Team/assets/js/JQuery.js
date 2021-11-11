$(document).ready(function () {

    $("#btnConsultar").click(function () {

        $.ajax({
            method: "GET",
            url: "http://localhost:8080"
        }).done(function (data) {

            var datos = ""
            for (let i = 0; i < data.length; i++) {

                datos += "<tr><td>" + data[i].id + "</td> <td>" + data[i].rfc + "</td> <td>" + data[i].nombre + "</td> <td>" + data[i].apellido + "</td> <td>" + data[i].numero + "</td></tr>"


            }
            $("tbody").html(datos);

        })
    })


    // Evento para registrar persona
    $("#btnRegistrar").click(function () {

        var rfc = $("#rfc").val();
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var numero = $("#telefono").val();

        fetch("http://localhost:8080", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    rfc,
                    nombre,
                    apellido,
                    numero
                })
            })
            .then(res => {

                if (res.status == 200) {

                    alert("La persona ha sido registrada correctamente.")
                     $("#rfc").val("");
                     $("#nombre").val("");
                     $("#apellido").val("");
                     $("#telefono").val("");

                } else {
                    alert("No se ha podido  registrar a la persona ")
                }

            })



    })


    // Btn Para eliminar 

    $("#btnEliminar").click(function () {

        var rfc = $("#rfcEliminar").val();

        fetch("http://localhost:8080/" + rfc, {
                method: "DELETE",


            })
            .then(res => {

                if (res.status == 200) {

                    alert("La persona se ha eliminado correctamente.")
                    $("#rfcEliminar").val();

                } else {
                    alert("No se ha podido eliminar a la persona. ")
                }

            })



    })


})