/* =========================================
   HAUS BARBER
   SCRIPT.JS
========================================= */


/* =========================================
   MENU MOBILE
========================================= */

const menuMobile = document.getElementById("menuMobile");
const menu = document.querySelector(".menu");

menuMobile.addEventListener("click", () => {

    menu.classList.toggle("active");

    const icon = menuMobile.querySelector("i");

    if (menu.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* =========================================
   FECHAR MENU AO CLICAR
========================================= */

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        const icon = menuMobile.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   AGENDAMENTO WHATSAPP
========================================= */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    const servico = document.getElementById("servico").value;

    const data = document.getElementById("data").value;

    const horario = document.getElementById("horario").value;


    if (!nome || !servico || !data || !horario) {

        alert("Preencha todos os campos.");

        return;

    }


    const dataFormatada = new Date(data + "T00:00:00")
        .toLocaleDateString("pt-BR");


    const mensagem =
        `Olá! Vim pelo site da Haus Barber.%0A%0A` +

        `👤 Nome: ${nome}%0A` +

        `✂️ Serviço: ${servico}%0A` +

        `📅 Data desejada: ${dataFormatada}%0A` +

        `🕐 Horário desejado: ${horario}%0A%0A` +

        `Gostaria de confirmar a disponibilidade do horário.`;



    const whatsapp =
        `https://wa.me/5561995705082?text=${mensagem}`;


    window.open(whatsapp, "_blank");

});


/* =========================================
   IMPEDIR DATAS PASSADAS
========================================= */

const dateInput = document.getElementById("data");

const hoje = new Date();

const ano = hoje.getFullYear();

const mes = String(hoje.getMonth() + 1).padStart(2, "0");

const dia = String(hoje.getDate()).padStart(2, "0");

dateInput.min = `${ano}-${mes}-${dia}`;