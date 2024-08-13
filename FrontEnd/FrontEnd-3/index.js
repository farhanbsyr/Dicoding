document.addEventListener("DOMContentLoaded", function () {
  const inputMaxLengthOnLoad = document.getElementById("inputNama").maxLength;
  document.getElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;

  // oninput
  document.getElementById("inputNama").addEventListener("input", function () {
    const maxCharcterNama = document.getElementById("inputNama").maxLength;
    const sisaCharcterNama = document.getElementById("inputNama").value.length;

    const sisaKarakterUpdate = maxCharcterNama - sisaCharcterNama;

    document.getElementById("sisaKarakter").innerText = sisaKarakterUpdate;

    if (sisaKarakterUpdate === 0) {
      document.getElementById("sisaKarakter").innerText = "Batas Maximum";
    } else if (sisaKarakterUpdate <= 5) {
      document.getElementById("sisaKarakter").style.color = "red";
    } else {
      document.getElementById("sisaKarakter").style.color = "black";
    }
  });

  // onfocus
  document.getElementById("inputNama").addEventListener("focus", function () {
    document.getElementById("notifikasiSisaKarakter").style.visibility =
      "visible";
  });

  // onblur
  document.getElementById("inputNama").addEventListener("blur", function () {
    document.getElementById("notifikasiSisaKarakter").style.visibility =
      "hidden";
  });

  // onchange
  document
    .getElementById("inputCaptcha")
    .addEventListener("change", function () {
      const nilaiCapctcha = document.getElementById("inputCaptcha").value;
      const submitButton = document.getElementById("submitButton");

      if (nilaiCapctcha === "PRNI") {
        submitButton.removeAttribute("disabled");
      } else {
        submitButton.setAttribute("disabled", "");
      }
    });

  // oncopy
  document.getElementById("inputCopy").addEventListener("copy", function () {
    alert("anda telah melakukan copy pada input ini");
  });

  // onpaste
  document.getElementById("inputPaste").addEventListener("paste", function () {
    alert("anda telah melakukan paster pada input ini");
  });
});
