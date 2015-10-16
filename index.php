<!doctype html>
<html lang="en" ng-app="app">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="description" content="">
    <meta name="">
    <meta name="application-name" content="">

    <!-- AngularJS / IE: http://stackoverflow.com/a/22005047/1830334 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

    <!-- These tags specify how content is displayed on various social media sites -->
    <!-- cf. OpenGraph: http://ogp.me/ -->
    <meta property="og:url" content="">
    <meta property="og:image" content="">

    <!-- These tags specify how content is displayed on a Twitter feed -->
    <meta name="twitter:card" content="">
    <meta name="twitter:image" content="">

    <title>Mount Sinai IDG-KMC</title>

    <link rel="shortcut icon" href="">

	<!-- CSS -->
	<link rel="stylesheet" href="app/styles/common.css">

    <!-- Google Analytics -->
    <!-- TODO -->
</head>

<body>
    <!-- This pushes the footer to the bottom. -->
    <div id="wrapper">

        <!-- This creates the top level header that spans the entire width -->
        <div ng-include="'app/nav/nav.html'"></div>

        <!-- ng-view is used rather than ng-include to handle routing. -->
        <div id="content-wrapper" class="container" ng-view></div>
    </div>

    <div ng-include="'app/footer/footer.html'"></div>
    
	<!-- ************************* Libraries ************************* -->
	<script src="lib/jquery/jquery.js"></script>

    <script src="lib/angular/angular.js"></script>
	<script src="lib/angular/angular-route.js"></script>

	<script src="lib/underscore/underscore.js"></script>

	<link href="lib/bootstrap/css/bootstrap.css" rel="stylesheet"/>
	<script src="lib/bootstrap/js/bootstrap.js"></script>
	
	<!-- ************************ Application ************************ -->

	<!-- Routes -->
	<script type="text/javascript" src="app/app.js"></script>
</body>
</html>
