<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> -->
<!-- <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  -->
<!-- <%@ page isErrorPage="true" %>   -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Page Tite</title>
        <!-- for Bootstrap CSS -->
		<!-- <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" /> -->
		<!-- <script src="/webjars/jquery/jquery.min.js"></script> -->
		<!-- <script src="/webjars/bootstrap/js/bootstrap.min.js"></script> -->
		<!-- MY LINKS -->
        <!-- <link rel="stylesheet" type="text/css" href="/css/master.css"> -->
    </head>
<body>

    <div class="container">
		<h1><c:out value="${language.name}"/></h1>
		<h2>Creator: <c:out value="${language.creator}"/></h2>
		<h2>Version: <c:out value="${language.version}"/></h2>
		<button style="border:1px solid black"><a href="/languages/edit/${language.id}">Edit</a></button>
		<form:form action="/languages/delete/${language.id}" method="POST">
			<input type="hidden" name="_method" value="delete"/>
			<input type="submit" value="Delete"/>
		</form:form>
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>


