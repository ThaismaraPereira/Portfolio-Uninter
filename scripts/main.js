document.addEventListener("DOMContentLoaded", () => {
  const enviarEmailBtn = document.getElementById("enviarEmailBtn");

  enviarEmailBtn.addEventListener("click", (event) => {
    event.preventDefault();
    enviarEmail();
  });

  function enviarEmail() {
    let parametros = {
      name: document.getElementById("principal-contato-form-nome").value,
      email: document.getElementById("principal-contato-form-email").value,
      message: document.getElementById("principal-contato-form-mensagem").value,
    };

    const templateId = "template_e8eo40q";
    const serviceId = "service_yedrgoc";

    const form = document.getElementById("principal-contato-form");
    form.classList.add("enviando");

    emailjs
      .send(serviceId, templateId, parametros)
      .then((res) => {
        form.reset();
        console.log(res);
        mostrarAlerta(
          "Obrigado! Sua mensagem foi enviada com sucesso.",
          "success"
        );
      })
      .catch((error) => {
        console.error("Erro ao enviar a mensagem:", error);
        mostrarAlerta(
          "Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.",
          "error"
        );
      })
      .finally(() => {
        form.classList.remove("enviando"); // Removendo a classe de animação após o envio
      });
  }

  function mostrarAlerta(mensagem, tipo) {
    const alerta = document.createElement("div");
    alerta.classList.add("alerta", `alerta-${tipo}`);
    alerta.textContent = mensagem;

    document.body.appendChild(alerta);

    // Remover o alerta após alguns segundos
    setTimeout(() => {
      alerta.remove();
    }, 5000); // 5000 milissegundos = 5 segundos (ajuste conforme desejado)
  }

  const descriptionDiv = document.getElementById("principal-skills-descricao");
  const icons = document.querySelectorAll(
    "#principal-skills-icones .skill-icon"
  );

  icons.forEach((icon) => {
    icon.addEventListener("mouseover", function () {
      const newDescription = this.getAttribute("data-description");
      descriptionDiv.textContent = newDescription;
    });

    icon.addEventListener("mouseout", function () {
      descriptionDiv.textContent = "";
    });
  });
});
