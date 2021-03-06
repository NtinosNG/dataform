<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

         <!-- CSRF Token -->
         <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Dataform Entry</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="/css/app.css" rel="stylesheet" type="text/css">            
    </head>
    <body>
       <div id="dataformApp"></div>
       <script src="/js/app.js"></script>
     
    </body>
</html>
