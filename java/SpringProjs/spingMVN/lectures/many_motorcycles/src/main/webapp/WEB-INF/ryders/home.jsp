<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ryders Club</title>
        <!-- for Bootstrap CSS -->
		<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" /> 
		<script src="/webjars/jquery/jquery.min.js"></script> 
		<script src="/webjars/bootstrap/js/bootstrap.min.js"></script> 
		<!-- MY LINKS -->
        <link rel="stylesheet" type="text/css" href="/css/master.css"> 
    </head>
<body>

    <div class="container">
		<h1>Welcome <c:out value="${username}"/></h1>
		<div class="flex-wrapper flex-around-justify">
			<a href="/ryders/my_garage">My Garage</a>
			<a href="/bikes/new">New Bike</a>
			<a href="/brands/new">New Brand</a>
			<a href="/logout">Logout</a>
		</div>
		<br><br>
		
		<div class="flex-wrapper flex-around-justify">
			<div>
				<table>
					<c:forEach var="ryder" items="${ryders}">
						<tr>
							<td><c:out value="${ryder.username}"/></td>
							<td><a href="/ryders/${ryder.id}">View</a></td>
						</tr>
					</c:forEach>
				</table>
			</div>
			
			<div style="width:2px;height:400px;border:1px solid black;"></div>
			
			<div>
				<table>
					<c:forEach var="bike" items="${bikes}">
						<tr>
							<td><c:out value="${bike.year}"/></td>
							<td><c:out value="${bike.make.name}"/></td>
							<td><c:out value="${bike.model}"/></td>
							<td><a href="/bikes/${bike.id}">View</a></td>
						</tr>
					</c:forEach>
				</table>
			</div>
		</div>
		
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>