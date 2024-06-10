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

function resetLocalityFields(addressType) {
    document.getElementById(`${addressType}-local-body-container`).style.display = 'none';
    document.getElementById(`${addressType}-ward-container`).style.display = 'none';
    document.getElementById(`${addressType}-marga-container`).style.display = 'none';
    document.getElementById(`${addressType}-tole-container`).style.display = 'none';
}
