(function ($) {
    $.fn.homeSimulator = function (componentName) {
        var componentConfigUri = "components/" + componentName + "/" + "config.json";
        var componentTemplateUri = "components/" + componentName + "/" + "template.html";

        var tabSelector = '#' + $(this).prop('id');
        var contentSelector = tabSelector + '-content';

        if ($(this).prop('checked')) {
            getDataAndRender('status');
        }

        $(document).on('click', tabSelector, function () {

            getDataAndRender('status');
        });

        $(document).on('change', contentSelector + ' input:checkbox', function () {
            var checked = $(this).prop('checked');
            getDataAndRender(checked ? 'on' : 'off');
        });


        function getDataAndRender(action) {
            getRemoteData(componentConfigUri, 'json', function (configData) {
                getRemoteData(configData[action + 'Url'], 'json', function (statusData) {
                    getRemoteData(componentTemplateUri, 'html', function (template) {
                        $(contentSelector).render(statusData, template);
                    });
                });
            });
        }

        function getRemoteData(url, dataType, callback) {
            $.ajax({
                url: url,
                async: false,
                dataType: dataType,
                success: callback
            });
        }
    };

    $.fn.render = function (data, template) {

        $.each(data, function (key, value) {
            if (key === 'status') {
                if (value === 'on') {
                    value = 'checked';
                } else {
                    value = '';
                }
            }

            template = template.replace(new RegExp('{{' + key + '}}', "g"), value);
        });

        $(this).empty().append(template);

        return this;
    }


})(jQuery);

$(function () {
    $(document).find('.tab_input').each(function (index) {
        $(this).homeSimulator($(this).data('component'));
    });
});