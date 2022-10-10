<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Edit Song</title>
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
			<h1>Add to <c:out value="${song.title}"/></h1>
    		<a href="/home">Home</a>
    		<a href="/logout">Logout</a>
    	</div>
		<br>
		
		<form:form action="/songs/edit/${song.id}" method="POST" modelAttribute="newEdit">
			<input type="hidden" name="_method" value="put">
			<form:errors class="error" path="title"/>
			<p class="flex-wrapper flex-between-justify" style="width:40%;">
				<form:label path="title">Song Title: </form:label>
				<form:input path="title" value="${song.title}"/>
			</p>
			<form:errors class="error" path="genre"/>
			<p class="flex-wrapper flex-between-justify" style="width:40%;">
				<form:label path="genre">Genre: </form:label>
				<form:input path="genre" value="${song.genre}"/>
			</p>
			<p style="width:40%; padding-left: 20%;">
				<c:out value="${song.lyrics}"/>
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
		
		<div class="flex-wrapper flex-gap">
		<a href="/home">Cancel</a>
		<p> | </p>
		<c:if test="${userId==song.user.id}">
			<form:form action="/songs/delete/${song.id}" method="POST">
				<input type="hidden" name="_method" value="delete">
				<input type="submit" value="Delete">
			</form:form>
		</c:if>			
		</div>
		
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>