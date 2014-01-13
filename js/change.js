(function () {

    var data = {},
        doc = document,
        selector = doc.querySelector;


    var block0 = {
        number: selector('result.block0.number').textContent,
        escola: selector('result.block0.escola').textContent,
        curso: selector('result.block0.curso').textContent,
        ano: selector('result.block0.ano').textContent,
        JSON: function () {
            return "{ number:" + this.number + "," + "escola:" + this.escola + "," + "curso:" + this.curso + "," + "ano:" + this.ano + "},";
        }
    };

    var block1 = {
        number: selector('result.block1.number').textContent,
        escola: selector('result.block1.escola').textContent,
        curso: selector('result.block1.curso').textContent,
        ano: selector('result.block1.ano').textContent,
        JSON: function () {
            return "{ block1: { number:" + this.number + "," + "escola:" + this.escola + "," + "curso:" + this.curso + "," + "ano:" + this.ano + "},";
        }
    };

    var block2 = {
        number: selector('result.block2.number').textContent,
        escola: selector('result.block2.escola').textContent,
        curso: selector('result.block2.curso').textContent,
        ano: selector('result.block2.ano').textContent,
        JSON: function () {
            return "{ block2: { number:" + this.number + "," + "escola:" + this.escola + "," + "curso:" + this.curso + "," + "ano:" + this.ano + "},";
        }
    };

    var block3 = {
        number: selector('result.block3.number').textContent,
        escola: selector('result.block3.escola').textContent,
        curso: selector('result.block3.curso').textContent,
        ano: selector('result.block3.ano').textContent,
        JSON: function () {
            return "{ block3: { number:" + this.number + "," + "escola:" + this.escola + "," + "curso:" + this.curso + "," + "ano:" + this.ano + "},";
        }
    };

    var block4 = {
        number: selector('result.block4.number').textContent,
        escola: selector('result.block4.escola').textContent,
        curso: selector('result.block4.curso').textContent,
        ano: selector('result.block4.ano').textContent,
        JSON: function () {
            return "{ block4: { number:" + this.number + "," + "escola:" + this.escola + "," + "curso:" + this.curso + "," + "ano:" + this.ano + "},";
        }
    };

    var block5 = {
        number: selector('result.block3.number').textContent,
        escola: selector('result.block3.escola').textContent,
        curso: selector('result.block3.curso').textContent,
        ano: selector('result.block3.ano').textContent,
        JSON: function () {
            return "{ block5: { number:" + this.number + "," + "escola:" + this.escola + "," + "curso:" + this.curso + "," + "ano:" + this.ano + "},";
        }
    };

    data = {
        "block0": block0,
        "block1": block1,
        "block2": block2,
        "block3": block3,
        "block4": block4,
        "block5": block5
    };

});