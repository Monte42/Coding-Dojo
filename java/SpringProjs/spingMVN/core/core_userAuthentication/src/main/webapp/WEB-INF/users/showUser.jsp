<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Show User</title>
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
				<h1><c:out value="${user.username}"/></h1>
				<h3>Email: <c:out value="${user.email}"/></h3>
				<h3>Date Joined: <c:out value="${user.createdAt}"/></h3>
			</div>
			<a href="/books">Back to the shelves</a>
		</div>
		<br><br>
		
		<h2>Books Read</h2>
		<br>
		<table class="table table-striped">
			<tr>
				<th>Title</th>
				<th>Author</th>
			</tr>
			<c:forEach var="book" items="${user.books}">
				<tr>
					<td><a href="/books/${book.id}"><c:out value="${book.title}"/></a></td>
					<td><c:out value="${book.author}"/></td>
			</c:forEach>
		</table>
		<br><br>

		<c:if test="${user.id == userId}">
			<div class="flex-wrapper flex-gap">
				<button><a href="/users/edit/${user.id}">Edit</a></button>
				<form:form action="/users/delete/${user.id}" method="POST">
					<input type="hidden" name="_method" value="delete">
				    <input type="submit" value="Delete">
				</form:form>
			</div>
		</c:if>
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>