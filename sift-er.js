/**
*
* COMPONENT: sift-er
*
*
* DESCRIPTION:
*   - Registers the web component that provides basic search capability through an array of strings
*
*
* NOTES:
*   [1] 
*
*
* TODO:
*   [1] 
*
*
* LICENSE: Apache License, Version 2.0
*
*/

(function() {
  'use strict';

  // FUNCTIONS //

  /**
  * FUNCTION: setupSifter( items )
  *   Creates a new Sifter instance from the provided array
  *
  * @param {Array} items - an array of strings of valid items to search through
  * @returns a new Sifter instance that searches through the provided array
  */
  function setupSifter( items ) {
    var sifterItems = [];

    for (var i = 0; i < items.length; i++) {
      sifterItems.push( { title: items[i] } );
    }

    return new Sifter( sifterItems );
  }


  // POLYMER //
  Polymer( 'sift-er', {
    /**
    * METHOD: created()
    *   Polymer hook for when a sifter instance is created.
    */
    created: function() {
      // hint that items will be an array
      this.items = [];
    }, // end METHOD created()

    /**
    * METHOD: ready()
    *   Polymer hook for when a sifter instance is fully ready.
    */
    ready: function() {
      this._sifter = setupSifter( this.items );
    }, // end METHOD ready()

    /**
    * METHOD: itemsChanged()
    *   Polymer hook called when items attribute changes
    */
    itemsChanged: function() {
      this._sifter = setupSifter( this.items );
    },

    /**
    * METHOD: search( query )
    *   Searches the array for the provided query. Returns an array of the closest matches.
    *
    * @param {String} query - the string (or string fragment) to search for in the array
    * @returns an array of the closest matches
    */
    search: function( query ) {
      if ( !query ) {
        return this.items.slice();
      }

      var results = [],
        sifterResults;

      sifterResults = this._sifter.search( query, {
        'fields': [ 'title' ],
        'sort': [
          {
            field: 'title',
            direction: 'asc'
          }
        ],
        'limit': this.items.length
      } );

      for (var i = 0; i < sifterResults.items.length; i++) {
        results.push( this.items[ sifterResults.items[i].id ] );
      }

      return results;
    }

  } );
})();
