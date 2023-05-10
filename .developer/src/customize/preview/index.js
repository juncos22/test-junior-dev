import customize from "customize-preview";

customize.bind("preview-ready", function () {
  customize("campo_texto", function (value) {
    value.bind(function (newval) {
      let el = document.querySelector("#customizer-quadlayers div");
      el.innerHTML = newval;
    });
  });

  customize("campo_textarea", function (value) {
    value.bind(function (newval) {
      let el = document.querySelector("#customizer-quadlayers span");
      el.innerHTML = newval;
    });
  });

  /**
   * Componente para subir imagen
   */
  customize("image_upload", function (value) {
    value.bind(function (newval) {
      // let el = document.querySelector("header");
      // Obtiene el img del header por su id
      let img = document.getElementById("logoImg");
      // console.log(img.getAttribute("src"));
      // console.log("New Val: ", newval);
      // Le setea el nuevo valor que le llegue, en caso contrario le deja la imagen por defecto
      console.log("URL: ", document.URL.split("?")[0]);
      img.setAttribute(
        "src",
        newval ||
          `${
            document.URL.split("?")[0]
          }/wp-content/themes/test-junior-dev-main/assets/images/logo.png`
      );
      // el.append(img);
    });
  });

  /**
   * Componente que cambia el color de fondo del header
   */
  customize("header_color", function (value) {
    value.bind(function (newVal) {
      // Obtiene el header de la pagina
      let el = document.querySelector("header");
      // Le establece en la propiedad CSS Background Color el nuevo valor que le llega
      el.style.backgroundColor = newVal;
    });
  });
});
