let qr;

function generateQRCode() {
  const text = document.getElementById("qrText").value;
  const qrDiv = document.getElementById("qrcode");
  const downloadBtn = document.getElementById("downloadBtn");
  const generateBtn = document.querySelector("button");

  qrDiv.innerHTML = "";
  downloadBtn.style.display = "none";

  if (!text.trim()) {
    alert("Please enter some text or a URL.");
    return;
  }

  // Generate QR code
  qr = new QRCode(qrDiv, {
    text: text,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Hide the Generate button
  generateBtn.style.display = "none";

  // Show Download link after QR is ready
  setTimeout(() => {
    const img = qrDiv.querySelector("img");
    if (img) {
      downloadBtn.href = img.src;
      downloadBtn.style.display = "inline-block";
    }
  }, 300);
}
