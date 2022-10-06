<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title><c:out value="${ryder.username}"/></title>
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
		<h1><c:out value="${ryder.username}"/></h1>
			<a href="/ryders">Home</a>
    	</div>
		<br><hr><br>
		<h3>Email: <c:out value="${ryder.email}"/></h3>
		<h3>Date Joined: <c:out value="${ryder.createdAt}"/></h3>
		<br><br>
		<h2><c:out value="${ryder.username}"/>'s Garage</h2>
		<table>
			<c:forEach var="bike" items="${ryder.bikes}">
				<tr>
					<td><c:out value="${bike.year}"/>
					<td><c:out value="${bike.make.name}"/>
					<td><c:out value="${bike.model}"/>
				</tr>
			</c:forEach>
		</table>
		<br>
		
		<c:choose>
			<c:when test="${userId==ryder.id}">
				<div class="flex-wrapper flex-gap">
					<button><a href="/ryders/edit/${ryder.id}">Edit</a></button>
					<span>|</span>
					<form:form action="/ryders/delete/${ryder.id}" method="POST">
						<input type="hidden" name="_method" value="delete">
						<input type="submit" value="Delete">
					</form:form>
				</div>
			</c:when>
		</c:choose>
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>