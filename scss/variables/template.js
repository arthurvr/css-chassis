// This is just boilerplate don't worry about it
// This just supports loading in any environment
(function ( root, factory ) {
    if ( typeof define === "function" && define.amd ) {
        define( [], factory );
    } else if ( typeof exports === "object" ) {
        module.exports = factory();
    } else {
        root.chassis = factory();
  }
}( this, function () {
//>> return chasses.moduleName;
} ) );
