//ajax

function init()  {
  //init();
  //doSomethingElse();

 var options = {
 	done: function(json){
 		//console.log(json);
        var text =  json.notification;
        console.log(text);
        var element = document.querySelector(".notifications");
        element.textContent = text;
 	},
 	fail: function(err){
 		console.log(err);
 	}
 };
    UTILS.ajax("data/config.json", options);

}
window.addEventListener("load", init, false);


//iframe
var elementList = document.querySelector(".link");
//console.log(elementList);
elementList.addEventListener("change", select, false);

function select(e) {
    e.preventDefault();
    var target = e.target.value;
    var frame = document.querySelector("iframe");
    frame.setAttribute("src", target);
}

//tabs



$(document).ready(function() {
    $('#tabs li> a').click(function(){

        //get displaying tab
        var active_tab_selector = $('#tabs li.active>a').attr('href');


        //find actived - remove 'active' css
        var actived_nav = $('#tabs li.active');
        actived_nav.removeClass('active');


        //add 'active' css to li
        $(this).parents('li').addClass('active');


        //hide displaying tab content
        $(active_tab_selector).removeClass('active');
        $(active_tab_selector).addClass('hide');

        //show target tab content /id
        var target_tab_selector = $(this).attr('href');
        $(target_tab_selector).removeClass('hide');
        $(target_tab_selector).addClass('active');

        var yScroll=document.body.scrollTop;
        window.location.hash = $(this).attr('href');
        document.body.scrollTop = yScroll;

        //stop browser to take action for clicked anchor
        event.preventDefault();
    });
});

    $(window).on('hashchange', function(){

    console.log("localhost:63342/webapp/index.html" + window.location.hash);
    event.preventDefault();


 })


//UTILS.addEvent(window, 'load', tabs());



//UTILS.(window,'hashchange', this.changeTab);

//
var formModule = {

    init: function () {
        this.initEvent();
        this.toLocalStorage();
        this.clearLocalStorage();
        this.fromLocalStorage();

    },

    toLocalStorage: function(){
      $("#saveBtn").on("click", function(){

            var captureValue = [];
            var urlValue = [];
          //  var storage = [];
            var data = [];

            var $captureList = $(".captureInput");
            var $urlList = $(".urlInput");


            $captureList.each(function() {
                captureValue.push(this.value);
            });

            $urlList.each(function() {
                urlValue.push(this.value);
            });


          for (var i = 0; i<captureValue.length; i++) {
           // storage[captureValue[i]] = urlValue[i];
            data[i] =([captureValue[i], urlValue[i]])
              //localStorage['data']= data[i];

             localStorage.setItem("data" , JSON.stringify(data[i]));

          }

      });
    },

    clearLocalStorage: function() {
        $("#clearBtn").on("click", function () {
            window.localStorage.clear();
        });
    },


    fromLocalStorage: function() {


    },

    initEvent: function () {
       // UTILS.addEvent(body,'click', this.toLocalStorage());
        //UTILS.addEvent(window, 'click', this.toLocalStorage())
       // UTILS.addEvent("clearBtn", 'load', this.toLocalStorage());
    }
};
formModule.init();
















