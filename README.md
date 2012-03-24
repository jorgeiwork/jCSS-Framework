#jCSS Framework

Think of this as the essentials to the 960 Grid System, this allowed it to become a full framework, then just a layout system. 

##Folders:
* Demo (This contains a demo of the framework)
* Framework (This has all the files you need to use the framework)


To begin your project you just need to add the following folders:

Go to Framework folder:

    /Images  <-Copy to your project root folder
    /CSS     <-Copy to your project root folder
    /js	  <-Copy to your project root folder

    
Then add the following head code to all your HTML pages:

    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" type="text/css" href="css/base.css">
    <link rel="stylesheet" type="text/css" href="css/typography.css"/>
    <link rel="stylesheet" type="text/css" href="css/960fluid.css">
    <link rel="stylesheet" type="text/css" media="print" href="css/print.css">
    <link rel="stylesheet" type="text/css" href="css/styles.css"> 
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <!--[if lt IE 9]>
    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <title>Change me please with your tittle page!</title>
    </head>

###What is content of these files:

    base.css 	- This are all the basic html tags basic styles including you reset code.

    typography.css 	- All Fonts Typography styles, icon set classes & hightlights classes. Refer to typography.html for code samples

    960fluid.css	- This is the 960 Grid System for your layout with its require media queries for screensizes

    print.css	- This is the print styles sheet for when users like to print page.

    styles.css	- This is where you can add your own styles and build your website. NOTE: This files includes a simple navigation style, please remove if you are not going to use it.

    jquery.min.js	- This is JQuery file from google CDN
    html5.js	- This allowes the use of common html 5 tag on older browsers.

Remember this is only a framework to help you get started on building your website please go check out 960.gs for help on how to use the 960 Grid system to layout your site.

###Enjoy!

###Contact me with any questions at: [jorge@jorgeiraheta.com](http://mailto:jorge@jorgeiraheta.com) - [http://www.jorgeiraheta.com](http://www.jorgeiraheta.com) 

