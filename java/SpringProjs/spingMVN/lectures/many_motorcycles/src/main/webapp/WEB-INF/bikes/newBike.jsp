<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Add A Bike</title>
        <!-- for Bootstrap CSS -->
		<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" /> 
		<script src="/webjars/jquery/jquery.min.js"></script> 
		<script src="/webjars/bootstrap/js/bootstrap.min.js"></script> 
		<!-- MY LINKS -->
        <link rel="stylesheet" type="text/css" href="/css/master.css"> 
    </head>
<body>

    <div class="container">
		<h1>New Bike</h1>
		<br><br>
		
		<form:form action="/bikes/new" method="POST" modelAttribute="bike">
			<p>
				<form:label path="year">Year: </form:label>
				<form:input type="number" path="year" value="1885"/>
				<form:errors class="error" path="year"/>
			</p>
			<p>
				<form:label path="make">Make: </form:label>
				<form:select path="make">
					<c:forEach var="brand" items="${brands}">
						<form:option value="${brand.id}"><c:out value="${brand.name}"/></form:option>
					</c:forEach>
				</form:select>
				<h6>Don't see your brand? Add a brand <a href="/brands/new">here</a></h6>
			</p>
			<p>
				<form:label path="model">Model: </form:label>
				<form:input path="model" placeholder="ZX-6R"/>
				<form:errors class="error" path="model"/>
			</p>
			<p>
				<form:label path="size">Engine Size: </form:label>
				<form:input type="number" path="size" value="49"/>
				<form:errors class="error" path="size"/>
			</p>
			<input type="submit" value="Submit">
		</form:form>
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>