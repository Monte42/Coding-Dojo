<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> -->
<!-- <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  -->
<!-- <%@ page isErrorPage="true" %>   -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Languages</title>
        <!-- for Bootstrap CSS -->
		<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
		<script src="/webjars/jquery/jquery.min.js"></script>
		<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
		<!-- MY LINKS -->
        <!-- <link rel="stylesheet" type="text/css" href="/css/master.css"> -->
    </head>
<body>

    <div class="container">
		<h1>Languages</h1>
		
		<table>
			<tr>
				<th>Name</th>
				<th>Creator</th>
				<th>Version</th>
				<th>Actions</th>
			</tr>
			<c:forEach var="language" items="${languages}">
				<tr>
					<td><a href="/languages/${language.id}"><c:out value="${language.name}"/></a></td>
					<td><c:out value="${language.creator}"/></td>
					<td><c:out value="${language.version}"/></td>
					<td style="display:flex; gap:5px;">
						<button style="border:1px solid black;"><a href="/languages/edit/${language.id}">Edit</a></button> | 
						<form:form action="/languages/delete/${language.id}" method="POST">
							<input type="hidden" name="_method" value="delete"/>
							<input type="submit" value="Delete"/>
						</form:form>
					</td> 
			</tr>
			</c:forEach>
		</table>
		
		<form:form action="/languages/new" method="POST" modelAttribute="language">
			<p>
				<form:label path="name">Language: </form:label>
				<form:errors path="name"/>
				<form:input path="name"/>
			</p>
			<p>
				<form:label path="creator">Creator: </form:label>
				<form:errors path="creator"/>
				<form:input path="creator"/>
			</p>
			<p>
				<form:label path="version">Version: </form:label>
				<form:errors path="version"/>
				<form:input path="version"/>
			</p>
			<input type="submit" value="Submit"/>
		</form:form>
		
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>


