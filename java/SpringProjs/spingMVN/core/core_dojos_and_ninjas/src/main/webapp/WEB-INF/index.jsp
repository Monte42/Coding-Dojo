<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %> 
<%@ page isErrorPage="true" %>  
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Dojos</title>
        <!-- for Bootstrap CSS -->
		<!-- <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" /> -->
		<!-- <script src="/webjars/jquery/jquery.min.js"></script> -->
		<!-- <script src="/webjars/bootstrap/js/bootstrap.min.js"></script> -->
		<!-- MY LINKS -->
        <!-- <link rel="stylesheet" type="text/css" href="/css/master.css"> -->
    </head>
<body>

    <div class="container">
		<h1>All Dojos</h1>
		<table>
			<c:forEach var="dojo" items="${dojos}">
			<tr>
				<td>
					<a href="/dojos/${dojo.id}"><c:out value="${dojo.name}"/></a>
				</td>				
			</tr>			
			</c:forEach>
		</table>
		<a href="/dojos/new">New Dojo</a>
		<a href="/ninjas/new">New Ninja</a>
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>


