Object.toQueryString = Hash.toQueryString;

var XHR = new Class({

	Extends: Request,

	options: {
		update: false
	},

	initialize: function(url, options){
		arguments.callee.parent(options);
		this.url = url;
	},

	request: function(data){
		return this.send(this.url, data || this.options.data);
	},

	send: function(url, data){
		if (!this.check(url, data)) return this;
		return arguments.callee.parent({url: url, data: data});
	},

	success: function(text, xml){
		text = this.processScripts(text);
		if (this.options.update) $(this.options.update).empty().set('html', text);
		this.onSuccess(text, xml);
	},
	
	failure: function(){
		this.fireEvent('onFailure', this.xhr);
	}

});

var Ajax = XHR;
