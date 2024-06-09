function copyTemporaryToPermanent() {
    var temporaryAddress = document.getElementById('temporaryAddress').value;
    document.getElementById('permanentAddress').value = temporaryAddress;
}
function updateProvinces() {
    const country = document.getElementById('country').value;
    const provinceContainer = document.getElementById('province-container');
    if (country === 'Nepal') {
        provinceContainer.style.display = 'block';
    } else {
        provinceContainer.style.display = 'none';
        resetFields();
    }
}

function updateDistricts() {
    const province = document.getElementById('province').value;
    const districtContainer = document.getElementById('district-container');
    const districtSelect = document.getElementById('district');
    districtSelect.innerHTML = '<option value="" selected>Select District</option>'; // Reset districts

    // Add your districts here based on the province
    const districts = {
        '1': ['District 1', 'District 2', 'District 3'],
        '2': ['District 4', 'District 5', 'District 6'],
        '3': ['District 7', 'District 8', 'District 9'],
        '4': ['District 10', 'District 11', 'District 12'],
        '5': ['District 13', 'District 14', 'District 15'],
        '6': ['District 16', 'District 17', 'District 18'],
        '7': ['District 19', 'District 20', 'District 21']
    };

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
        resetFields();
    }
}

function showLocalityFields() {
    document.getElementById('locality-container').style.display = 'block';
    document.getElementById('village-container').style.display = 'block';
    document.getElementById('ward-container').style.display = 'block';
}

function copyTemporaryToPermanent() {
    const temporaryAddress = document.getElementById('temporaryAddress').value;
    document.getElementById('permanentAddressCopy').value = temporaryAddress;
}

function resetFields() {
    document.getElementById('district-container').style.display = 'none';
    document.getElementById('locality-container').style.display = 'none';
    document.getElementById('village-container').style.display = 'none';
    document.getElementById('ward-container').style.display = 'none';
}


