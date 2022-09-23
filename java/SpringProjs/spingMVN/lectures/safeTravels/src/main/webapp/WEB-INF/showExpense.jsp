<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %> 
<%@ page isErrorPage="true" %>  
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title><c:out value="${expense.title}"/></title>
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
    	<div class="flex-wrapper flex-around">
	    	<h1>Expense Details</h1>
    		<a href="/expenses">Go Back</a>
    	</div>
    	<br><br>
		<div class="text-center">
			<h2>Expense: <c:out value="${expense.title}"/></h2>
			<h2>Vendor: <c:out value="${expense.vendor}"></c:out></h2>
			<h2>Description:</h2>
			<h3>&nbsp;&nbsp;&nbsp;<c:out value="${expense.description}"></c:out></h3>
			<h2>Amount: $<c:out value="${String.format('%.2f', expense.amount)}"></c:out></h2>
		</div>
    	
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>


