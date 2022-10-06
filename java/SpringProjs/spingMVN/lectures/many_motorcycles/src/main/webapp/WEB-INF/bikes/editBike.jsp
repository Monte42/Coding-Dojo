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

    <div class="container">
    	<div class="flex-wrapper flex-between-justify flex-center-align">
			<h1>Edit Bike</h1>
			<a href="/ryders">Home</a>
    	</div>
    	<br><hr><br>
    	<form:form action="/bikes/edit/${bike.id}" method="POST" modelAttribute="bike">
    		<input type="hidden" name="_method" value="put">
			<p>
				<form:label path="year">Year: </form:label>
				<form:input type="number" path="year"/>
			</p>
			<form:errors class="error" path="year"/>
			<p>
				<form:label path="make">Make: </form:label>
				<form:select path="make">
					<c:forEach var="brand" items="${brands}">
						<c:choose>
							<c:when test="${brand.id==bike.make.id}">
								<form:option selected="true" value="${brand.id}"><c:out value="${brand.name}"/></form:option>							
							</c:when>
							<c:otherwise>
								<form:option value="${brand.id}"><c:out value="${brand.name}"/></form:option>							
							</c:otherwise>
						</c:choose>
					</c:forEach>
				</form:select>
				<h6>Don't see your brand? Add a brand <a href="/brands/new">here</a></h6>
			</p>
			<p>
				<form:label path="model">Model: </form:label>
				<form:input path="model" placeholder="ZX-6R"/>
			</p>
			<form:errors class="error" path="model"/>
			<p>
				<form:label path="size">Engine Size: </form:label>
				<form:input type="number" path="size"/>
			</p>
			<form:errors class="error" path="size"/>
			<input type="submit" value="Submit">
    	</form:form>
    	<br>
    	
    	
    	<form:form action="/bikes/delete/${bike.id}" method="POST">
			<input type="hidden" name="_method" value="delete">
			<input type="submit" value="Delete">
		</form:form>
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>