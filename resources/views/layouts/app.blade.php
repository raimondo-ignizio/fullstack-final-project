<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <link rel="icon" href="{{ url('icons/site-logo.svg')}}">
</head>
<body class="bg-gray-100 h-screen antialiased leading-none font-sans">
    <div id="app">
        <header class="bg-blue-900 py-6 main-header">
          <a href="home"><img src="icons/site-logo-2.svg" id="header-logo"/></a>
            <div id="user">
                <nav class="space-x-4 text-gray-300 text-sm sm:text-base">
                    @guest
                    @else
                        <span>{{ Auth::user()->name }}</span>

                        <a href="{{ route('logout') }}"
                           class="no-underline hover:underline"
                           onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();">{{ __('Esci') }}</a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="hidden">
                            {{ csrf_field() }}
                        </form>
                    @endguest
                </nav>
            </div>
        </header>

        @yield('content')
    </div>
  <footer>
    <div id="copyright">
      <p>Copyright © 2021 Libramente</p>
    </div>
    <div id="social">
      <a href="#"><img src="icons/facebook-icon.svg"/></a>
      <a href="#"><img src="icons/twitter-icon.svg"/></a>
      <a href="#"><img src="icons/instagram-icon.svg"/></a>
    </div>
  </footer>
</body>
</html>
