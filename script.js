let first_col_md_3_home_row = document.querySelector('.home_row .col-md-3:nth-child(1)');
let second_col_md_3_home_row = document.querySelector('.home_row .col-md-3:nth-child(2)');
let third_col_md_3_home_row = document.querySelector('.home_row .col-md-3:nth-child(3)');
let fourth_col_md_3_home_row = document.querySelector('.home_row .col-md-3:nth-child(4)');
let home_section = document.querySelector('.home')
console.log(first_col_md_3_home_row);

first_col_md_3_home_row.addEventListener('mouseover', function() {
home_section.classList.add('bg-1')
})
first_col_md_3_home_row.addEventListener('mouseout', function() {
    home_section.classList.remove('bg-1')
})


second_col_md_3_home_row.addEventListener('mouseover', function() {
    home_section.classList.add('bg-2')
    })
    second_col_md_3_home_row.addEventListener('mouseout', function() {
        home_section.classList.remove('bg-2')
    })



third_col_md_3_home_row.addEventListener('mouseover', function() {
        home_section.classList.add('bg-3')
        })
        third_col_md_3_home_row.addEventListener('mouseout', function() {
            home_section.classList.remove('bg-3')
})




fourth_col_md_3_home_row.addEventListener('mouseover', function() {
    home_section.classList.add('bg-4')
    })
    fourth_col_md_3_home_row.addEventListener('mouseout', function() {
        home_section.classList.remove('bg-4')
    })
