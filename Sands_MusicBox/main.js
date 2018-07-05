$(document).ready(function() {
    var cNote = document.getElementById('cAudio');
    var dNote = document.getElementById('dAudio');
    var eNote = document.getElementById('eAudio');
    var fNote = document.getElementById('fAudio');
    var gNote = document.getElementById('gAudio');
    var aNote = document.getElementById('aAudio');
    var bNote = document.getElementById('bAudio');
    $('#c').mouseover(function() {
        cNote.currentTime = 0;
        cNote.play();
    });
    $('#d').mouseover(function() {
        dNote.currentTime = 0;
        dNote.play();
    });
    $('#e').mouseover(function() {
        eNote.currentTime = 0;
        eNote.play();
    });
    $('#f').mouseover(function() {
        fNote.currentTime = 0;
        fNote.play();
    });
    $('#g').mouseover(function() {
        gNote.currentTime = 0;
        gNote.play();
    });
    $('#a').mouseover(function() {
        aNote.currentTime = 0;
        aNote.play();
    });
    $('#b').mouseover(function() {
        bNote.currentTime = 0;
        bNote.play();
    });
    
    $(document).keypress(function(key) {
//        console.log("KeyCode: " + key.keyCode);
        if (key.keyCode === 99)  { // c
            cNote.currentTime = 0;
            cNote.play();
        } else if (key.keyCode === 100)  { // d
            dNote.currentTime = 0;
            dNote.play();
        } else if (key.keyCode === 101)  { // e
            eNote.currentTime = 0;
            eNote.play();
        } else if (key.keyCode === 102)  { // f
            fNote.currentTime = 0;
            fNote.play();
        } else if (key.keyCode === 103)  { // g
            gNote.currentTime = 0;
            gNote.play();
        } else if (key.keyCode === 97)  { // a
            aNote.currentTime = 0;
            aNote.play();
        } else if (key.keyCode === 98)  { // b
            bNote.currentTime = 0;
            bNote.play();
        }
        
    });
        
    $('body').keydown(function(key) {
        //console.log("Key down. Code: " + key.which);
        if (key.keyCode === 67 || key.which === 67)  { // c
            $('#c').removeClass('c');
            $('#c').addClass('hovered-c');
        } else if (key.keyCode  === 68 || key.which  === 68)  { // d
            $('#d').removeClass('d');
            $('#d').addClass('hovered-d');
        } else if (key.keyCode  === 69 || key.which  === 69)  { // e
            $('#e').removeClass('e');
            $('#e').addClass('hovered-e');
        } else if (key.keyCode  === 70 || key.which  === 70)  { // f
            $('#f').removeClass('f');
            $('#f').addClass('hovered-f');
        } else if (key.keyCode  === 71 || key.which  === 71)  { // ag
            $('#g').removeClass('g');
            $('#g').addClass('hovered-g');
        } else if (key.keyCode  === 65 || key.which  === 65)  { // a
            $('#a').removeClass('a');
            $('#a').addClass('hovered-a');
        } else if (key.keyCode  === 66 || key.which  === 66)  { // b
            $('#b').removeClass('b');
            $('#b').addClass('hovered-b');
        }
        
    });
    
    $('body').keyup(function(key) {
        //console.log("Key up");
        if (key.keyCode === 67 || key.which === 67)  { // c
            $('#c').removeClass('hovered-c');
            $('#c').addClass('c');
        } else if (key.keyCode  === 68 || key.which  === 68)  { // d
            $('#d').removeClass('hovered-d');
            $('#d').addClass('d');
        } else if (key.keyCode  === 69 || key.which  === 69)  { // e
            $('#e').removeClass('hovered-e');
            $('#e').addClass('e');
        } else if (key.keyCode  === 70 || key.which  === 70)  { // f
            $('#f').removeClass('hovered-f');
            $('#f').addClass('f');
        } else if (key.keyCode  === 71 || key.which  === 71)  { // g
            $('#g').removeClass('hovered-g');
            $('#g').addClass('g');
        } else if (key.keyCode  === 65 || key.which  === 65)  { // a
            $('#a').removeClass('hovered-a');
            $('#a').addClass('a');
        } else if (key.keyCode  === 66 || key.which  === 66)  { // b
            $('#b').removeClass('hovered-b');
            $('#b').addClass('b');
        }
        
    });

    
});