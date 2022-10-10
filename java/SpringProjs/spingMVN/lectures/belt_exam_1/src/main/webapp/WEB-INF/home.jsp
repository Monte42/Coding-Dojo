<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Lyrics Lab</title>
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
			<h3>Welcome, <c:out value="${username}"/></h3>
    		<a href="/logout">Logout</a>
    	</div>
    	<br><br>
    	<h1>All Songs Labs</h1>
		<hr><br>
		
		
		<table>
			<tr>
				<th>Song</th>
				<th># of Collaborations</th>
			</tr>
			<c:forEach var="song" items="${songs}">
				<tr>
					<td>
						<h4><a href="/songs/${song.id}"><c:out value="${song.title}"/></a></h4>
						Genre: <c:out value="${song.genre}"/>
					</td>
					<td class="text-center">
						<c:out value="${song.collabs}"/>
					</td>
				</tr>
			</c:forEach>
		</table>
		<br><br>
		<button><a href="/songs/new">< New Song</a></button>

    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>