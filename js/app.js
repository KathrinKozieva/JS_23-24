requirejs.config({
    paths: {
		jquery: 'https://code.jquery.com/jquery-1.12.4.min',
		tmpl: 'tmpl'
    }
});

require(
    ['controller','model', 'view', 'jquery'],
    
    function (Controller, Model, View) {
        var defaultToDoList = ['Learn HTML', 'Learn JS', 'Learn jQuery'];
        var model = new Model(defaultToDoList);
        var view = new View(model);
        var controller = new Controller (model, view);
    }
);