<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %> 
<%@ page isErrorPage="true" %>  
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>New Ninja</title>
        <!-- for Bootstrap CSS -->
		<!-- <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" /> -->
		<!-- <script src="/webjars/jquery/jquery.min.js"></script> -->
		<!-- <script src="/webjars/bootstrap/js/bootstrap.min.js"></script> -->
		<!-- MY LINKS -->
        <!-- <link rel="stylesheet" type="text/css" href="/css/master.css"> -->
    </head>
<body>

    <div class="container">
		<h1>Create a New Ninja</h1>
		<form:form action="/ninjas/new" method="POST" modelAttribute="ninja">
			<p>
				<form:label path="firstName">First Name: </form:label>
				<form:errors path="firstName"/>
				<form:input path="firstName"/>
			</p>
			<p>
				<form:label path="lastName">Last Name: </form:label>
				<form:errors path="lastName"/>
				<form:input path="lastName"/>
			</p>
			<p>
				<form:label path="age">Age: </form:label>
				<form:errors path="age"/>
				<form:input type="number" path="age"/>
			</p>
			<p>
				<form:label path="dojo">Dojo: </form:label>
				<form:errors path="dojo"/>
				<form:select path="dojo">
					<c:forEach var="thisDojo" items="${dojos}">
						<form:option value="${thisDojo.id}"><c:out value="${thisDojo.name}"/></form:option>
					</c:forEach>
				</form:select>
			</p>
			<input type="submit" value="Submit">
		</form:form>
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>


