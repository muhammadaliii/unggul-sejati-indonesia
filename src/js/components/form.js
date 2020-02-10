(function($){

	$("#form-message").validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true
			},
			message: {
				required: true
			},
        },
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorElement: 'strong',
		errorClass: 'help-block',
		errorPlacement: function(error, element) {
			if(element.parent('.form-group').length) {
				error.insertBefore(element);
			} 
			// else if (element.attr("name") == "start_date" || element.attr("name") == "end_date") {
			// 	error.insertBefore(element.parent().parent());
			// }
			else {
				error.insertBefore(element);
			}
        },
    });

})(jQuery);