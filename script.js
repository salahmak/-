var parameters = {
  target: '#myFunction',
  width: '812',
  height: '540',
  data: [{
    fn: 'x*x',
    color: '',
    derivative: {
      fn: '2*x',
      updateOnMouseMove: true
    }
  },
  {
    fn: 'x*x',
    color: 'red',
    derivative: {
      fn: '2*x',
      updateOnMouseMove: true
    }
  }
],
  grid: true,
  yAxis: {
    domain: [-9, 9]
  },
  xAxis: {
    domain: [-9, 9]
  }
};

responsive();

function plot() {
  let f = document.querySelector("#function").value;
  let color = document.querySelector("#color").value;
  let derivative = document.querySelector("#der").value;
  let f2 = document.querySelector("#function2").value;
  let color2 = document.querySelector("#color2").value;
  let derivative2 = document.querySelector("#der2").value;
  parameters.data[0].fn = f;
  parameters.data[0].color = color;
  parameters.data[0].derivative.fn = derivative;
  parameters.data[1].fn = f2;
  parameters.data[1].color = color2;
  parameters.data[1].derivative.fn = derivative2;
  

  var mediaQueryList = window.matchMedia("(orientation: portrait)");
  if (mediaQueryList.matches) {

        if (window.matchMedia("(max-width: 320px)").matches) {
      parameters.width = '300';
      parameters.height = '200';

    } else if(window.matchMedia("(max-width: 360px)").matches) {
      parameters.width = '340';
      parameters.height = '207';

    } else if(window.matchMedia("(max-width: 380px)").matches) {
      parameters.width = '360';
      parameters.height = '220';

    } else if(window.matchMedia("(max-width: 460px)").matches) {
      parameters.width = '410';
      parameters.height = '280';

    } else if(window.matchMedia("(max-width: 530px)").matches) {
      parameters.width = '499';
      parameters.height = '300';

    } else if(window.matchMedia("(max-width: 680px)").matches) {
      parameters.width = '655';
      parameters.height = '420';

    } else if (window.matchMedia("(max-width: 800px)").matches) {
      parameters.width = '680';
      parameters.height = '470';

    } else if(window.matchMedia("(max-width: 880px)").matches) {
      parameters.width = '790';
      parameters.height = '500';

    } else if (window.matchMedia("(max-width: 1280px)").matches) {
      parameters.width = '813';
      parameters.height = '542';
    }
  }
   else {
  parameters.width = '813';
  parameters.height = '542';

}



  functionPlot(parameters);
};
responsive();
function responsive() {
 

}

responsive();


plot();
