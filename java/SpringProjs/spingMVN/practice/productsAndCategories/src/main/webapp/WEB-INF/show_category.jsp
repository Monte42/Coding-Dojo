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

    <h1>${category.name}</h1>
	<p><a href="/">Home</a></p>
	<hr>
	
	<h3>Products:</h3>
	<ul>
		<c:forEach var="product" items="${assignedProducts}">
			<li><c:out value="${product.name}"></c:out></li>
		</c:forEach>
	</ul>
	<hr>
	<form action="/categories/${id}" method="post">
		<h4>Add Product:</h4>				
		<select name="productId" id="productId" class="input">
		    <c:forEach var="product" items="${unassignedProducts}">
		    	<option value="${product.id}">${product.name}</option>
		    </c:forEach>
		</select>
		<input class="input" class="button" type="submit" value="Add"/>
	</form>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>