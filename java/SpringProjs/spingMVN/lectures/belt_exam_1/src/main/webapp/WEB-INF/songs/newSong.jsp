<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Create New Song</title>
        <!-- for Bootstrap CSS -->
		<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" /> 
		<script src="/webjars/jquery/jquery.min.js"></script> 
		<script src="/webjars/bootstrap/js/bootstrap.min.js"></script> 
		<!-- MY LINKS -->
        <link rel="stylesheet" type="text/css" href="/css/master.css"> 
    </head>
<body>

    <div class="container">
    	<div class="flex-wrapper flex-evenly-justify">
			<h1>Start a New Song</h1>
    		<a href="/home">Home</a>
    		<a href="/logout">Logout</a>
    	</div>
		<br><br>
		
		<form:form action="/songs/new" method="POST" modelAttribute="song">
			<form:errors class="error" path="title"/>
			<p class="flex-wrapper flex-between-justify" style="width:40%;">
				<form:label path="title">Song Title: </form:label>
				<form:input path="title"/>
			</p>
			<form:errors class="error" path="genre"/>
			<p class="flex-wrapper flex-between-justify" style="width:40%;">
				<form:label path="genre">Genre: </form:label>
				<form:input path="genre"/>
			</p>
			<form:errors class="error" path="lyrics"/>
			<p class="flex-wrapper flex-between-justify" style="width:40%;">
				<form:label path="lyrics">Add you lyrics:</form:label>			
				<form:textarea path="lyrics"/>
			</p>
			<p class="text-right" style="width:40%;">
				<input type="submit" value="Submit">
			</p>
		</form:form>
		<br><br>
		
		<a href="/home">Cancel</a>
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>