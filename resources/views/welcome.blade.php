<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TuniFlix</title>
    <link rel="stylesheet" href="{{ asset('assets/bootstrap/css/bootstrap.min.css') }}">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Raleway:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&amp;display=swap">
    <link rel="stylesheet" href="{{ asset('assets/css/Navbar-Centered-Links-icons.css') }}">
    <link rel="shortcut icon" href="{{ asset('assets/img/logo/logo_without_text.png') }}" type="image/x-icon">
    <link rel="stylesheet" href="{{ asset('assets/css/Hero-Clean-Reverse-images.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/untitled.css') }}">

    <link rel="stylesheet" href="{{ asset('assets/fa/css/all.min.css') }}">
    {{-- <link rel="stylesheet" href="{{ asset('assets/FAPRO/css/all.css') }}"> --}}
    {{-- <link href="{{ asset('assets/FAPRO/css/fontawesome.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/FAPRO/css/brands.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/FAPRO/css/solid.css') }}" rel="stylesheet" /> --}}
    <script src="https://code.jquery.com/jquery-3.6.3.min.js"
        integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>

</head>

<body>
    <div id="body"></div>
</body>
<script src="{{ asset('js/app.js') }}" defer></script>
<script src="{{ asset('assets/bootstrap/js/bootstrap.min.js') }}"></script>
<script>
    $(document).ready(function() {
        $('[data-bs-toggle="tooltip"]').tooltip();
    });
</script>

</html>
