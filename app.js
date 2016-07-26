// So what is available when dojo.js has been loaded?
// Dojo's AMD loader is, and it defines two global functions for using it - require and define.

// Sourcing dojo.js will load other dojo modules. Shove the dojo folder into what you serve and source it there ok

// A few of Dojo's basic modules for HTML DOM manipulation are dojo/dom and dojo/dom-construct.
// Let's see how we can load these modules and use the functionality they provide:

require([
    'dojo/dom',
    'dojo/dom-construct'
], function (dom, domConstruct) {
    var greetingNode = dom.byId('greeting');
    domConstruct.place('<em> Dojo!</em>', greetingNode);
});
