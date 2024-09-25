document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var form = document.getElementById('myForm');
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', form.action, true);
  xhr.upload.onprogress = function(event) {
      if (event.lengthComputable) {
          var percent = (event.loaded / event.total) * 100;
          console.log('Upload progress: ' + percent + '%');
      }
  };
  xhr.upload.onload = function() {
      console.log('Upload complete');
  };
  xhr.onload = function() {
      if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          if (response.success) {
              console.log('Form submitted successfully');
          } else {
              console.error('Error submitting form: ' + response.error);
          }
      } else {
          console.error('Error submitting form: ' + xhr.statusText);
      }
  };
  xhr.send(formData);
});