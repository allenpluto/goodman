/**
 * Created by Allen on 21/01/2018.
 */

$(document).ready(function(){
    $('.off_canvas_trigger').click(function(event){
        event.preventDefault();

        var off_canvas_menu = $(this).closest('.off_canvas_menu');
        if ($(this).data('trigger') && $('#'+$(this).data('trigger')).length > 0)
        {
            off_canvas_menu = $('#'+$(this).data('trigger'));
        }
        var off_canvas_wrapper = off_canvas_menu.closest('.off_canvas_wrapper');
        if (off_canvas_wrapper.hasClass('off_canvas_expand'))
        {
            off_canvas_wrapper.removeClass('off_canvas_expand off_canvas_expand_left off_canvas_expand_right');
        }
        else
        {
            off_canvas_wrapper.addClass('off_canvas_expand');
            if (off_canvas_menu.hasClass('off_canvas_menu_right'))
            {
                off_canvas_wrapper.addClass('off_canvas_expand_right');
            }
            else
            {
                off_canvas_wrapper.addClass('off_canvas_expand_left');
            }
        }
    });

    $('.pull_down_trigger').click(function(event){
        event.preventDefault();

        var pull_down_wrapper = $(this).closest('.pull_down_wrapper');
        var off_canvas_menu = $('#main_menu_container');
        if ($(this).data('trigger') && $('#'+$(this).data('trigger')).length > 0)
        {
            pull_down_wrapper = $('#'+$(this).data('trigger'));
        }
        if (pull_down_wrapper.hasClass('pull_down_expand'))
        {
            pull_down_wrapper.animate({
                'height':0
            },500,function(){
                $(this).removeClass('pull_down_expand').css({'height':''});
                off_canvas_menu.show();
            });
        }
        else
        {
            off_canvas_menu.hide();
            pull_down_wrapper.animate({
                'height':pull_down_wrapper.find('.pull_down_container').height()
            },500,function(){
                $(this).addClass('pull_down_expand').css({'height':''});
            });
        }
    });

    $('.drop_down_trigger').click(function(event){
        event.preventDefault();

        var drop_down_parent = $(this).closest('.drop_down_parent');
        if ($(this).data('trigger') && $('#'+$(this).data('trigger')).length > 0)
        {
            drop_down_parent = $('#'+$(this).data('trigger'));
        }
        var drop_down_wrapper = drop_down_parent.children('.drop_down_wrapper');
        if (drop_down_parent.hasClass('drop_down_expand'))
        {
            drop_down_wrapper.animate({
                'height':0
            },500,function(){
                drop_down_parent.removeClass('drop_down_expand');
                $(this).css({'height':''});
            });
        }
        else
        {
            drop_down_wrapper.animate({
                'height':drop_down_wrapper.children('.drop_down_container').height()
            },500,function(){
                drop_down_parent.addClass('drop_down_expand');
                $(this).css({'height':''});
            });
        }
    });

    $('#top_sub_menu_login_container .drop_down_trigger').click(function(event) {
        var drop_down_parent = $(this).closest('.drop_down_parent');
        var off_canvas_menu = $('#main_menu_container');
        if (drop_down_parent.hasClass('drop_down_expand'))
        {
            off_canvas_menu.show();
        }
        else
        {
            off_canvas_menu.hide();
        }
    });


    $('.property_list_item_selector').click(function(event){
        if (!$(this).hasClass('property_list_item_selector_selected'))
        {
            var selector_container = $(this).closest('.property_list_item_selector_container');
            var list_container = $(this).closest('.property_list_section_container').find('.property_list_section_content_container');

            var target_index = selector_container.find('.property_list_item_selector').index($(this));

            selector_container.find('.property_list_item_selector_selected').removeClass('property_list_item_selector_selected');
            selector_container.find('.property_list_item_selector').eq(target_index).addClass('property_list_item_selector_selected');
            list_container.find('.property_list_item_container_selected').removeClass('property_list_item_container_selected');
            list_container.find('.property_list_item_container').eq(target_index).addClass('property_list_item_container_selected');
        }
    });

    $('.gallery_container').each(function(){
        var gallery_container = $(this);
        var image_list = gallery_container.find('.gallery_image_container');
        if (image_list.length > 1)
        {
            var gallery_navigation_container = $('<div />',{
                'class':'gallery_selector_container'
            });
            gallery_navigation_container.appendTo(gallery_container);
            for(var i=0;i<image_list.length;i++)
            {
                $('<div />',{
                    'class':'gallery_selector'
                }).appendTo(gallery_navigation_container);
            }
            gallery_navigation_container.find('.gallery_selector').eq(0).addClass('gallery_selector_selected');
            gallery_container.data('current_index',0);
            gallery_container.data('total_count',image_list.length);
            $('<div />',{
                'class':'gallery_navigator_vignette'
            }).appendTo(gallery_container);
            $('<div />',{
                'class':'gallery_navigator gallery_navigator_previous'
            }).appendTo(gallery_container);
            $('<div />',{
                'class':'gallery_navigator gallery_navigator_next'
            }).appendTo(gallery_container);
        }
    });

    $('.gallery_container').on('click','.gallery_selector',function(){
        if(!$(this).hasClass('gallery_selector_selected'))
        {
            var selector_container = $(this).closest('.gallery_selector_container');
            var gallery_container = $(this).closest('.gallery_container');

            var target_index = selector_container.find('.gallery_selector').index($(this));

            selector_container.find('.gallery_selector_selected').removeClass('gallery_selector_selected');
            selector_container.find('.gallery_selector').eq(target_index).addClass('gallery_selector_selected');

            gallery_container.css('text-indent',(-100*target_index)+'%');
        }
    });
    $('.gallery_container').on('click','.gallery_navigator_previous',function(){
        var gallery_container = $(this).closest('.gallery_container');
        var selector_container = gallery_container.find('.gallery_selector_container');

        var target_index = selector_container.find('.gallery_selector').index(selector_container.find('.gallery_selector_selected'));

        target_index--;

        if (target_index < 0)
        {
            target_index = selector_container.find('.gallery_selector').length - 1;
        }

        selector_container.find('.gallery_selector_selected').removeClass('gallery_selector_selected');
        selector_container.find('.gallery_selector').eq(target_index).addClass('gallery_selector_selected');

        gallery_container.css('text-indent',(-100*target_index)+'%');
    });
    $('.gallery_container').on('click','.gallery_navigator_next',function(){
        var gallery_container = $(this).closest('.gallery_container');
        var selector_container = gallery_container.find('.gallery_selector_container');

        var target_index = selector_container.find('.gallery_selector').index(selector_container.find('.gallery_selector_selected'));

        target_index++;

        if (target_index > selector_container.find('.gallery_selector').length - 1)
        {
            target_index = 0;
        }

        selector_container.find('.gallery_selector_selected').removeClass('gallery_selector_selected');
        selector_container.find('.gallery_selector').eq(target_index).addClass('gallery_selector_selected');

        gallery_container.css('text-indent',(-100*target_index)+'%');
    });
    $('.property_detail_gallery_container').each(function(){
        var gallery_container = $(this);

        var gallery_zoom = $('<div />',{
            'class':'gallery_zoom'
        }).appendTo(gallery_container);

        gallery_zoom.click(function(event){
            event.preventDefault();

            $('body').addClass('overlay_popup_active');
        });

        var gallery_close = $('<div />',{
            'class':'gallery_close'
        }).appendTo(gallery_container);

        gallery_close.click(function(event){
            event.preventDefault();

            gallery_container.hide();
        });
    });
    $('.overlay_popup_close').click(function(){
        $('body').removeClass('overlay_popup_active');
    });
    $('.property_detail_view_lease').click(function(event){
        $(this).closest('.property_detail_container').addClass('property_detail_for_lease_container');
    });
    $('#property_list_search').on('focus',function(){
        if ($(this).data('hide_autocomplete_timeout'))
        {
            clearTimeout($(this).data('hide_autocomplete_timeout'));
        }
        $('#property_list_search').trigger('keydown');
        $(this).parent().find('.property_list_search_autocomplete_wrapper').addClass('property_list_search_autocomplete_wrapper_expand');
    });
    $('#property_list_search').on('blur',function(){
        var search_autocomplete = $(this).parent().find('.property_list_search_autocomplete_wrapper');
        $(this).data('hide_autocomplete_timeout',setTimeout(function(){search_autocomplete.removeClass('property_list_search_autocomplete_wrapper_expand')},2000));
    });
    $('#property_list_search').on('keydown',function(){
        var autocomplete_container = $(this).parent().find('.property_list_search_autocomplete_container');
        autocomplete_container.html('');
        if ($('#property_list_search').val())
        {
            // If input is not empty, show autocomplete lists
            // TODO: use ajax post or sth to get the list data, might need setTimeout to avoid frequent post, on call back, use data to generate inner content
            var list_data = [
                {'type':'location','content':'<span class="matched_text">Sydney</span>, Australia'},
                {'type':'location','content':'<span class="matched_text">Sydney</span> Street, QLD, Australia'},
                {'type':'suggestion','content':'Industrial or logistics properties in <span class="matched_text">Sydney</span>','property_type':['Industrial']},
                {'type':'suggestion','content':'Commercial or office properties in <span class="matched_text">Sydney</span>','property_type':['Commercial']},
                {'type':'suggestion','content':'Land for development in <span class="matched_text">Sydney</span>','property_type':['Land']},
            ];
            list_data.forEach(function(item,index){
                $('<div />',{
                    'class': 'property_list_search_autocomplete_row property_list_search_autocomplete_row_'+item.type
                }).html(item.content).appendTo(autocomplete_container);
            });
        }
        else
        {
            // If input is empty, fill autocomplete box with filter and recent search
            $('<div />',{
                'class': 'property_list_search_autocomplete_title'
            }).html('Property type').appendTo(autocomplete_container);
            $('<div />',{
                'class': 'property_list_search_autocomplete_filter_container'
            }).html('<a class="property_list_search_autocomplete_filter property_list_search_autocomplete_filter_selected" href="javascript:void(0);">All properties</a><a class="property_list_search_autocomplete_filter" href="javascript:void(0);">Industrial or logistics properties</a><a class="property_list_search_autocomplete_filter" href="javascript:void(0);">Commercial or office properties</a><a class="property_list_search_autocomplete_filter" href="javascript:void(0);">Land for development</a>').appendTo(autocomplete_container);
            $('<div />',{
                'class': 'property_list_search_autocomplete_title'
            }).html('Recent searches').appendTo(autocomplete_container);
            var list_data = [
                {'type':'recent','content':'Sydney, Australia'},
                {'type':'recent','content':'Saunders Street, NSW, Australia','property_type':['Industrial','Commercial']},
                {'type':'recent','content':'City West Office Park','proerpty_size':['501','10,000+']}
            ];
            list_data.forEach(function(item,index){
                var additional_filter_string = '<p class="property_list_search_autocomplete_row_additional">';
                if (!item.property_type)
                {
                    additional_filter_string += 'Any property type';
                }
                else
                {
                    additional_filter_string += item.property_type.join();
                }
                additional_filter_string += ' · ';
                if (!item.proerpty_size)
                {
                    additional_filter_string += 'Any property size';
                }
                else
                {
                    additional_filter_string += item.proerpty_size[0] + ' - '+item.proerpty_size[1]+' sqm';
                }
                additional_filter_string += '</p>';
                $('<div />',{
                    'class': 'property_list_search_autocomplete_row property_list_search_autocomplete_row_'+item.type
                }).html(item.content+additional_filter_string).appendTo(autocomplete_container);
            });
        }
    });
    $('body').on('click','.general_style_checkbox_display',function(){
        var checkbox_display = $(this);
        var checkbox_container = $(this).closest('.general_style_checkbox_container');
        var checkbox_input = checkbox_container.find('.general_style_checkbox_input');

        checkbox_input.click();
    });
    $('body').on('click','.general_style_checkbox_input',function(){
        var checkbox_input = $(this);
        var checkbox_container = $(this).closest('.general_style_checkbox_container');

        if (checkbox_input.prop('checked'))
        {
            checkbox_container.addClass('general_style_checkbox_container_checked');
        }
        else
        {
            checkbox_container.removeClass('general_style_checkbox_container_checked');
        }
    });
    $('body').on('click','.general_style_checkbox_container .general_style_label',function(){
        if (!$(this).attr('for'))
        {
            var checkbox_container = $(this).closest('.general_style_checkbox_container');
            var checkbox_input = checkbox_container.find('.general_style_checkbox_input');
            checkbox_input.click();
        }
    });
    $('.general_style_checkbox_input').each(function(){
        var checkbox_input = $(this);
        var checkbox_container = $(this).closest('.general_style_checkbox_container');

        if (checkbox_input.prop('checked'))
        {
            checkbox_container.addClass('general_style_checkbox_container_checked');
        }
        else
        {
            checkbox_container.removeClass('general_style_checkbox_container_checked');
        }
    });
    $('.property_filter_trigger').click(function(){
        if ($('body').hasClass('property_filter_active'))
        {
            if ($(this).hasClass('drop_down_trigger'))
            {
                if ($(this).closest('.drop_down_parent').hasClass('drop_down_expand'))
                {
                    // If clicked filter section is active, close the filter
                    $('body').removeClass('property_filter_active')
                }
                else
                {
                    // If clicked filter section is not active, but the filter is active, close the active filter section
                    $('.property_filter_container > .drop_down_expand').removeClass('drop_down_expand');
                }
            }
            else
            {
                // If the mobile filter trigger is clicked, close the filter and de-active filter section if there's any
                $('body').removeClass('property_filter_active');
                $('.property_filter_container > .drop_down_expand').removeClass('drop_down_expand');
            }
        }
        else
        {
            $('body').addClass('property_filter_active');
            if (!$(this).hasClass('drop_down_trigger') && $('.property_filter_container > .drop_down_expand').length == 0)
            {
                // If there is no active filter section, make the first section (country filter) active
                $('.property_filter_container > .drop_down_parent:eq(0)').addClass('drop_down_expand');
            }
        }
    });
    $('.property_filter_button_apply').click(function(){
        // TODO: Set current value by input data (also store in cookie? ajax post to db?) and close filter
        $('body').removeClass('property_filter_active');
        $('.property_filter_container > .drop_down_expand').removeClass('drop_down_expand');
    });
    $('.property_filter_button_cancel').click(function(){
        // TODO: Reset all input to current value and close filter
        $('body').removeClass('property_filter_active');
        $('.property_filter_container > .drop_down_expand').removeClass('drop_down_expand');
    });
    $('.property_map_trigger').click(function(){
        $('body').addClass('property_map_active');
    });
    $('.property_detail_trigger').click(function(){
        $('body').removeClass('property_map_active');
    });
    $('.property_list_trigger').click(function(){
        $('body').removeClass('property_map_active');
    });
    $('.property_filter_size_bar_container').each(function(){
        var step_point = ['0','500','1,000','2,000','5,000','10,000+'];
        var column_count = step_point.length - 1;
        var column_container = $(this).find('.property_filter_size_bar_column_container');
        column_container.removeClass('property_filter_size_bar_column_container_5_column');
        column_container.html('');
        for (var i=0;i<column_count;i++)
        {
            $('<div />',{
                'class':'property_filter_size_bar_column'
            }).appendTo(column_container);
        }
        column_container.addClass('property_filter_size_bar_column_container_'+column_count+'_column')
        $('.property_filter_size_bar_container').data('step_point',step_point);
    });
    $('.property_filter_size_bar_container').mousedown(function(event){
        if ($(event.target).hasClass('property_filter_size_bar_front_start'))
        {
            console.log('start mousedown');
            $(this).data('mouse_action','set_start');
        }
        if ($(event.target).hasClass('property_filter_size_bar_front_end'))
        {
            console.log('end mousedown');
            $(this).data('mouse_action','set_end');
        }
    });
    $('.property_filter_size_bar_container').mouseup(function(event){
        if ($(this).data('mouse_action'))
        {
            $(this).data('mouse_action','');
        }
    });
    $('.property_filter_size_bar_container').mousemove(function(event){
        if ($(this).data('mouse_action'))
        {
            var bar_width = $(this).width();
            var bar_left = $(this).offset().left;
            var mouse_position = (event.pageX - bar_left) / bar_width;

            var bar_step = 1/$(this).find('.property_filter_size_bar_column_container .property_filter_size_bar_column').length;
            var bar_start = parseFloat($(this).find('.property_filter_size_bar_front').css('left'))/bar_width;
            var bar_end = parseFloat($(this).find('.property_filter_size_bar_front').css('right'))/bar_width;

            if ($(this).data('mouse_action') == 'set_start')
            {
                var new_bar_start_point = Math.min(Math.round(mouse_position / bar_step), Math.round((1 - bar_end) / bar_step) - 1);
                var new_bar_start = new_bar_start_point * bar_step;
                $(this).parent().find('.property_filter_size_display_start').html($(this).data('step_point')[new_bar_start_point]);
                $(this).find('.property_filter_size_bar_front').css('left',(new_bar_start*100)+'%');
            }
            if ($(this).data('mouse_action') == 'set_end')
            {
                var new_bar_end_point = Math.max(Math.round(mouse_position / bar_step), Math.round(bar_start / bar_step) + 1);
                var new_bar_end = 1 - new_bar_end_point * bar_step;
                $(this).parent().find('.property_filter_size_display_end').html($(this).data('step_point')[new_bar_end_point]);
                $(this).find('.property_filter_size_bar_front').css('right',(new_bar_end*100)+'%');
            }
        }
    });
});
