sift-er
=======

A Polymer web-component wrapper for [sifter.js](https://github.com/brianreavis/sifter.js/).

## Usage

```
  <link rel="import" href="sift-er.html" />
  <sift-er items="['myString1', 'myString2', 'myString3']"></sift-er>
  <script>
    var s = document.querySelector( 'sift-er' ),
      results = s.search( 'myQuery' );
  </script> 
```

or

```
  var s = document.createElement( 'sift-er' ),
    results;

  s.items = [
    'myString1',
    'myString2',
    'myString3'
  ];

  results = s.search( 'myQuery' );
```
