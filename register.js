function memberType(type){

    var month = document.getElementById('monthly');
    var quarter = document.getElementById('quarterly');
    var year = document.getElementById('yearly'); 
    var halfyear = document.getElementById('half-yearly'); 

    if (type == 'month') 
    {
        month.className = month.className + ' active';
        quarter.className = 'container-fluid col-md-4 membership';
        halfyear.className = 'container-fluid col-md-4 membership';
        year.className = 'container-fluid col-md-4 membership';

    } 
    else if (type == 'quarter') 
    {
        month.className = 'container-fluid col-md-4 membership';
        quarter.className = quarter.className + ' active';
        halfyear.className = 'container-fluid col-md-4 membership';
        year.className = 'container-fluid col-md-4 membership';
    } 

    else if (type == 'halfyear') 
    {
        month.className = 'container-fluid col-md-4 membership';
        quarter.className ='container-fluid col-md-4 membership';
        halfyear.className =  halfyear.className + ' active';
        year.className = 'container-fluid col-md-4 membership';
    } 
    
    else {

        month.className = 'container-fluid col-md-4 membership';
        quarter.className = 'container-fluid col-md-4 membership';
        halfyear.className = 'container-fluid col-md-4 membership';      
        year.className = year.className + ' active';
    }

}