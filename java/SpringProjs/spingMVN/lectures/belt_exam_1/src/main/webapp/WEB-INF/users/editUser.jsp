<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Edit User</title>
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
			<h1>Edit User</h1>
    		<a href="/home">Home</a>
    		<a href="/logout">Logout</a>
    	</div>
		<form:form action="/users/edit/${user.id}" method="POST" modelAttribute="user">
			<input type="hidden" name="_method" value="put">
			<p>
				<form:label path="username">Username: </form:label>
				<form:input path="username"/>
				<form:errors path="username"/>
			</p>
			<p>
				<form:label path="email">Email: </form:label>
				<form:input path="email"/>
				<form:errors path="email"/>
			</p>
			<input type="submit" value="Submit">
		</form:form>
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>