@extends('pages.welcome')
@section('content')
    <section class="gold-container">
        <div class="main-nav" id = "main-nav"></div>
        <div id="main-particles-container"></div>
        <header class="welcome-header">Gold courses from the last 50 days</header>
        <div class="chart-container" id="chart-container" courses = {{ $courses }}></div>
    </section>
@endsection