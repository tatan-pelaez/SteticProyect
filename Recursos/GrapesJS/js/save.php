<?php
	$editor_html_content = $_POST['htmldata'];
	$editor_css_content = $_POST['cssdata'];
	echo '
		console.log('.$editor_html_content;.');
	';
?>