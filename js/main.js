/**
 * Created by Timothy on 6/10/2015.
 */
var floater = '';
$('#barbar, #bard, #cleric, #druid, #fighter, #monk, #paladin, #ranger, #rogue, #sorcerer, #warlock, #wizard, #fox').click(function(){
    floater = '#' + this.id + 'Clicker';
    $('#' + this.id + 'Clicker').css('visibility', 'visible');
});
$('.chooseAnother').click(function(){
    $(floater).css('visibility', 'hidden');
});