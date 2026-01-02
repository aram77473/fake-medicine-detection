function verify() {
  const code = document.getElementById("code").value;

  fetch("https://YOUR-RENDER-URL.onrender.com/verify/" + code)
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
