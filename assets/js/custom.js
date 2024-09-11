// Объявляем переменные
const portal = "it";
const theme = "3-Samsung_S10";
const template = "surbox";
const brand_country = "Spain";

const dayNames = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const monthNames = [
  "Janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

const img_regalo = "/assets/image/img-2.png";
const minutos_y = "minutos e ";
const segundos = "segundos ";
const url_f = "";

const modalOptions = {
  backdrop: "static",
  keyboard: false,
};

(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  t = b.createElement(e);
  t.async = true;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(window, document, "script", "//connect.facebook.net/en_US/fbevents.js");

fbq("init", "{lander.param:fbpixel}");
fbq("track", "PageView");

const box_ini = false;

document.addEventListener("DOMContentLoaded", () => {
  const userResponses = {};

  document.querySelectorAll(".survey_button").forEach((button) => {
    button.addEventListener("click", () => {
      const questionId = button.classList[1].replace("bq", "");
      const answer = button.getAttribute("data-bq");

      userResponses[questionId] = answer;
    });
  });

  document
    .getElementById("reloadButton")
    ?.addEventListener("click", (event) => {
      event.preventDefault();

      console.log("Respostas dos usuários:");
      Object.entries(userResponses).forEach(([questionId, answer]) => {
        console.log(`Questão ${questionId}: ${answer}`);
      });

      const divImgGift = document.querySelector(".div_img_gift");
      if (divImgGift) {
        divImgGift.style.display = "none";
      }

      const modal3 = document.getElementById("p_modal3");
      if (modal3) {
        modal3.style.display = "none";
      }

      const backdrop = document.querySelector(".modal-backdrop");
      if (backdrop) {
        backdrop.remove();
      }
    });
});

document
  .getElementById("publish-button")
  .addEventListener("click", function () {
    const commentText = document.getElementById("comment-text").value.trim();
    if (commentText) {
      const commentList = document.getElementById("comments-list");

      const commentItem = document.createElement("li");
      commentItem.classList.add("comment-item");
      commentItem.innerHTML = `
          <span>Анонимный пользователь: ${commentText}</span>

      `;

      commentList.appendChild(commentItem);

      document.getElementById("comment-text").value = "";
    }
  });
