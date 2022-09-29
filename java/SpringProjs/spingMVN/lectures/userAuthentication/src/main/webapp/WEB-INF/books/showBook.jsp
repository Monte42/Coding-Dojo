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
			<h1><c:out value="${book.title}"/></h1>
    		<a href="/books">Back to the shelves</a>
    	</div>
		<br><br>
			
		<c:choose>
			<c:when test="${book.postedBy.id == userId}">
				<h3>
					You have read <c:out value="${book.title}"/> by <c:out value="${book.author}"></c:out>
				</h3>
			</c:when>
			<c:otherwise>
				<h3>
					<a href="/users/${book.postedBy.id}"><c:out value="${book.postedBy.username}"/></a> read <c:out value="${book.title}"/> by <c:out value="${book.author}"></c:out>
				</h3>
			</c:otherwise>
		</c:choose>
		<br>

		<c:choose>
			<c:when test="${book.postedBy.id == userId}">
				<h3>
					Here are your thoughts
				</h3>
			</c:when>
			<c:otherwise>
				<h3>
					Here are <c:out value="${book.postedBy.username}"/> thoughts:
				</h3>
			</c:otherwise>
		</c:choose>
		
		<div style="border-top: 1px solid black; border-bottom: 1px solid black; margin: 60px auto; width:60%;">
			<br>
			<h4><c:out value="${book.thoughts}"></c:out></h4>
			<br>
		</div>
		<br><br>
		
		<c:if test="${book.postedBy.id == userId}">
			<div class="flex-wrapper flex-gap">
				<button><a href="/books/edit/${book.id}">Edit</a></button>
				<form:form action="/books/delete/${book.id}" method="POST">
					<input type="hidden" name="_method" value="delete">
				    <input type="submit" value="Delete">
				</form:form>
			</div>
		</c:if>
		
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>