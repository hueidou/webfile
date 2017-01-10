// component-like-widget.js
// change one line from http://knockoutjs.com/documentation/files/component-like-widget.js

define(['knockout'], function(ko) {
    function LikeWidgetViewModel(params) {
        // this.chosenValue = params.value;
        this.chosenValue = ko.observable();  // <----------- here
    }
    LikeWidgetViewModel.prototype.like = function() {
        this.chosenValue('like');
    };
    LikeWidgetViewModel.prototype.dislike = function() {
        this.chosenValue('dislike');
    };

    return LikeWidgetViewModel;
});
