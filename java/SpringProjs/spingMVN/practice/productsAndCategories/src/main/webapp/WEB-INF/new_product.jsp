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

    <h1>New Product</h1>
	<p><a href="/">Home</a></p>
	<hr>
	
	<form:form action="/products/new" method="post" modelAttribute="product">
	
		<table>
		    <thead>
		    	<tr>
		            <td class="float-left">Name:</td>
		            <td class="float-left">
		            	<form:errors path="name" class="text-danger"/>
						<form:input class="input" path="name"/>
		            </td>
		        </tr>
		        <tr>
		            <td class="float-left">Description:</td>
		            <td class="float-left">
		            	<form:errors path="description" class="text-danger"/>
						<form:input class="input" path="description"/>
		            </td>
		        </tr>        
		        <tr>
		            <td class="float-left">Price:</td>
		            <td class="float-left">
		            	<form:errors path="price" class="text-danger"/>
						<form:input type="number" class="input" path="price"/>
		            </td>
		        </tr>
		        <tr>
		        	<td colspan=2><input class="input" class="button" type="submit" value="Submit"/></td>
		        </tr>
		    </thead>
		</table>
	</form:form>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>