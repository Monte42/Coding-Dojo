<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Read Share</title>
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
    		<div>
				<h1>Hello <c:out value="${username}"/></h1>
				<h4>Books from everyones shelves</h4>    		
    		</div>
    		<div class="text-right">
    			<a href="/logout">Logout</a> <br>
    			<a href="/books/new">+ Add to my shelf!</a>
    		</div>
    	</div>
		<br><br>
		
		<table class="table table-striped">
			<tr>
				<th>ID</th>
				<th>Title</th>
				<th>Author</th>
				<th>Posted By</th>
			</tr>
			<c:forEach var="book" items="${books}">
				<tr>
					<td><c:out value="${book.id}"/></td>
					<td><a href="/books/${book.id}"><c:out value="${book.title}"/></a></td>
					<td><c:out value="${book.author}"/></td>
					<td><a href="/users/${book.postedBy.id}"><c:out value="${book.postedBy.username}"/></a></td>
				</tr>
			</c:forEach>
		</table>
    
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>