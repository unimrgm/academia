<?php
    include("components/header.php");
    if (isset($_POST['q_id']) && isset($_POST['answer'])) {
        $data = $_POST['answer'];
        $q_id = $_POST['q_id'];
        require_once "libs/answer.php";
        $answer = new Answer($dbh);
        if (!$answer->addAnswer($q_id, $data)) {
            echo "Sorry Failed !";
        }
        echo "Successfully Answered";
    }
?>
<!DOCTYPE html>
<html lang="en">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
<link href="css/summernote.css" rel="stylesheet">
<body>
<div class="summernote container">
    <div class="row">
        <div class="col-lg-12">
        <h3 style="text-align:center" >Write the answer</h3>
		<form id="postForm" action="answernow.php" method="POST" enctype="multipart/form-data" onsubmit="return postForm()">
            <br/>
            <input type="hidden" name="q_id" value="<?= $_GET['q_id']?>">
			<textarea id="summernote" name="answer" rows="10"></textarea>
			
			<br/>
			<button type="submit" class="btn btn-primary">Submit</button>
			<button type="button" onclick="window.close()" id="cancel" class="btn">Cancel</button>
		    
		</form>
		</div>
		</div>
		
	</div>
</div>

<!-- include libries(jQuery, bootstrap) -->
<script src="js/jquery.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="js/summernote.min.js"></script>

<script type="text/javascript">
$(document).ready(function() {
	$('#summernote').summernote({
		height: "200px",
		styleWithSpan: false
	});
});
function postForm() {

	$('textarea[name="data"]').html($('#summernote').code());
}
</script>
</body>
</html>