<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Page Tite</title>
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
		<h1>Heres Your Omikuji</h1>
		<div class="omikuji">
			<h2>
			In <c:out value="${years}"/> years, you will
			live in <c:out value="${city}"/> with 
			<c:out value="${name}"/> as your
			room-mate. <c:out value="${hobby}"/>
			for a living. The next time you see a 
			<c:out value="${livingThing}"/> you will
			have good luck.  Also, <c:out value="${nice}"/>
			</h2>
		</div>
		<div>
			<p>Thank you <c:out value="${from}"/></p>
			<p>Your Omikuji has been sent</p>
			<a href="/omikuji">Go Back</a>
		</div>
    </div>
    
    <!-- <script type="text/javascript" src="js/script.js"></script> -->
</body>
</html>


