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
            });
        }
        else
        {
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
        var drop_down_wrapper = drop_down_parent.find('.drop_down_wrapper');
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
                'height':drop_down_wrapper.find('.drop_down_container').height()
            },500,function(){
                drop_down_parent.addClass('drop_down_expand');
                $(this).css({'height':''});
            });
        }
    });
});
