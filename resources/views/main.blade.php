@extends('pages.welcome')

@section("content")
    <div class="main-nav" id = "main-nav"></div>
    <div id="main-particles-container"></div>
    <header class="welcome-header">NBP-rates</header>
    <section class="courses-container">
        <div class="currency-container-header">
            <div class="code-container">
                Code
            </div>
            <div class="bid-container">
                Bid
            </div>
            <div class="ask-container">
                Ask
            </div>
        </div>    
        @foreach( $currencyData as $row)
            <div class="currency-container">
                <div class="code-container">
                    {{ $row->code }}
                </div>
                <div class="bid-container">
                    {{ $row->bid }}
                </div>
                <div class="ask-container">
                    {{ $row->ask }}
                </div>
            </div>        
        @endforeach
    </section>
@endsection