let push = {
    region : '华东',
    product :'手机',
    regionSelect : null,
    productSelect : null,
    selectAll: null,
    url : decodeURI(window.location.href),
    index :-1,
    public : '',
    'setPush' : function () {
        var url = location.href;
        var index = url.indexOf('#');
        this.public = this.url.slice(0,index+1);
        this.region = '';
        this.product = '';
        this.selectAll = document.querySelectorAll('input[checkbox-type=all]');
        this.regionSelect = document.querySelectorAll('#region-radio-wrapper input[checkbox-type=sub]');
        this.productSelect = document.querySelectorAll('#product-radio-wrapper input[checkbox-type = sub]');
        var len = this.regionSelect.length;
        
        for(var i=0;i<len;i++) {
            if(this.regionSelect[i].checked == true) {
                this.region += this.regionSelect[i].getAttribute('data-text') +'&';
            }
            if(this.productSelect[i].checked == true) {
                this.product += this.productSelect[i].getAttribute('data-text') +'&';
            }
        }
        history.pushState('',null,this.public+'#'+ this.region.slice(0,-1)+'||'+this.product.slice(0,-1));
    },
    'getPush' : function () {
        this.index = this.url.indexOf('#');
        this.public = this.url.slice(0,this.index);
        if(this.index == -1) {
            history.replaceState('',null,this.public+'#'+this.region+'||'+this.product);
        }
        var temp = decodeURI(window.location.hash).slice(1).split("||");
        this.selectAll = document.querySelectorAll('input[checkbox-type=all]');
        this.regionSelect = document.querySelectorAll('#region-radio-wrapper input[checkbox-type=sub]');
        this.productSelect = document.querySelectorAll('#product-radio-wrapper input[checkbox-type = sub]');
        var regions = temp[0].split('&');
        var products = temp[1].split('&');

        if(regions.length == 3) {
            this.selectAll[0].checked = true;
        }
        if(products.length == 3) {
            this.selectAll[1].checked = true;
        }

        var len = this.regionSelect.length;
        for(var i=0;i<len;i++){
            var region = this.regionSelect[i].getAttribute("data-text");
            var product = this.productSelect[i].getAttribute("data-text");
            if(regions.indexOf(region) != -1) {
                this.regionSelect[i].checked = true;
            }else {
                this.regionSelect[i].checked = false;
            }
            if(products.indexOf(product) != -1) {
                this.productSelect[i].checked = true;
            }else {
                this.productSelect[i].checked = false;
            }
        }

    }
}


