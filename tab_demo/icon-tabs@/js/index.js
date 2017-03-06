document.addEventListener("DOMContentLoaded", function(event) {
    
    var iconTabs = document.getElementsByClassName('icon-tab'),
        iconTabActive;
    
    for(var i=0;i<iconTabs.length;i++) {
        (function(iCopy){
            iconTabs[i].addEventListener('click', function(){
            	if(iconTabActive) { classie.toggle(iconTabActive, 'active'); }
                classie.toggle(this, 'active');
                iconTabActive = this;
            });
            setTimeout(function(){
                iconTabs[iCopy].click();
            }, iCopy*350);
        }(i));
    }
});