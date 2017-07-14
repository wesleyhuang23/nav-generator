$(function(){
    $('.editable').each(function(){
        this.contentEditable = true;
    })

    $('button').on('click', function(e){
        console.log(e.target.parentElement.children[1].value);
        var title = e.target.parentElement.children[1].value;
        $('.desktop-title').text(`
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
            </li>
        `)
    })
})