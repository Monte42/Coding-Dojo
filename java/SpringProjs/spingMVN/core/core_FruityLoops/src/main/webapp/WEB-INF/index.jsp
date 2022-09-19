<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Hoppers</title>
        <!-- for Bootstrap CSS -->
		<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
		<!-- YOUR own local CSS -->
		<link rel="stylesheet" href="/css/main.css"/>
		<!-- For any Bootstrap that uses JS or jQuery-->
		<script src="/webjars/jquery/jquery.min.js"></script>
		<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/css/master.css">
    </head>
<body>

    <div class="container">
		<h1>Fruit Store</h1>
		
		<table>
			<tr>
				<th>Name</th>
				<th>Price</th>
			</tr>
			<c:forEach var="item" items="${purchasedItems}">
				<tr>
					<td>$<c:out value="${item.name}" /></td>
					<td>$<c:out value="${String.format('%.2f',item.price)}" /></td>
				</tr>
			</c:forEach>
		</table>		

    </div>
    
    <script type="text/javascript" src="js/script.js"></script>
</body>
</html>


