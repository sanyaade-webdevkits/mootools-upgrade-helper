Class.empty = $empty;

Class.prototype.extend = function(properties){
	return new Class(Class.Extends(this, properties));
};