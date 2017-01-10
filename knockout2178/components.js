ko.components.register('like-widget', {
    viewModel: { require: app.root + 'Scripts/app/components/component-like-widget.js' },
    template: { require: 'text!' + app.root + 'Scripts/app/components/component-like-widget.html' }
});
