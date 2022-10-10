<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Book Share</title>
        <!-- for Bootstrap CSS -->
		<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" /> 
		<script src="/webjars/jquery/jquery.min.js"></script> 
		<script src="/webjars/bootstrap/js/bootstrap.min.js"></script> 
		<!-- MY LINKS -->
        <link rel="stylesheet" type="text/css" href="/css/master.css"> 
    </head>
<body>

    <div class="container">
    
    	<div class="flex-wrapper flex-between-justify">
		<h1>Add a Book to Your Shelf</h1>    	
    	<a href="/books">Back to the shelves</a>
    	</div>
		
		<div style="margin-bottom: 30px">
			<form:errors class="error" path="title"/>
			<form:errors class="error" path="author"/>
			<form:errors class="error" path="thoughts"/>
		</div>
	
		<form:form action="#" method="POST" modelAttribute="book">
			<p>
				<form:label path="title">Title: </form:label>
				<form:input path="title"/>
			</p>
			<p>
				<form:label path="author">Author:  </form:label>
				<form:select path="author">
					<c:forEach var="auth" items="${authors}">
						<form:option value="${auth.id}"><c:out value="${auth.name}"/></form:option>
					</c:forEach>
				</form:select>
			</p>
			<p>
				<form:label path="thoughts">Thoughts: </form:label>
				<form:textarea path="thoughts"/>
			</p>
			<input type="submit" value="Submit">
		</form:form>
    
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>