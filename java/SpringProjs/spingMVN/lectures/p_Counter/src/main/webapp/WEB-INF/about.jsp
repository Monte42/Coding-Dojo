<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>About Counter</title>
        <!-- for Bootstrap CSS -->
		<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
		<!-- YOUR own local CSS -->
		<link rel="stylesheet" href="/css/main.css"/>
		<!-- For any Bootstrap that uses JS or jQuery-->
		<script src="/webjars/jquery/jquery.min.js"></script>
		<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
        <!-- <link rel="stylesheet" type="text/css" href="/css/master.css"> -->
    </head>
<body>

    <div class="container">
    	<h1>How Many Times Have You Visited The Home Page?</h1>
    	<button>
			<a href="/logout">Logout</a>
		</button>
    	
    	<c:choose>
    		<c:when test="${count == null}">
    		<h3>You have not visited the home page yet</h3>
    		<h3><a href="/">Check it out?</a></h3>
    		</c:when>
    		<c:otherwise>
				<h3>You have visited <a href="/">"The Counter"</a> <c:out value="${count}"/> time(s).</h3>
				<h3><a href="/">Test another visit?</a></h3>
				<h3><a href="/double">Would you like to count by 2?</a></h3>
    		</c:otherwise>
    	</c:choose>
 
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>


