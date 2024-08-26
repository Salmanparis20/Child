document.addEventListener("DOMContentLoaded", function () {
    // Select all accordion headers
    const headers = document.querySelectorAll('.accordion-header');

    // Add a click event listener to each header
    headers.forEach(header => {
        header.addEventListener('click', function () {
            // Toggle the 'active' class on the clicked header
            this.classList.toggle('active');

            // Select the next sibling element (the content div)
            const content = this.nextElementSibling;

            // Toggle the display property of the content div
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                // Optionally close other open content sections
                document.querySelectorAll('.accordion-content').forEach(sec => sec.style.display = 'none');
                content.style.display = 'block';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all accordion headers
    const headers = document.querySelectorAll('.accordion-header2');

    // Add a click event listener to each header
    headers.forEach(header => {
        header.addEventListener('click', function () {
            // Toggle the 'active' class on the clicked header
            this.classList.toggle('active');

            // Select the next sibling element (the content div)
            const content = this.nextElementSibling;

            // Toggle the display property of the content div
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                // Optionally close other open content sections
                document.querySelectorAll('.accordion-content2').forEach(sec => sec.style.display = 'none');
                content.style.display = 'block';
            }
        });
    });
});


// document.querySelectorAll('.accordion-header').forEach(header => {
//     header.addEventListener('click', () => {
//         const accordionItem = header.parentElement;
//         const icon = header.querySelector('.icon');

//         // Close any open accordion items
//         document.querySelectorAll('.accordion-item').forEach(item => {
//             if (item !== accordionItem) {
//                 item.classList.remove('active');
//                 item.querySelector('.icon').textContent = '+';
//             }
//         });

//         // Toggle the clicked item
//         accordionItem.classList.toggle('active');

//         // Change the icon from + to -
//         if (accordionItem.classList.contains('active')) {
//             icon.textContent = '-';
//         } else {
//             icon.textContent = '+';
//         }
//     });
// });


document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const icon = header.querySelector('.icon i');

        // Close any open accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                const itemIcon = item.querySelector('.icon i');
                itemIcon.classList.remove('fa-minus');
                itemIcon.classList.add('fa-plus');
            }
        });

        // Toggle the clicked item
        accordionItem.classList.toggle('active');

        // Change the icon from + to -
        if (accordionItem.classList.contains('active')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
    });
});

// let btn = document.getElementById("toggle");
// btn.addEventListener("click",function(){
//     c.classList.toggle("fa-minus");
// })
// let icon = document.querySelector("fa-plus");


// btn.onclick = function () {
//     if (icon.classList.contains("fa-plus")) {
//         icon.classList.replace("fa-plus", "fa-minus")
//     }
//     else {
//         icon.classList.replace("fa-minus", "fa-plus",)
//     }
// }