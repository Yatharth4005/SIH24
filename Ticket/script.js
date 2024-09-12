const sitesData = {
  "Agra, Uttar Pradesh": ["Agra Fort", "Taj Mahal"],
  "Aurangabad, Maharashtra": ["Ajanta Caves", "Ellora Caves"],
  "Mahabalipuram, Tamil Nadu": ["Group of Monuments at Mahabalipuram"],
  "Konark, Odisha": ["Sun Temple"],
  "Goa": ["Churches and Convents of Goa"],
  "Fatehpur Sikri, Uttar Pradesh": ["Fatehpur Sikri"],
  "Hampi, Karnataka": ["Group of Monuments at Hampi"],
  "Khajuraho, Madhya Pradesh": ["Khajuraho Group of Monuments"],
  "Elephanta Island, Maharashtra": ["Elephanta Caves"],
  "Tamil Nadu": ["Great Living Chola Temples"],
  "Pattadakal, Karnataka": ["Group of Monuments at Pattadakal"],
  "Sanchi, Madhya Pradesh": ["Buddhist Monuments at Sanchi"],
  "Delhi": ["Humayun's Tomb", "Qutb Minar and its Monuments", "Red Fort Complex"],
  "Various (Darjeeling, Shimla, Nilgiri)": ["Mountain Railways of India"],
  "Bodh Gaya, Bihar": ["Mahabodhi Temple Complex at Bodh Gaya"],
  "Raisen District, Madhya Pradesh": ["Rock Shelters of Bhimbetka"],
  "Mumbai, Maharashtra": ["Chhatrapati Shivaji Terminus", "Victorian Gothic and Art Deco Ensembles of Mumbai"],
  "Pavagadh, Gujarat": ["Champaner-Pavagadh Archaeological Park"],
  "Jaipur, Rajasthan": ["The Jantar Mantar", "Jaipur City"],
  "Chittorgarh, Kumbhalgarh, Ranthambore, Amber, Jaisalmer, Gagron, Rajasthan": ["Hill Forts of Rajasthan"],
  "Patan, Gujarat": ["Rani-ki-Vav (The Queen’s Stepwell)"],
  "Nalanda, Bihar": ["Archaeological Site of Nalanda Mahavihara"],
  "Ahmedabad, Gujarat": ["Historic City of Ahmedabad"],
  "Dholavira, Gujarat": ["Dholavira: A Harappan City"],
  "Mulugu, Telangana": ["Kakatiya Rudreshwara (Ramappa) Temple"],
  "Birbhum District, West Bengal": ["Santiniketan"]
};

// Get the city and site select elements
const citySelect = document.getElementById('citySelect');
const siteSelect = document.getElementById('siteSelect');
const nextPayButton = document.getElementById('nextPay');
const generateTicketButton = document.getElementById('generateTicket');

// Populate citySelect with cities from sitesData
for (let city in sitesData) {
  let option = document.createElement('option');
  option.value = city;
  option.textContent = city;
  citySelect.appendChild(option);
}

document.addEventListener('DOMContentLoaded', function () {
  const dateInput = document.getElementById('date');
  const today = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
  dateInput.setAttribute('min', today);
});

// Update siteSelect based on the selected city
citySelect.addEventListener('change', function () {
  // Clear previous site options
  siteSelect.innerHTML = '<option value="">--Select a Site--</option>';

  // Get the selected city
  const selectedCity = citySelect.value;

  // Check if the city is in the sitesData object
  if (sitesData[selectedCity]) {
    // Populate siteSelect with the corresponding sites
    sitesData[selectedCity].forEach(function (site) {
      let option = document.createElement('option');
      option.value = site;
      option.textContent = site;
      siteSelect.appendChild(option);
    });
  }
});

function generateTicketId() {
  const now = new Date();
  const timestamp = now.getTime();
  const random = Math.floor(Math.random() * 1000);
  return `TICKET-${timestamp}-${random}`;
}

async function generateQRCode(text) {
  try {
    return await QRCode.toDataURL(text, { errorCorrectionLevel: 'H' });
  } catch (err) {
    toastr.error('Error generating QR code:', err);
    return '';
  }
}

nextPayButton.addEventListener('click', async function () {
  const name = document.getElementById('name').value;
  const city = citySelect.value;
  const site = siteSelect.value;
  const ticketType = document.getElementById('ticketType').value;
  const date = document.getElementById('date').value;

  if (!name || !city || !site || !ticketType || !date) {
    toastr.error('Please fill in all the fields.');
    // button.disabled = false;
    return;
  }

  // Show the Razorpay payment button form
  document.getElementById('paymentForm').style.display = 'block';

  // Show the Generate Ticket button
  generateTicketButton.style.display = 'block';

  // Add an event listener to the Generate Ticket button
  generateTicketButton.addEventListener('click', async function () {
    const ticketId = generateTicketId();
    const ticketInfo = `Ticket ID: ${ticketId}\nName: ${name}\nCity: ${city}\nSite: ${site}\nTicket Type: ${ticketType}\nDate: ${date}`;
    const qrCodeDataUrl = await generateQRCode(ticketInfo);

    // Show ticket preview
    document.getElementById('ticketIdPreview').innerText = `Ticket ID: ${ticketId}\nName: ${name}\nCity: ${city}\nSite: ${site}\nTicket Type: ${ticketType}\nDate: ${date}`;
    document.getElementById('ticketQR').innerHTML = `<img src="${qrCodeDataUrl}" alt="QR Code" />`;

    // Generate PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text('Cultural Site Ticket', 20, 20);
    doc.text(`Ticket ID: ${ticketId}`, 20, 30);
    doc.text(`Name: ${name}`, 20, 40);
    doc.text(`City: ${city}`, 20, 50);
    doc.text(`Site: ${site}`, 20, 60);
    doc.text(`Ticket Type: ${ticketType}`, 20, 70);
    doc.text(`Date: ${date}`, 20, 80);

    // Add QR Code to PDF directly from the generated base64 URL
    doc.addImage(qrCodeDataUrl, 'PNG', 20, 90, 40, 40);

    // Save PDF
    doc.save(`Ticket_${ticketId}.pdf`);

    // Show success notification
    toastr.success('Ticket generated and PDF saved successfully!');
  });
});