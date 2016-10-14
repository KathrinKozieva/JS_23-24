define(
'controller',
[],
	function() {
			
		function Controller(model, view) {

			var self = this;
			view.elements.addBtn.on('click', addItem);
			view.elements.listContainer.on('click', '.item__delete', removeItem);
			view.elements.listContainer.on('click', '.li__item', editItem);

			function addItem() {
				var newItem = view.elements.input.val();
				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');
			}

			function removeItem() {
				var item = $(this).attr('data-value');
				model.removeItem(item);
				view.renderList(model.data);
			}

			function editItem() {
				var item = $(this).html();
				$('.edits').css('opacity', '1');
				$('.edit__value').val(item);
				view.elements.editBtn.on('click', function() {
					var newText = $('.edit__value').val();
					model.editItem(item, newText);
					view.renderList(model.data);
				$('.edits').css('opacity', '0');
				});		
			}
		}
		return Controller;
	}
);