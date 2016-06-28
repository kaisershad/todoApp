function inputHandler1() {
    $('#task1').keypress(function(element){
        if(element.which == 13) {
            alert(element.target.value);
        }
    });
}

function inputHandler2() {
    $('#task2').keypress(function(element){
        $('#taskoutput2').text(element.target.value);
    });
}

function inputHandler3() {
    $('#task3').keypress(function(element){
        if(element.which == 13){
            $('#task3list').append('<li>' +this.value+ ' </li>');
            this.value = "";
        }
    });
}

function inputHandler4() {

    function getListEntry(value) {
        return '<li>' + value+ '<small class="deleteInput"> -> X</small></li>'
    }

    function deleteInputHandler() {
        $('.deleteInput').click(function(){
            this.parentElement.remove();
        });
    }

    $('#task4').keypress(function(element){
        if(element.which == 13) {
            $('#task4list').append(getListEntry(this.value));
            this.value = " ";
            deleteInputHandler();
        }
    });
}

function init() {
    console.log("ready");
    inputHandler1();
    inputHandler2();
    inputHandler3();
    inputHandler4();
}

$(document).ready(init);