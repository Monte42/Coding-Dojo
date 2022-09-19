<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ninja Gold</title>
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
		<div class="flex-wrapper flex-gap">
			<h1>Your Gold:</h1>
			<h1 class="simple-border text-right" style="width:100px;">
				<c:out value="${gold}"/>
			</h1>
			<a href="/reset">Reset Game</a>
		</div>
		<br><c:out value="${msg}"/><br>
		<div class="flex-wrapper flex-around wrap-flex">
			<article class="simple-border text-center padding-20 top-margin-20">
				<h2>Farm</h2>
				<h3>(earns 10-20 gold)</h3>
				<form action="/gold/10/20" method="POST">
                    <input type="hidden" name="task" value="farm">
					<input type="submit" value="Find Gold">
				</form>
			</article>
			<article class="simple-border text-center padding-20 top-margin-20">
				<h2>Cave</h2>
				<h3>(earns 5-10 gold)</h3>
				<form action="/gold/5/10" method="POST">
                    <input type="hidden" name="task" value="cave">
					<input type="submit" value="Find Gold">
				</form>
			</article>
			<article class="simple-border text-center padding-20 top-margin-20">
				<h2>House</h2>
				<h3>(earns 2-5 gold)</h3>
				<form action="/gold/2/5" method="POST">
                    <input type="hidden" name="task" value="house">
					<input type="submit" value="Find Gold">
				</form>
			</article>
			<article class="simple-border text-center padding-20 top-margin-20">
				<h2>Quest</h2>
				<h3>(earn/lose 50 gold)</h3>
				<form action="/gold/-50/50" method="POST">
                    <input type="hidden" name="task" value="quest">
					<input type="submit" value="Find Gold">
				</form>
			</article>
			<article class="simple-border text-center padding-20 top-margin-20">
				<h2>Spa</h2>
				<h3>(Spend 5-20 gold)</h3>
				<form action="/gold/-15/-5" method="POST">
                    <input type="hidden" name="task" value="spa">
					<input type="submit" value="Find Gold">
				</form>
			</article>
		</div>
		<div style="width:90%; height:200px; background: lightgray;" class="overflow-scroll simple-border top-margin-20">
			<c:forEach var="action" items="${actions}">
				<p style="color:${action[1]};"><c:out value="${action[0]}"/></p>
			</c:forEach>
		</div>
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>


