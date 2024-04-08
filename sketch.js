document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / -5.5; // Adjust the division factor as needed

    const element = document.getElementById("translateElement");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / 7.5; // Adjust the division factor as needed

    const element = document.getElementById("translateElement2");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / -7.5; // Adjust the division factor as needed

    const element = document.getElementById("translateElement3");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / 5.5; // Adjust the division factor as needed

    const element = document.getElementById("translateElement4");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / 8.5; // Adjust the division factor as needed

    const element = document.getElementById("translateElement5");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / -8.5; // Adjust the division factor as needed

    const element = document.getElementById("translateElement6");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / -6.5; // Adjust the division factor as needed

    const element = document.getElementById("translateElement7");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / 6.5; // Adjust the division factor as needed

    const element = document.getElementById("translateElement8");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / -9; // Adjust the division factor as needed

    const element = document.getElementById("translateElement9");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / 9; // Adjust the division factor as needed

    const element = document.getElementById("translateElement10");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / 40; // Adjust the division factor as needed

    const element = document.getElementById("translateElement11");
    element.style.transform = `translateY(${translateAmount}px)`;
});




$(document).ready(function() {
    $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10').hover(function() {
        $(this).siblings('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9').css('display', 'none');
        $(this).css('display', 'block');
    });

    $('.block1').hover(function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q, .A').css('display', 'block');
        $('body').css('background', 'red');
    });

    $('.block2').hover(function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q2, .A2').css('display', 'block');
        $('body').css('background', 'white');
    });

    $('.block3').hover(function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q3, .A3').css('display', 'block');
        $('body').css('background', 'hotpink');
    });
    $('.block4').hover(function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q4, .A4').css('display', 'block');
        $('body').css('background', 'yellow');
    });
    $('.block5').hover(function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q5, .A5').css('display', 'block');
        $('body').css('background', 'fucsia');
    });
    $('.block6').hover(function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q6, .A6').css('display', 'block');
        $('body').css('background', 'green');
    });
    $('.block7').hover(function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q7, .A7').css('display', 'block');
        $('body').css('background', 'cyan');
    });
    $('.block8').hover(function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q8, .A8').css('display', 'block');
        $('body').css('background', 'teal');
    });
    $('.block9').hover(function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q9, .A9').css('display', 'block');
        $('body').css('background', 'pink');
    });
    $('.block10').hover(function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .text, .text-bottom').css('display', 'none');
        $('.Q10, .A10').css('display', 'block');
        $('body').css('background', 'orange');
    });
});





//Mobile----------------------------------------------------------------------------Mobile

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Touchmove event handler with debouncing
const debouncedTouchMove = debounce(function(event) {
    const touchY = event.touches[0].clientY;
    const translateAmount = touchY / -20; // Adjust the division factor as needed
    const translateAmount2 = touchY / 7.5; // Adjust the division factor as needed
    const translateAmount3 = touchY / -7.5; // Adjust the division factor as needed
    const translateAmount4 = touchY / 5.5; // Adjust the division factor as needed
    const translateAmount5 = touchY / 8.5; // Adjust the division factor as needed
    const translateAmount6 = touchY / -8.5; // Adjust the division factor as needed
    const translateAmount7 = touchY / -6.5; // Adjust the division factor as needed
    const translateAmount8 = touchY / 6.5; // Adjust the division factor as needed
    const translateAmount9 = touchY / -9; // Adjust the division factor as needed
    const translateAmount10 = touchY / 9; // Adjust the division factor as needed
    const translateAmount11 = touchY / 20; // Adjust the division factor as needed
    
    document.getElementById("translateElement").style.transform = `translateY(${translateAmount}px)`;
    document.getElementById("translateElement2").style.transform = `translateY(${translateAmount2}px)`;
    document.getElementById("translateElement3").style.transform = `translateY(${translateAmount3}px)`;
    document.getElementById("translateElement4").style.transform = `translateY(${translateAmount4}px)`;
    document.getElementById("translateElement5").style.transform = `translateY(${translateAmount5}px)`;
    document.getElementById("translateElement6").style.transform = `translateY(${translateAmount6}px)`;
    document.getElementById("translateElement7").style.transform = `translateY(${translateAmount7}px)`;
    document.getElementById("translateElement8").style.transform = `translateY(${translateAmount8}px)`;
    document.getElementById("translateElement9").style.transform = `translateY(${translateAmount9}px)`;
    document.getElementById("translateElement10").style.transform = `translateY(${translateAmount10}px)`;
    document.getElementById("translateElement11").style.transform = `translateY(${translateAmount11}px)`;
}, 10); // Adjust the debounce delay as needed

// Attach the debouncedTouchMove function to the touchmove event
document.addEventListener("touchmove", debouncedTouchMove);


//Mobile----------------------------------------------------------------------------Mobile

$(document).ready(function() {
    $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10').on('touchstart', function() {
        $(this).siblings('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9').css('display', 'none');
        $(this).css('display', 'block');
    });

    $('.block1').on('touchstart', function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q, .A').css('display', 'block');
        $('body').css('background', 'red');
    });

    $('.block2').on('touchstart', function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q2, .A2').css('display', 'block');
        $('body').css('background', 'white');
    });

    $('.block3').on('touchstart', function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q3, .A3').css('display', 'block');
        $('body').css('background', 'hotpink');
    });

    $('.block4').on('touchstart', function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q4, .A4').css('display', 'block');
        $('body').css('background', 'yellow');
    });

    $('.block5').on('touchstart', function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q5, .A5').css('display', 'block');
        $('body').css('background', 'fucsia');
    });

    $('.block6').on('touchstart', function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q6, .A6').css('display', 'block');
        $('body').css('background', 'green');
    });

    $('.block7').on('touchstart', function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q7, .A7').css('display', 'block');
        $('body').css('background', 'cyan');
    });

    $('.block8').on('touchstart', function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q8, .A8').css('display', 'block');
        $('body').css('background', 'teal');
    });

    $('.block9').on('touchstart', function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .Q10, .text, .text-bottom').css('display', 'none');
        $('.Q9, .A9').css('display', 'block');
        $('body').css('background', 'pink');
    });

    $('.block10').on('touchstart', function() {
        $('.Q, .A, .Q2, .A2, .Q3, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .Q4, .Q5, .Q6, .Q7, .Q8, .Q9, .text, .text-bottom').css('display', 'none');
        $('.Q10, .A10').css('display', 'block');
        $('body').css('background', 'orange');
    });
});










