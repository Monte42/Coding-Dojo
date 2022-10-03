<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %> 
<%@ page isErrorPage="true" %>  
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Create Dojo</title>
        <!-- for Bootstrap CSS -->
		<!-- <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" /> -->
		<!-- <script src="/webjars/jquery/jquery.min.js"></script> -->
		<!-- <script src="/webjars/bootstrap/js/bootstrap.min.js"></script> -->
		<!-- MY LINKS -->
        <!-- <link rel="stylesheet" type="text/css" href="/css/master.css"> -->
    </head>
<body>

    <div class="container">
		<h1>Create a New Dojo</h1>
		<form:form action="#" method="POST" modelAttribute="dojo">
			<p>
				<form:label path="name">Dojo Name:</form:label>
				<form:errors path="name"/>
				<form:input path="name"/>
			</p>
			<p>
				<form:label path="location">Location:</form:label>
				<form:errors path="location"/>
				<form:input path="location"/>
			</p>
			<input type="submit" value="Submit"/>
		</form:form>
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>


