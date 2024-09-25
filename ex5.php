<form id="myForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>
    <input type="submit" value="Submit">
</form>


<?php
if (isset($_POST['submit'])) {
    
    $name = $_POST['name'];
    $email = $_POST['email'];

    
    if (empty($name)) {
        $error = 'Name is required';
    } else if (empty($email)) {
        $error = 'Email is required';
    } else {
        
        $success = 'Form submitted successfully';
    }
    
    if (isset($error)) {
        echo json_encode(array('success' => false, 'error' => $error));
    } else {
        echo json_encode(array('success' => true, 'message' => $success));
    }
}
?>

<script src="script.js"></script>