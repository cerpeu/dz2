;(function(){
    'use strickt';

    const savedBlock = document.getElementById('saved'),
        editableBlock = document.getElementById('editor'),
        body = document.body;

    body.addEventListener('keydown', workWithEditor);

    function workWithEditor(event) {
        const presedCode = event.keyCode;

        if (presedCode == 69 && event.ctrlKey){
            event.preventDefault();
            editableBlock.value = savedBlock.innerHTML;
            editableBlock.classList.remove('hide');
            savedBlock.classList.add('hide');
            editableBlock.focus();
        } else if (presedCode == 83 && event.ctrlKey){
            event.preventDefault();
            savedBlock.innerHTML = editableBlock.value;
            savedBlock.classList.remove('hide');
            editableBlock.classList.add('hide');
        } else if (presedCode == 27){
            event.preventDefault();
            savedBlock.classList.remove('hide');
            editableBlock.classList.add('hide');
        }
    }
})();