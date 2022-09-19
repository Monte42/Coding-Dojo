<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Hoppers</title>
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
    <div class="flex-wrapper">
    	<h1><strong>Customer Name:</strong> <c:out value="${name}" /></h1>
	    <h2><strong>Item Name:</strong> <c:out value="${itemName}" /></h2>
	    <h2><strong>Price:</strong> $<c:out value="${price}" /></h2>
	    <h2><strong>Description:</strong> <c:out value="${description}" /></h2>
	    <h2><strong>Vendor:</strong> <c:out value="${vendor}" /></h2>
    </div>
    
    <div class="input-group">
	  <span class="input-group-text">$</span>
	  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
	  <span class="input-group-text">.00</span>
	</div>
    
	<button type="button" class="btn btn-secondary">Secondary</button>
    <br><br>
    <h2>My Vehicles:</h2>
    <c:forEach var="vehicle" items="${vehicles}">
    	<h3><c:out value="${vehicle}"></c:out></h3>
    </c:forEach>
    
    <script type="text/javascript" src="js/script.js"></script>
</body>
</html>

