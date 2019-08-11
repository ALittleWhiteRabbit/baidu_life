let hash = {
    region : '',
    product :'',
    regionSelect : null,
    productSelect : null,
    selectAll: null,
    'setHash' : function () {
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

        value = this.region.slice(0,-1) +"||"+ this.product.slice(0,-1);
        return value;
    },
    'getHash' : function () {
        var temp = decodeURI(location.hash).slice(1).split("||");
        this.selectAll = document.querySelectorAll('input[checkbox-type=all]');
        this.regionSelect = document.querySelectorAll('#region-radio-wrapper input[checkbox-type=sub]');
        this.productSelect = document.querySelectorAll('#product-radio-wrapper input[checkbox-type = sub]');
        var regions = temp[0].split('&');
        var products = temp[1].split('&');
        if(regions.length == 4) {
            this.selectAll[0].checked = true;
        }
        if(products.length == 4) {
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


