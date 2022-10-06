<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Page Tite</title>
        <!-- for Bootstrap CSS -->
		<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" /> 
		<script src="/webjars/jquery/jquery.min.js"></script> 
		<script src="/webjars/bootstrap/js/bootstrap.min.js"></script> 
		<!-- MY LINKS -->
        <link rel="stylesheet" type="text/css" href="/css/master.css"> 
    </head>
<body>

    <div class="container">
    	<div class="flex-wrapper flex-between-justify flex-center-align">
			<h1><c:out value="${bike.make.name}"/></h1>
			<a href="/ryders">Home</a>
    	</div>
		<br><hr><br>
		<h3>Year: <c:out value="${bike.year}"/></h3>
		<h3>Make: <c:out value="${bike.make.name}"/></h3>
		<h3>Model: <c:out value="${bike.model}"/></h3>
		<h3>Engine: <c:out value="${bike.size}"/>cc</h3>
		<br>
		<h2>Who Rides this bike</h2>
		<c:forEach var="ryder" items="${bike.ryders}">
			<h4><a href="/ryders/${ryder.id}"><c:out value="${ryder.username}"/></a></h4>
		</c:forEach>
		<br><br>
		<p><a href="/bikes/edit/${bike.id}">Edit Bike</a>
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>