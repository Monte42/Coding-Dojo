<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Lyrics Lab</title>
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
			<h1><c:out value="${song.title}"/></h1>
    		<a href="/home">Home</a>
    		<a href="/logout">Logout</a>
    	</div>
		<h2>
			(Started By <c:out value="${song.user.firstName}"/> <c:out value="${song.user.lastName}"/>)
		</h2>
		<br><br>
		
		<h3>Genre: <c:out value="${song.genre}"/></h3>
		<br><br>
		
		<h3>Lyrics:</h3>
		<p style="width:50%; margin-left: 40px;">
			<c:out value="${song.lyrics}"/>
		</p>
		
		<button><a href="/songs/edit/${song.id}">< Contribute</a></button>
		<hr><br>
		<h2>Collaborators</h2>
		<h4><a href="/users/${song.user.id}"><c:out value="${song.user.firstName}"/> <c:out value="${song.user.lastName}"/></a></h4>
		<c:forEach var="user" items="${song.users}">
			<h4><a href="/users/${user.id}"><c:out value="${user.firstName}"/> <c:out value="${user.lastName}"/></a></h4>
		</c:forEach>
		
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>