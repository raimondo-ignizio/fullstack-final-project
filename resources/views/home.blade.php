@extends('layouts.app')

@section('content')
<div id="container">
  <main class="sm:container sm:mx-auto sm:mt-10">
      <div class="w-full sm:px-6 logo-container">

          @if (session('status'))
              <div class="text-sm border border-t-8 rounded text-green-700 border-green-600 bg-green-100 px-3 py-4 mb-4" role="alert">
                  {{ session('status') }}
              </div>
          @endif

          <section class="flex flex-col break-words sm:border-1 sm:rounded-md sm:shadow-sm sm:shadow-lg">

              <header class="form-header">
                  <img src="icons/site-logo-2.svg" id="home-logo"/>
              </header>

              <div class="w-full p-6">
                  <p class="text-gray-700">
                      Welcome, {{ Auth::user()-> name }}!
                  </p>

                  <a href="book-form" class="home-link">Add a book</a>
                  <a href="my-books" class="home-link">My books</a>
                  <a href="to-read-list" class="home-link">My to-read list</a>
              </div>
          </section>
      </div>
  </main>
</div>
@endsection
