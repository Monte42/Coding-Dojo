<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Omikuji</title>
        <!-- for Bootstrap CSS -->
		<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
		<!-- YOUR own local CSS -->
		<link rel="stylesheet" href="/css/main.css"/>
		<!-- For any Bootstrap that uses JS or jQuery-->
		<script src="/webjars/jquery/jquery.min.js"></script>
		<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/css/master.css">
    </head>
<body>

    <div class="container">
		<h1>Send an Omikuji</h1>
		<form action="/omikuji/send" method="POST">
			<label>
				Who's it from:
				<input type="text" name="from" />
			</label>
			<label>
				Pick a number between 5 to 25:
				<input type="number" name="years" />
			</label>
			<label>
				Enter the name of any city:
				<input type="text" name="city" />
			</label>
			<label>
				Enter the name of any real person:
				<input type="text" name="name" />
			</label>
			<label>
				Enter a professional endeavor or hobby:
				<input type="text" name="hobby" />
			</label>
			<label>
				Enter any type of living thing:
				<input type="text" name="livingThing" />
			</label>
			<label>
				Say Something nice to someone:
				<textarea rows="5" cols="30" name="nice"></textarea>
			</label>
			<p>Send and show a friend</p>
			<input type="submit" value="Send">
		</form>
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>


