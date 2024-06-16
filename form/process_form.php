8<?php
// This file will handle the form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['first_name'];
    $middleName = $_POST['middle_name'];
    $lastName = $_POST['last_name'];
    $nationality = $_POST['nationality'];
    $mobileNumber = $_POST['mobile_number'];
    $dob = $_POST['dob'];
    $email = $_POST['email'];
    $course = $_POST['course'];
    $fName = $_POST['f_name'];
    $fOccupation = $_POST['f_occupation'];
    $fMobileNo = $_POST['f_mobile_no'];
    $mName = $_POST['m_name'];
    $mOccupation = $_POST['m_occupation'];
    $mMobileNo = $_POST['m_mobile_no'];
    $gender = $_POST['gender'];
    $country = $_POST['country'];
    $province = isset($_POST['province']) ? $_POST['province'] : '';
    $district = isset($_POST['district']) ? $_POST['district'] : '';
    $locality = isset($_POST['locality']) ? $_POST['locality'] : '';
    $village = isset($_POST['village']) ? $_POST['village'] : '';
    $ward = isset($_POST['ward']) ? $_POST['ward'] : '';
    $temporaryAddress = $_POST['temporaryAddress'];
    $permanentAddressCopy = $_POST['permanentAddressCopy'];
    $temporaryAddress = $_POST['temporaryAddress'];
    $

    // Add your form processing logic here (e.g., save data to database, send email, etc.)

    echo "Form submitted successfully!";
}
?>
