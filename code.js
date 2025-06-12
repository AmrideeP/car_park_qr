const variables = {
  "name": "Amrideep Baksi",
  "car_number": "WB-18-AE-3089",
  "mobile": "+91 7890592130",
  "car_image": "https://trident-group.s3.ap-south-1.amazonaws.com/hyundai/models/colors/1698916756.png",
  "message": "If my car is blocking your way, please call me! যদি আমার গাড়ি তোমার পথ আটকে দেয়, তাহলে দয়া করে আমাকে ফোন করুন!",
  "facebook": "https://www.facebook.com/amrideep.b/",
  "instagram": "https://www.instagram.com/amrideep_baksi/",
  "linkedin": "https://www.linkedin.com/in/amrideep-baksi/"
};

document.addEventListener("DOMContentLoaded", function () {
  // Update car image
  const img = document.querySelector('.card-inner img');
  if (img) {
    img.src = variables.car_image;
    img.alt = "Stylish Car";
  }

  // Update name
  const nameEl = document.querySelector('.card-inner h1');
  if (nameEl) {
    nameEl.textContent = variables.name;
  }

  // Update car number
  const carNumberEl = document.getElementById('car-number');
  if (carNumberEl) {
    carNumberEl.innerHTML = `<strong>Car Number:</strong> ${variables.car_number}`;
  }

  // Update mobile
  const mobileEl = document.getElementById('mobile');
  if (mobileEl) {
    mobileEl.innerHTML = `<strong>Mobile:</strong> <a href="tel:${variables.mobile.replace(/[^+\d]/g, '')}">${variables.mobile}</a>`;
  }

  // Update message
  const noteEl = document.querySelector('.card-inner .note');
  if (noteEl) {
    noteEl.textContent = variables.message;
  }

  // Update social links
  const socialDiv = document.querySelector('.card-inner > div[style*="margin-top: 1.5rem"]');
  if (socialDiv) {
    socialDiv.innerHTML = `
      <a href="${variables.facebook}" target="_blank" style="margin: 0 0.5rem; color: #4267B2;">
        <i class="fab fa-facebook fa-lg"></i>
      </a>
      <a href="${variables.instagram}" target="_blank" style="margin: 0 0.5rem; color: #E1306C;">
        <i class="fab fa-instagram fa-lg"></i>
      </a>
      <a href="${variables.linkedin}" target="_blank" style="margin: 0 0.5rem; color: #0077B5;">
        <i class="fab fa-linkedin fa-lg"></i>
      </a>
    `;
  }
});
