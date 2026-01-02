function verify() {
  const code = document.getElementById("code").value;
  const API = "https://YOUR-RENDER-APP.onrender.com";

  fetch("https://fake-medicine-api.onrender.com/admin/generate")

    .then(res => res.json())
    .then(data => {
      if (data.success) {
        document.getElementById("result").innerHTML = `
          ✅ <b>Original Medicine</b><br>
          Batch: ${data.batch}<br>
          Expiry: ${data.expiry}
        `;
      } else {
        document.getElementById("result").innerHTML = "❌ Fake Medicine";
      }
    });
}
