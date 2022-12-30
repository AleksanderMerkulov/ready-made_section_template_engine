function dropDownMenu(selector_drop_down = '#drop-down', selector_link_btn='.drop-link'){
    let drop_down = document.querySelector(selector_drop_down)
    let link_btn = document.querySelectorAll(selector_link_btn)

    let click_link_btn = true
    for (let linkBtnElement of link_btn) {
        linkBtnElement.addEventListener('click', ()=>{
            if(click_link_btn){
                drop_down.style.display = 'flex'
                setTimeout(()=>{
                    drop_down.classList.toggle('active-drop-down')
                }, 20)
            }
        })
    }
}

dropDownMenu()