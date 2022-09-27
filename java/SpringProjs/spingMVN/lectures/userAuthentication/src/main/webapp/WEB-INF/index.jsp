<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>LogIn/Register</title>
        <!-- for Bootstrap CSS -->
		<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" /> 
		<script src="/webjars/jquery/jquery.min.js"></script> 
		<script src="/webjars/bootstrap/js/bootstrap.min.js"></script> 
		<!-- MY LINKS -->
        <link rel="stylesheet" type="text/css" href="/css/master.css"> 
    </head>
<body>

    <div class="container">
		<br>
		<h1>Welcome</h1>
		<h3>Join our growing community.</h3>
		<br><br>
		<div class="flex-wrapper flex-between-justify">
			<form:form action="/register" method="POST" modelAttribute="newUser">
				<div style="margin-bottom: 30px;">
					<form:errors path="username"/>
					<form:errors path="email"/>
					<form:errors path="password"/>
					<form:errors path="confirm"/>
				</div>
				<p class="flex-wrapper flex-row flex-between-justify">
					<form:label path="username">Username: </form:label>
					<form:input path="username" type="text"/>
				</p>
				<p class="flex-wrapper flex-row flex-between-justify">
					<form:label path="email">Email: </form:label>
					<form:input path="email" type="email"/>
				</p>
				<p class="flex-wrapper flex-row flex-between-justify">
					<form:label path="password">Password: </form:label>
					<form:input path="password" type="password"/>
				</p>
				<p class="flex-wrapper flex-row flex-between-justify flex-gap">
					<form:label path="confirm">Confirm Password:</form:label>
					<form:input path="confirm" type="password"/>
				</p>
				<input type="submit" value="Sign Up">
			</form:form>
			
			<div style="width:2px;height:400px;border:1px solid black;"></div>
			
			<form:form action="/login" method="POST" modelAttribute="newLogin">
				<div style="margin-bottom: 30px;">
					<form:errors path="email"/>
					<form:errors path="password"/>
				</div>
				<p class="flex-wrapper flex-row flex-between-justify">
					<form:label path="email">Email:</form:label>
					<form:input path="email" type="email"/>
				</p>	
				<p class="flex-wrapper flex-row flex-between-justify flex-gap">
					<form:label path="password">Password: </form:label>
					<form:input path="password" type="password"/>
				</p>	
				<input type="submit" value="Login">			
			</form:form>
		</div>
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>


