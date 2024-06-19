const districts = {
    '1': ['Bhojpur', 'Dhankuta', 'Ilam', 'Jhapa', 'Khotang', 'Morang', 'Okhaldhunga', 'Panchthar', 'Sankhuwasabha', 'Solukhumbu', 'Sunsari', 'Taplejung', 'Terhathum', 'Udayapur'],
    '2': ['Bara', 'Dhanusha', 'Mahottari', 'Parsa', 'Rautahat', 'Saptari', 'Sarlahi', 'Siraha'],
    '3': ['Bhaktapur', 'Chitwan', 'Dhading', 'Dolakha', 'Kathmandu', 'Kavrepalanchok', 'Lalitpur', 'Makwanpur', 'Nuwakot', 'Ramechhap', 'Rasuwa', 'Sindhuli', 'Sindhupalchok'],
    '4': ['Baglung', 'Gorkha', 'Kaski', 'Lamjung', 'Manang', 'Mustang', 'Myagdi', 'Nawalpur', 'Parbat', 'Syangja', 'Tanahun'],
    '5': ['Arghakhanchi', 'Banke', 'Bardiya', 'Dang', 'Gulmi', 'Kapilvastu', 'Parasi', 'Palpa', 'Pyuthan', 'Rolpa', 'Rukum (East)', 'Rupandehi'],
    '6': ['Dailekh', 'Dolpa', 'Humla', 'Jajarkot', 'Jumla', 'Kalikot', 'Mugu', 'Rukum (West)', 'Salyan', 'Surkhet'],
    '7': ['Achham', 'Baitadi', 'Bajhang', 'Bajura', 'Dadeldhura', 'Darchula', 'Doti', 'Kailali', 'Kanchanpur']
};

function updateDistricts(addressType) {
    const province = document.getElementById(`${addressType}-province`).value;
    const districtContainer = document.getElementById(`${addressType}-district-container`);
    const districtSelect = document.getElementById(`${addressType}-district`);
    districtSelect.innerHTML = '<option value="" selected>Select District</option>'; // Reset districts

    if (districts[province]) {
        districts[province].forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.text = district;
            districtSelect.add(option);
        });
        districtContainer.style.display = 'block';
    } else {
        districtContainer.style.display = 'none';
    }
    resetLocalityFields(addressType);
}

function copyPermanentToTemporary() {
    document.getElementById('temporary-province').value = document.getElementById('province').value;
    updateDistricts('temporary');
    setTimeout(() => {
        document.getElementById('temporary-district').value = document.getElementById('permanent-district').value;
        document.getElementById('temporary-localBody').value = document.getElementById('permanent-localBody').value;
        document.getElementById('temporary-wardNo').value = document.getElementById('permanent-wardNo').value;
        document.getElementById('temporary-marga').value = document.getElementById('permanent-marga').value;
        document.getElementById('temporary-tole').value = document.getElementById('permanent-tole').value;
        document.getElementById('temporary-phoneNo').value = document.getElementById('permanent-phoneNo').value;
        document.getElementById('temporary-mobileNo').value = document.getElementById('permanent-mobileNo').value;
        document.getElementById('temporary-email').value = document.getElementById('permanent-email').value;
    }, 100); // Add delay to ensure districts are populated before setting value
}
// photo section //
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const preview = document.getElementById('imagePreview');
    const previewImg = document.getElementById('previewImg');
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = function() {
        previewImg.src = reader.result;
        preview.style.display = 'block'; // Show the preview field
    };
    
    if (file) {
        reader.readAsDataURL(file);
    } else {
        previewImg.src = '';
        preview.style.display = 'none'; // Hide the preview field if no file is chosen
    }
});

function copyTemporaryToPermanent() {
    var temporaryAddress = document.getElementById('temporaryAddress').value;
    document.getElementById('permanentAddress').value = temporaryAddress;
    // Get the input element
const imageUpload = document.getElementById('imageUpload');

// Add an event listener to detect file upload
imageUpload.addEventListener('change', function() {
  // Get the selected file
   const file = imageUpload.files[0];

  // Create a FileReader object
  const reader = new FileReader();

  // Set up the reader's onload event handler
  reader.onload = function(e) {
    // Get the image data URL
    const imageDataUrl = e.target.result;

    // Display the uploaded image
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.src = imageDataUrl;
  };

  // Read the selected file as Data URL
  reader.readAsDataURL(file);
});
}
