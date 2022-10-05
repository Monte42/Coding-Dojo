<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>My Garage</title>
        <!-- for Bootstrap CSS -->
		<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" /> 
		<script src="/webjars/jquery/jquery.min.js"></script> 
		<script src="/webjars/bootstrap/js/bootstrap.min.js"></script> 
		<!-- MY LINKS -->
        <link rel="stylesheet" type="text/css" href="/css/master.css"> 
    </head>
<body>

    <div class="container">
		<h1><c:out value="${ryder.username}"/></h1>
		<br><br>
		
		<h2>Garage</h2>
		<c:choose>
			<c:when test="${bikesInGarage.size()==0}">
				<h3>You don't have any bikes yet</h3>
			</c:when>
			<c:otherwise>
				<c:forEach var="bike" items="${bikesInGarage}">
					<table>
						<tr>
							<td><c:out value="${bike.year}"/></td>
							<td><c:out value="${bike.make.name}"/></td>
							<td><c:out value="${bike.model}"/></td>
						</tr>
					</table>
				</c:forEach>
			</c:otherwise>
		</c:choose>
		
		<br><hr><br>
		
		<h2>Add Bike To Garage</h2>
		<h6>Bike not here? Add it <a href="/bikes/new">here</a></h6>
		
		<form action="/ryders/add_bike" method="POST">
			<select name="bikeId">
				<c:forEach var="bike" items="${bikesNotInGarage}">
					<option value="${bike.id}">
						<c:out value="${bike.year}"/>	
						<c:out value="${bike.make.name}"/>	
						<c:out value="${bike.model}"/>	
					</option>
				</c:forEach>
			</select>
			<input type="submit" value="Add">
		</form>
		
		
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>