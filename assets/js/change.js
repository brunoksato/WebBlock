(function () {

    var data = {},
        doc = document;

    var text = function (element) {
        if (element.textContent === 'undefined')
            return element.innerText;
        else
            return element.textContent;
    };

    var block = {
        zero: {
            number: text(doc.querySelector('#block0 > p:nth-child(1)')),
            escola: text(doc.querySelector('#block0 > p:nth-child(2)')),
            curso: text(doc.querySelector('#block0 > p:nth-child(3)')),
            ano: text(doc.querySelector('#block0 > p:nth-child(4)'))
        },
        one: {
            number: text(doc.querySelector('#block1 > p:nth-child(1)')),
            escola: text(doc.querySelector('#block1 > p:nth-child(2)')),
            curso: text(doc.querySelector('#block1 > p:nth-child(3)')),
            ano: text(doc.querySelector('#block1 > p:nth-child(4)')),
        },
        two: {
            number: text(doc.querySelector('#block2 > p:nth-child(1)')),
            escola: text(doc.querySelector('#block2 > p:nth-child(2)')),
            curso: text(doc.querySelector('#block2 > p:nth-child(3)')),
            ano: text(doc.querySelector('#block2 > p:nth-child(4)')),
        },
        three: {
            number: text(doc.querySelector('#block3 > p:nth-child(1)')),
            escola: text(doc.querySelector('#block3 > p:nth-child(2)')),
            curso: text(doc.querySelector('#block3 > p:nth-child(3)')),
            ano: text(doc.querySelector('#block3 > p:nth-child(4)')),
        },
        four: {
            number: text(doc.querySelector('#block4 > p:nth-child(1)')),
            escola: text(doc.querySelector('#block4 > p:nth-child(2)')),
            curso: text(doc.querySelector('#block4 > p:nth-child(3)')),
            ano: text(doc.querySelector('#block4 > p:nth-child(4)')),
        },
        five: {
            number: text(doc.querySelector('#block5 > p:nth-child(1)')),
            escola: text(doc.querySelector('#block5 > p:nth-child(2)')),
            curso: text(doc.querySelector('#block5 > p:nth-child(3)')),
            ano: text(doc.querySelector('#block5 > p:nth-child(4)')),
        }
    };

    data = {
        "block0": block.zero,
        "block1": block.one,
        "block2": block.two,
        "block3": block.three,
        "block4": block.four,
        "block5": block.five
    };

    $.ajax({
        url: '/Index/getJson',
        type: 'POST',
        datatype: "json",
        traditional: true,
        data: {
            json: JSON.stringify(data),
        },
        success: function (event, request, settings) {
            alert('json successed');
        },
    });

});
