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
		<!-- YOUR own local CSS -->
		<link rel="stylesheet" href="/css/main.css"/>
		<!-- For any Bootstrap that uses JS or jQuery-->
		<script src="/webjars/jquery/jquery.min.js"></script>
		<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/css/master.css">
    </head>
<body>

    <div class="container">
		<h1>Safe Travels</h1>
		<table class="table table-dark table-striped">
			<tr>
				<th>Expense</th>
				<th>Vendor</th>
				<th>Amount</th>
				<th>Actions</th>
			</tr>
			<c:forEach var="expense" items="${expenses}">
				<tr>
					<td>
						<a href="/expenses/${expense.id}">
							<c:out value="${expense.title}"/>
						</a>
					</td>
					<td><c:out value="${expense.vendor}"/></td>
					<td>$<c:out value="${String.format('%.2f',expense.amount)}"/></td>
					<td class="flex-wrapper">
						<button><a href="/expenses/${expense.id}/edit">Edit</a></button> 
						&nbsp;&nbsp;|&nbsp;&nbsp;
						<form action="/expenses/${expense.id}/delete" method="POST">
				    		<input type="hidden" name="_method" value="delete">
				    		<input type="submit" value="Delete">
				    	</form>
					</td>
				</tr>			
			</c:forEach>
		</table>
		<h2>Add an Expense</h2>
		<form:form action="/expenses/new" method="post" modelAttribute="expense">
		      <p>
		        <form:label path="title">Title</form:label>
		        <form:errors path="title"/>
		        <form:input path="title"/>
		    </p>
		    <p>
		        <form:label path="vendor">Vendor</form:label>
		        <form:errors path="vendor"/>
		        <form:input path="vendor"/>
		    </p>
		    <p>
		        <form:label path="description">Description</form:label>
		        <form:errors path="description"/>
		        <form:textarea path="description"/>
		    </p>
		    <p>
		        <form:label path="amount">Amount</form:label>
		        <form:errors path="amount"/>     
		        <form:input type="number" min="0.1" step="0.01" path="amount"/>
		    </p>  
		    <input type="submit" value="Submit"/>
		</form:form>
		
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>


