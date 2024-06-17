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
function resetLocalityFields(addressType) {
    document.getElementById(`${addressType}-local-body-container`).style.display = 'none';
    document.getElementById(`${addressType}-ward-container`).style.display = 'none';
    document.getElementById(`${addressType}-marga-container`).style.display = 'none';
    document.getElementById(`${addressType}-tole-container`).style.display = 'none';
}

// photo section made by jagadish 
// Event listener for form submission
document.getElementById('photoForm').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Get the file input element and the selected file
    const fileInput = document.getElementById('photoInput');
    const file = fileInput.files[0];
    
    // Check if a file is selected
    if (!file) {
        alert('Please upload a photo.');
        return;
    }

    // Allowed file extensions
    const validExtensions = ['image/jpeg', 'image/jpg'];
    
    // Check if the selected file is a JPEG or JPG
    if (!validExtensions.includes(file.type)) {
        alert('Only JPG and JPEG files are allowed.');
        fileInput.value = ''; // Reset the file input
        return;
    }

    // Create a FileReader to read the file
    const reader = new FileReader();
    
    // Event listener for file reading
    reader.onload = function(e) {
        // Get the image element for preview
        const previewImg = document.getElementById('previewImg');
        
        // Set the src of the image element to the file's data URL
        previewImg.src = e.target.result;
        
        // Display the image preview
        document.getElementById('imagePreview').style.display = 'block';
    };
    
    // Read the file as a data URL
    reader.readAsDataURL(file);
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
