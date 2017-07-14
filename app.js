$(function(){
    $('.editable').each(function(){
        this.contentEditable = true;
    })

    $('button').on('click', function(e){
        console.log(e.target.parentElement.children[1].value);
        var form = e.target.parentElement
        if(form.className === 'desktop-title'){
            var title = e.target.parentElement.children[1].value;
            $('.desktop-title-output').text(`
                <li>
                    <a style="text-decoration: none; cursor: default;" title="`+ title + `"> `+ title +`</a>
                    <div class="dropdown">
                        <ul>
                            <li>
                                <ul class="dropdown2">

                                <!--PUT NAV ITMES HERE -->

                                </ul>
                            </li>
                        </ul>
                    </div>
                </li>`)
        } else if (form.className === 'desktop-item'){
            var name = form.children[1].value;
            var id = form.children[3].value;
            $('.desktop-item-output').text(`<li>{{widget type="catalog/category_widget_link" anchor_text="`+ name +`" title="`+ name +`" template="catalog/category/widget/link/link_block.phtml" id_path="category/`+ id +`"}}</li>`);
        } else if(form.className === 'mobile-title'){
            var name = form.children[1].value;
            $('.mobile-title-output').text(`
                <li class="nav-mobile--dig">`+ name +`</li>
                    <ul class="nav--mobile nav-mobile--level-two">
                        <li class="nav-mobile--back">Back</li>
                        <!--PUT MOBILE NAV ITEMS HERE-->

                    </ul>
            `)
        } else if(form.className === 'mobile-item'){
            var name = form.children[1].value;
            var link = form.children[3].value;
            $('.mobile-item-output').text(`
                <li><span class="widget widget-category-link"><a href="http://www.guideboat.com/`+ link +`" title="`+ name +`"><span>` + name + `</span></a></span></li>
            `)
        }
    })
})