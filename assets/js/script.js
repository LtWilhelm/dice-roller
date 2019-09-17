$(document).ready(() => {
    $('#showDice').on('click', () => {
        $('#gameRegion').show();
        $('#diceTray').hide('fast');
    });
    
    $('#hideDice').on('click', () => {
        $('#gameRegion').hide();
        $('#diceTray').show('fast');
    });
});