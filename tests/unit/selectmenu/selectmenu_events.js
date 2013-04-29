(function ( $ ) {

module( "selectmenu: events", {
	setup: function () {
		this.element = $( "#speed" );
	}
});

test( "change", function () {
	expect( 4 );

	this.element.selectmenu({
		change: function ( event, ui ) {
			ok( event, "change event fired on change" );
			equal( event.type, "selectmenuchange", "event type set to selectmenuchange" );
			equal( ui.item.element[ 0 ].nodeName.toLowerCase(), "option", "ui.item.element[0] points to original option element" );
			equal( ui.item.value, value, "ui.item.value property updated correctly" );
		}
	});

	var button = this.element.selectmenu( "widget" ),
		menu = this.element.selectmenu( "menuWidget" ).parent(),
		value = this.element.find( "option" ).first().text();

	button.simulate( "focus" ).simulate( "click" );
	menu.find( "a" ).first().simulate( "mouseover" ).simulate( "click" );
});


test( "close", function () {
	expect( 2 );

	this.element.selectmenu({
		close: function ( event, ui ) {
			ok( event, "close event fired on close" );
			equal( event.type, "selectmenuclose", "event type set to selectmenuclose" );
		}
	});

	this.element.selectmenu( "open" ).selectmenu( "close" );
});


test( "focus", function () {
	expect( 3 );

	var button, menu, links;

	this.element.selectmenu({
		focus: function ( event, ui ) {
			ok( event, "focus event fired on mouseover" );
			equal( event.type, "selectmenufocus", "event type set to selectmenufocus" );
			equal( ui.item.element[0].nodeName.toLowerCase(), "option", "ui points to original option element" );
		}
	});

	button = this.element.selectmenu( "widget" ),
	menu = this.element.selectmenu( "menuWidget" );

	button.simulate( "focus" );
	links = menu.find( "li.ui-menu-item a" );

	button.simulate( "click" );

	menu.find( "a" ).last().simulate( "mouseover" );

	this.element.selectmenu( "close" );
});


test( "open", function () {
	expect( 2 );

	this.element.selectmenu({
		open: function ( event, ui ) {
			ok( event, "open event fired on open" );
			equal( event.type, "selectmenuopen", "event type set to selectmenuopen" );
		}
	});

	this.element.selectmenu( "open" );
});


test( "select", function () {
	expect( 3 );

	this.element.selectmenu({
		select: function ( event, ui ) {
			ok( event, "select event fired on item select" );
			equal( event.type, "selectmenuselect", "event type set to selectmenuselect" );
			equal( ui.item.element[0].nodeName.toLowerCase(), "option", "ui points to original option element" );
		}
	});

	var button = this.element.selectmenu( "widget" ),
		menu = this.element.selectmenu( "menuWidget" ).parent();

	button.simulate( "focus" ).simulate( "click" );
	menu.find( "a" ).first().simulate( "mouseover" ).simulate( "click" );
});

})(jQuery);