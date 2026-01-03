const API = "https://YOUR-RENDER-URL.onrender.com";

async function verifyMedicine() {
  const code = document.getElementById("code").value;
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = "Checking...";
  resultDiv.style.color = "black";

  try {
    const res = await fetch(`${API}/admin/verify/${code}`);
    const data = await res.json();

    if (data.status === "ORIGINAL") {
      resultDiv.style.color = "green";
      resultDiv.innerHTML = "✅ ORIGINAL MEDICINE<br>Verified Successfully";
    } else {
      resultDiv.style.color = "red";
      resultDiv.innerHTML = "❌ FAKE MEDICINE<br>" + data.message;
    }

  } catch (error) {
    resultDiv.style.color = "red";
    resultDiv.innerHTML = "❌ Server error. Try again later.";
  }
}
