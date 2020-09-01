import React from 'react'
import anime from 'animejs'
const vid = require('../videos/movingHexagons.mp4')
const adrianRosales = require('../svgs/adrianRosales.svg')


class Intro extends React.Component {
  constructor() {
    super()
    this.state={}
  }

  helloWorld = () => {
    const word = document.getElementById('name')
    console.log(word)
    if(word != null){
      word.style.visibility  = 'visible'
    } else {
      setTimeout(()=> {
        this.helloWorld()
      },2000)
    }


    var fillyPart = document.querySelector('#name')
    function donezo() {
    anime.set(fillyPart, {fill: 'rgba(0,153,255,0.9)'}) 
    }

    var animation = anime({
      targets: '#name path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      delay: function(el, i) { return i *100 },
      direction: 'alternate',    
      background: '#FFF',
      duration: 2500,
      loop: false
    })

    animation.finished.then(donezo);
  }

  render() {
    this.helloWorld()


    return (
    <div id="introDiv">
      <video className="bg-video" src={vid} loop muted autoPlay/>
      <svg id="name" viewBox="0 0 982 283" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0" y="-0.800018" width="982" height="189" fill="darkgrey">
        <rect fill="white" y="-0.800018" width="982" height="189"/>
        <path d="M5 181H27.2L32 133.2L52.2 133L55.8 181H81.2L62.2 5.99998H24L5 181ZM49.4 111H34.6L41.8 40.4L49.4 111Z"/>
        <path d="M89.1797 5.79999C101.18 5.79999 109.58 5.79999 114.38 5.79999C119.313 5.79999 124.78 6.66665 130.78 8.39999C136.78 9.99999 140.446 11.6667 141.78 13.4C143.246 15 144.913 18.6667 146.78 24.4C148.646 30.1333 149.58 35.8 149.58 41.4C149.713 46.8667 149.78 55.6 149.78 67.6V129C149.78 151 148.18 165.2 144.98 171.6C141.913 177.867 134.313 181 122.18 181H89.1797V5.79999ZM113.58 28.2V158.6C119.58 158.6 123.246 157 124.58 153.8C126.046 150.6 126.78 142.6 126.78 129.8V52.8C126.78 41.4667 126.113 34.5333 124.78 32C123.58 29.4667 119.846 28.2 113.58 28.2Z"/>
        <path d="M157.734 181H183.134V101.4C189.668 101.4 193.934 101.933 195.934 103C197.934 104.067 199.001 106.6 199.134 110.6V130.4C199.268 150 199.868 163.333 200.934 170.4C202.134 177.467 204.068 181 206.734 181H227.734C228.801 181 229.334 180.8 229.334 180.4C228.134 177.333 227.001 172.333 225.934 165.4C225.001 158.467 224.534 152 224.534 146V109C224.534 101.8 223.468 96.8667 221.334 94.2C219.201 91.5333 213.868 89.5333 205.334 88.2C213.868 86.2 219.201 83.8667 221.334 81.2C223.468 78.4 224.534 73 224.534 65V42.2C224.534 36.8667 224.534 32.9333 224.534 30.4C224.534 27.7333 224.268 24.8 223.734 21.6C223.201 18.4 222.734 16.2 222.334 15C221.934 13.8 220.801 12.4 218.934 10.8C217.201 9.19999 215.668 8.26665 214.334 7.99998C213.001 7.59999 210.534 7.19999 206.934 6.79998C203.334 6.26665 200.068 5.99998 197.134 5.99998C194.201 5.99998 189.734 5.99998 183.734 5.99998H157.734V181ZM183.134 24.6C189.534 24.6 193.534 24.9333 195.134 25.6C196.734 26.2667 197.668 28.2 197.934 31.4V72.8C197.668 75.4667 197.068 77.2 196.134 78C195.201 78.6667 193.268 79.0666 190.334 79.2H183.134V24.6Z"/>
        <path d="M237.227 181.2H259.427V5.99998H237.227V181.2Z"/>
        <path d="M267.305 181H289.505L294.305 133.2L314.505 133L318.105 181H343.505L324.505 5.99998H286.305L267.305 181ZM311.705 111H296.905L304.105 40.4L311.705 111Z"/>
        <path d="M351.484 181.2V5.99998H389.484L404.284 140.2V5.99998H425.484L425.684 181.2L387.484 181L372.684 47V181.2H351.484Z"/>
        <path d="M476.289 181H501.689V101.4C508.222 101.4 512.489 101.933 514.489 103C516.489 104.067 517.556 106.6 517.689 110.6V130.4C517.822 150 518.422 163.333 519.489 170.4C520.689 177.467 522.622 181 525.289 181H546.289C547.356 181 547.889 180.8 547.889 180.4C546.689 177.333 545.556 172.333 544.489 165.4C543.556 158.467 543.089 152 543.089 146V109C543.089 101.8 542.022 96.8667 539.889 94.2C537.756 91.5333 532.422 89.5333 523.889 88.2C532.422 86.2 537.756 83.8667 539.889 81.2C542.022 78.4 543.089 73 543.089 65V42.2C543.089 36.8667 543.089 32.9333 543.089 30.4C543.089 27.7333 542.822 24.8 542.289 21.6C541.756 18.4 541.289 16.2 540.889 15C540.489 13.8 539.356 12.4 537.489 10.8C535.756 9.19999 534.222 8.26665 532.889 7.99998C531.556 7.59999 529.089 7.19999 525.489 6.79998C521.889 6.26665 518.622 5.99998 515.689 5.99998C512.756 5.99998 508.289 5.99998 502.289 5.99998H476.289V181ZM501.689 24.6C508.089 24.6 512.089 24.9333 513.689 25.6C515.289 26.2667 516.222 28.2 516.489 31.4V72.8C516.222 75.4667 515.622 77.2 514.689 78C513.756 78.6667 511.822 79.0666 508.889 79.2H501.689V24.6Z"/>
        <path d="M586.781 181.4C599.981 181.4 608.381 179.333 611.981 175.2C615.581 171.067 617.381 161.6 617.381 146.8V40.4C617.381 25.4667 615.515 16 611.781 12C608.181 7.86665 599.715 5.79999 586.381 5.79999C573.048 5.79999 564.581 7.79999 560.981 11.8C557.515 15.8 555.781 25.3333 555.781 40.4V146.8C555.781 161.867 557.581 171.4 561.181 175.4C564.781 179.4 573.315 181.4 586.781 181.4ZM592.781 151.2C592.781 153.867 592.315 155.733 591.381 156.8C590.581 157.867 589.115 158.4 586.981 158.4C582.715 158.4 580.581 156 580.581 151.2V36.2C580.581 31.2667 582.515 28.8 586.381 28.8C590.648 28.8 592.781 31.2667 592.781 36.2V151.2Z"/>
        <path d="M654.112 4.19998C643.446 5.13332 636.179 6.73332 632.312 8.99999C628.579 11.2667 626.246 15.5333 625.312 21.8V51.4C625.846 61.2667 626.579 68.2 627.513 72.2C628.579 76.0667 630.779 80.2667 634.112 84.8L659.713 120.2C662.779 126.067 664.579 129.933 665.112 131.8C665.646 133.533 665.912 136.733 665.912 141.4C665.912 149.8 665.446 155.467 664.513 158.4C663.713 161.2 661.979 162.6 659.312 162.6C655.446 162.6 652.779 161.267 651.312 158.6C649.846 155.933 649.112 151.067 649.112 144V117.2H625.513V147.8C626.579 157.4 627.712 163.8 628.912 167C630.112 170.067 632.846 173.333 637.112 176.8C641.112 180 648.046 182.133 657.912 183.2C667.779 182.933 674.379 182.067 677.713 180.6C681.179 179.133 684.113 175.933 686.513 171C689.046 165.667 690.312 159.4 690.312 152.2V136.6C690.312 125.533 688.113 116.4 683.713 109.2L659.312 77C654.646 70.7333 651.846 66.6 650.912 64.6C650.112 62.6 649.512 58.9333 649.112 53.6V37C649.112 32.3333 649.646 28.8667 650.713 26.6C651.779 24.3333 653.779 23.1333 656.713 23C660.179 23 662.513 23.9333 663.713 25.8C665.046 27.6667 665.713 30.8 665.713 35.2V71H690.312V29C689.246 22.2 686.979 17 683.513 13.4C680.179 9.79998 674.779 7.13332 667.312 5.39999L654.112 4.19998Z"/>
        <path d="M698.164 181H720.364L725.164 133.2L745.364 133L748.964 181H774.364L755.364 5.99998H717.164L698.164 181ZM742.564 111H727.764L734.964 40.4L742.564 111Z"/>
        <path d="M782.344 181H839.544V158.8H804.544V5.99998H782.344V181Z"/>
        <path d="M847.578 181H904.978V159H872.978V98.2H904.978V75.8H872.978V28.2H904.978V5.99998H847.578V181Z"/>
        <path d="M941.612 4.19998C930.946 5.13332 923.679 6.73332 919.812 8.99999C916.079 11.2667 913.746 15.5333 912.812 21.8V51.4C913.346 61.2667 914.079 68.2 915.013 72.2C916.079 76.0667 918.279 80.2667 921.612 84.8L947.213 120.2C950.279 126.067 952.079 129.933 952.612 131.8C953.146 133.533 953.412 136.733 953.412 141.4C953.412 149.8 952.946 155.467 952.013 158.4C951.213 161.2 949.479 162.6 946.812 162.6C942.946 162.6 940.279 161.267 938.812 158.6C937.346 155.933 936.612 151.067 936.612 144V117.2H913.013V147.8C914.079 157.4 915.212 163.8 916.412 167C917.612 170.067 920.346 173.333 924.612 176.8C928.612 180 935.546 182.133 945.412 183.2C955.279 182.933 961.879 182.067 965.213 180.6C968.679 179.133 971.613 175.933 974.013 171C976.546 165.667 977.812 159.4 977.812 152.2V136.6C977.812 125.533 975.613 116.4 971.213 109.2L946.812 77C942.146 70.7333 939.346 66.6 938.412 64.6C937.612 62.6 937.012 58.9333 936.612 53.6V37C936.612 32.3333 937.146 28.8667 938.213 26.6C939.279 24.3333 941.279 23.1333 944.213 23C947.679 23 950.013 23.9333 951.213 25.8C952.546 27.6667 953.213 30.8 953.213 35.2V71H977.812V29C976.746 22.2 974.479 17 971.013 13.4C967.679 9.79998 962.279 7.13332 954.812 5.39999L941.612 4.19998Z"/>
        </mask>
        <path d="M5 181H27.2L32 133.2L52.2 133L55.8 181H81.2L62.2 5.99998H24L5 181ZM49.4 111H34.6L41.8 40.4L49.4 111Z" stroke="black" stroke-width="8" mask="url(#path-1-outside-1)"/>
        <path d="M89.1797 5.79999C101.18 5.79999 109.58 5.79999 114.38 5.79999C119.313 5.79999 124.78 6.66665 130.78 8.39999C136.78 9.99999 140.446 11.6667 141.78 13.4C143.246 15 144.913 18.6667 146.78 24.4C148.646 30.1333 149.58 35.8 149.58 41.4C149.713 46.8667 149.78 55.6 149.78 67.6V129C149.78 151 148.18 165.2 144.98 171.6C141.913 177.867 134.313 181 122.18 181H89.1797V5.79999ZM113.58 28.2V158.6C119.58 158.6 123.246 157 124.58 153.8C126.046 150.6 126.78 142.6 126.78 129.8V52.8C126.78 41.4667 126.113 34.5333 124.78 32C123.58 29.4667 119.846 28.2 113.58 28.2Z" stroke="black" stroke-width="8" mask="url(#path-1-outside-1)"/>
        <path d="M157.734 181H183.134V101.4C189.668 101.4 193.934 101.933 195.934 103C197.934 104.067 199.001 106.6 199.134 110.6V130.4C199.268 150 199.868 163.333 200.934 170.4C202.134 177.467 204.068 181 206.734 181H227.734C228.801 181 229.334 180.8 229.334 180.4C228.134 177.333 227.001 172.333 225.934 165.4C225.001 158.467 224.534 152 224.534 146V109C224.534 101.8 223.468 96.8667 221.334 94.2C219.201 91.5333 213.868 89.5333 205.334 88.2C213.868 86.2 219.201 83.8667 221.334 81.2C223.468 78.4 224.534 73 224.534 65V42.2C224.534 36.8667 224.534 32.9333 224.534 30.4C224.534 27.7333 224.268 24.8 223.734 21.6C223.201 18.4 222.734 16.2 222.334 15C221.934 13.8 220.801 12.4 218.934 10.8C217.201 9.19999 215.668 8.26665 214.334 7.99998C213.001 7.59999 210.534 7.19999 206.934 6.79998C203.334 6.26665 200.068 5.99998 197.134 5.99998C194.201 5.99998 189.734 5.99998 183.734 5.99998H157.734V181ZM183.134 24.6C189.534 24.6 193.534 24.9333 195.134 25.6C196.734 26.2667 197.668 28.2 197.934 31.4V72.8C197.668 75.4667 197.068 77.2 196.134 78C195.201 78.6667 193.268 79.0666 190.334 79.2H183.134V24.6Z" stroke="black" stroke-width="8" mask="url(#path-1-outside-1)"/>
        <path d="M237.227 181.2H259.427V5.99998H237.227V181.2Z" stroke="black" stroke-width="8" mask="url(#path-1-outside-1)"/>
        <path d="M267.305 181H289.505L294.305 133.2L314.505 133L318.105 181H343.505L324.505 5.99998H286.305L267.305 181ZM311.705 111H296.905L304.105 40.4L311.705 111Z" stroke="black" stroke-width="8" mask="url(#path-1-outside-1)"/>
        <path d="M351.484 181.2V5.99998H389.484L404.284 140.2V5.99998H425.484L425.684 181.2L387.484 181L372.684 47V181.2H351.484Z" stroke="black" stroke-width="8" mask="url(#path-1-outside-1)"/>
        <path d="M476.289 181H501.689V101.4C508.222 101.4 512.489 101.933 514.489 103C516.489 104.067 517.556 106.6 517.689 110.6V130.4C517.822 150 518.422 163.333 519.489 170.4C520.689 177.467 522.622 181 525.289 181H546.289C547.356 181 547.889 180.8 547.889 180.4C546.689 177.333 545.556 172.333 544.489 165.4C543.556 158.467 543.089 152 543.089 146V109C543.089 101.8 542.022 96.8667 539.889 94.2C537.756 91.5333 532.422 89.5333 523.889 88.2C532.422 86.2 537.756 83.8667 539.889 81.2C542.022 78.4 543.089 73 543.089 65V42.2C543.089 36.8667 543.089 32.9333 543.089 30.4C543.089 27.7333 542.822 24.8 542.289 21.6C541.756 18.4 541.289 16.2 540.889 15C540.489 13.8 539.356 12.4 537.489 10.8C535.756 9.19999 534.222 8.26665 532.889 7.99998C531.556 7.59999 529.089 7.19999 525.489 6.79998C521.889 6.26665 518.622 5.99998 515.689 5.99998C512.756 5.99998 508.289 5.99998 502.289 5.99998H476.289V181ZM501.689 24.6C508.089 24.6 512.089 24.9333 513.689 25.6C515.289 26.2667 516.222 28.2 516.489 31.4V72.8C516.222 75.4667 515.622 77.2 514.689 78C513.756 78.6667 511.822 79.0666 508.889 79.2H501.689V24.6Z" stroke="black" stroke-width="8" mask="url(#path-1-outside-1)"/>
        <path d="M586.781 181.4C599.981 181.4 608.381 179.333 611.981 175.2C615.581 171.067 617.381 161.6 617.381 146.8V40.4C617.381 25.4667 615.515 16 611.781 12C608.181 7.86665 599.715 5.79999 586.381 5.79999C573.048 5.79999 564.581 7.79999 560.981 11.8C557.515 15.8 555.781 25.3333 555.781 40.4V146.8C555.781 161.867 557.581 171.4 561.181 175.4C564.781 179.4 573.315 181.4 586.781 181.4ZM592.781 151.2C592.781 153.867 592.315 155.733 591.381 156.8C590.581 157.867 589.115 158.4 586.981 158.4C582.715 158.4 580.581 156 580.581 151.2V36.2C580.581 31.2667 582.515 28.8 586.381 28.8C590.648 28.8 592.781 31.2667 592.781 36.2V151.2Z" stroke="black" stroke-width="8" mask="url(#path-1-outside-1)"/>
        <path d="M654.112 4.19998C643.446 5.13332 636.179 6.73332 632.312 8.99999C628.579 11.2667 626.246 15.5333 625.312 21.8V51.4C625.846 61.2667 626.579 68.2 627.513 72.2C628.579 76.0667 630.779 80.2667 634.112 84.8L659.713 120.2C662.779 126.067 664.579 129.933 665.112 131.8C665.646 133.533 665.912 136.733 665.912 141.4C665.912 149.8 665.446 155.467 664.513 158.4C663.713 161.2 661.979 162.6 659.312 162.6C655.446 162.6 652.779 161.267 651.312 158.6C649.846 155.933 649.112 151.067 649.112 144V117.2H625.513V147.8C626.579 157.4 627.712 163.8 628.912 167C630.112 170.067 632.846 173.333 637.112 176.8C641.112 180 648.046 182.133 657.912 183.2C667.779 182.933 674.379 182.067 677.713 180.6C681.179 179.133 684.113 175.933 686.513 171C689.046 165.667 690.312 159.4 690.312 152.2V136.6C690.312 125.533 688.113 116.4 683.713 109.2L659.312 77C654.646 70.7333 651.846 66.6 650.912 64.6C650.112 62.6 649.512 58.9333 649.112 53.6V37C649.112 32.3333 649.646 28.8667 650.713 26.6C651.779 24.3333 653.779 23.1333 656.713 23C660.179 23 662.513 23.9333 663.713 25.8C665.046 27.6667 665.713 30.8 665.713 35.2V71H690.312V29C689.246 22.2 686.979 17 683.513 13.4C680.179 9.79998 674.779 7.13332 667.312 5.39999L654.112 4.19998Z" stroke="black" stroke-width="8" mask="url(#path-1-outside-1)"/>
        <path d="M698.164 181H720.364L725.164 133.2L745.364 133L748.964 181H774.364L755.364 5.99998H717.164L698.164 181ZM742.564 111H727.764L734.964 40.4L742.564 111Z" stroke="black" stroke-width="8" mask="url(#path-1-outside-1)"/>
        <path d="M782.344 181H839.544V158.8H804.544V5.99998H782.344V181Z" stroke="black" stroke-width="8" mask="url(#path-1-outside-1)"/>
        <path d="M847.578 181H904.978V159H872.978V98.2H904.978V75.8H872.978V28.2H904.978V5.99998H847.578V181Z" stroke="black" stroke-width="8" mask="url(#path-1-outside-1)"/>
        <path d="M941.612 4.19998C930.946 5.13332 923.679 6.73332 919.812 8.99999C916.079 11.2667 913.746 15.5333 912.812 21.8V51.4C913.346 61.2667 914.079 68.2 915.013 72.2C916.079 76.0667 918.279 80.2667 921.612 84.8L947.213 120.2C950.279 126.067 952.079 129.933 952.612 131.8C953.146 133.533 953.412 136.733 953.412 141.4C953.412 149.8 952.946 155.467 952.013 158.4C951.213 161.2 949.479 162.6 946.812 162.6C942.946 162.6 940.279 161.267 938.812 158.6C937.346 155.933 936.612 151.067 936.612 144V117.2H913.013V147.8C914.079 157.4 915.212 163.8 916.412 167C917.612 170.067 920.346 173.333 924.612 176.8C928.612 180 935.546 182.133 945.412 183.2C955.279 182.933 961.879 182.067 965.213 180.6C968.679 179.133 971.613 175.933 974.013 171C976.546 165.667 977.812 159.4 977.812 152.2V136.6C977.812 125.533 975.613 116.4 971.213 109.2L946.812 77C942.146 70.7333 939.346 66.6 938.412 64.6C937.612 62.6 937.012 58.9333 936.612 53.6V37C936.612 32.3333 937.146 28.8667 938.213 26.6C939.279 24.3333 941.279 23.1333 944.213 23C947.679 23 950.013 23.9333 951.213 25.8C952.546 27.6667 953.213 30.8 953.213 35.2V71H977.812V29C976.746 22.2 974.479 17 971.013 13.4C967.679 9.79998 962.279 7.13332 954.812 5.39999L941.612 4.19998Z" stroke="black" stroke-width="8" mask="url(#path-1-outside-1)"/>
        <g filter="url(#filter0_d)">
        <path d="M64.9675 273H73.0955V246.504H83.3355V239.336H73.0955V224.104H83.3355V217H64.9675V273Z" fill="black" fill-opacity="0.88"/>
        <path d="M122.89 217V251.56C122.89 259.197 122.57 264.211 121.93 266.6C121.333 268.989 119.775 270.973 117.258 272.552C115.594 273.576 113.695 274.088 111.562 274.088C108.277 274.088 105.567 273.043 103.434 270.952C101.301 268.861 100.063 266.045 99.722 262.504C99.594 260.541 99.53 256.403 99.53 250.088V217H108.234V258.088C108.234 261.245 108.362 263.144 108.618 263.784C108.874 264.381 109.706 264.851 111.114 265.192C112.65 264.851 113.546 264.381 113.802 263.784C114.101 263.144 114.25 261.288 114.25 258.216V217H122.89Z" fill="black" fill-opacity="0.88"/>
        <path d="M139.093 273H157.397V265.896H146.197V217H139.093V273Z" fill="black" fill-opacity="0.88"/>
        <path d="M173.655 273H191.959V265.896H180.759V217H173.655V273Z" fill="black" fill-opacity="0.88"/>
        <path d="M244.809 216.424C241.395 216.723 239.07 217.235 237.833 217.96C236.638 218.685 235.891 220.051 235.593 222.056V231.528C235.763 234.685 235.998 236.904 236.297 238.184C236.638 239.421 237.342 240.765 238.409 242.216L246.601 253.544C247.582 255.421 248.158 256.659 248.329 257.256C248.499 257.811 248.585 258.835 248.585 260.328C248.585 263.016 248.435 264.829 248.137 265.768C247.881 266.664 247.326 267.112 246.473 267.112C245.235 267.112 244.382 266.685 243.913 265.832C243.443 264.979 243.209 263.421 243.209 261.16V252.584H235.657V262.376C235.998 265.448 236.361 267.496 236.745 268.52C237.129 269.501 238.003 270.547 239.369 271.656C240.649 272.68 242.867 273.363 246.025 273.704C249.182 273.619 251.294 273.341 252.361 272.872C253.47 272.403 254.409 271.379 255.177 269.8C255.987 268.093 256.393 266.088 256.393 263.784V258.792C256.393 255.251 255.689 252.328 254.281 250.024L246.473 239.72C244.979 237.715 244.083 236.392 243.785 235.752C243.529 235.112 243.337 233.939 243.209 232.232V226.92C243.209 225.427 243.379 224.317 243.721 223.592C244.062 222.867 244.702 222.483 245.641 222.44C246.75 222.44 247.497 222.739 247.881 223.336C248.307 223.933 248.521 224.936 248.521 226.344V237.8H256.393V224.36C256.051 222.184 255.326 220.52 254.217 219.368C253.15 218.216 251.422 217.363 249.033 216.808L244.809 216.424Z" fill="black" fill-opacity="0.88"/>
        <path d="M272.593 224.104H279.697V273H287.889V224.104H294.993V217H272.593V224.104Z" fill="black" fill-opacity="0.88"/>
        <path d="M311.218 273H318.322L319.858 257.704L326.322 257.64L327.474 273H335.602L329.522 217H317.298L311.218 273ZM325.426 250.6H320.69L322.994 228.008L325.426 250.6Z" fill="black" fill-opacity="0.88"/>
        <path d="M351.843 227.048V263.336C352.141 267.816 353.059 270.803 354.595 272.296C356.173 273.747 359.267 274.493 363.875 274.536C366.947 274.536 369.165 273.875 370.531 272.552C371.896 271.187 372.664 268.84 372.835 265.512V246.056H364.899L364.835 262.888C364.835 263.997 364.643 264.787 364.259 265.256C363.917 265.683 363.299 265.896 362.403 265.896C361.336 265.896 360.632 265.704 360.291 265.32C359.992 264.893 359.843 264.061 359.843 262.824V228.776C359.843 227.325 359.992 226.408 360.291 226.024C360.589 225.597 361.251 225.384 362.275 225.384C363.384 225.384 364.088 225.597 364.387 226.024C364.685 226.451 364.835 227.432 364.835 228.968V238.056H372.835V225.384C372.835 222.355 372.067 220.179 370.531 218.856C369.037 217.491 366.456 216.68 362.787 216.424C358.221 216.424 355.256 217.064 353.891 218.344C352.525 219.624 351.843 222.525 351.843 227.048Z" fill="black" fill-opacity="0.88"/>
        <path d="M409.253 217H400.805L397.413 239.336V217H389.093V273H397.413V245.8L401.317 273H409.893L404.389 241.768L409.253 217Z" fill="black" fill-opacity="0.88"/>
        <path d="M453.468 217H460.572L464.732 252.904L467.548 217H475.228L479.388 252.904L482.652 217H489.692L483.356 273H474.588L472.028 244.84L468.636 273H459.932L453.468 217Z" fill="black" fill-opacity="0.88"/>
        <path d="M505.968 273H524.336V265.96H514.096V246.504H524.336V239.336H514.096V224.104H524.336V217H505.968V273Z" fill="black" fill-opacity="0.88"/>
        <path d="M548.594 222.952C551.069 222.952 552.626 223.059 553.266 223.272C553.906 223.485 554.29 224.104 554.418 225.128V238.376C554.333 239.272 554.098 239.827 553.714 240.04C553.33 240.253 552.562 240.381 551.41 240.424H548.594V222.952ZM548.914 266.408V249H552.434C553.799 249 554.717 249.107 555.186 249.32C555.655 249.533 555.975 250.088 556.146 250.984V264.232C555.975 265.256 555.527 265.875 554.802 266.088C554.077 266.301 552.114 266.408 548.914 266.408ZM540.53 217V273.128H553.01C557.405 273.043 560.306 272.573 561.714 271.72C563.122 270.824 563.826 268.755 563.826 265.512L563.89 254.056C563.89 249.747 563.677 247.037 563.25 245.928C562.866 244.776 561.607 243.603 559.474 242.408C560.967 241.64 561.778 240.659 561.906 239.464V229.096C561.906 223.891 561.479 220.584 560.626 219.176C559.815 217.725 557.767 217 554.482 217H540.53Z" fill="black" fill-opacity="0.88"/>
        <path d="M634.843 216.936C638.683 216.936 641.37 216.936 642.906 216.936C644.485 216.936 646.234 217.213 648.154 217.768C650.074 218.28 651.248 218.813 651.674 219.368C652.144 219.88 652.677 221.053 653.274 222.888C653.872 224.723 654.171 226.536 654.171 228.328C654.213 230.077 654.234 232.872 654.234 236.712V256.36C654.234 263.4 653.722 267.944 652.698 269.992C651.717 271.997 649.285 273 645.403 273H634.843V216.936ZM642.651 224.104V265.832C644.571 265.832 645.744 265.32 646.17 264.296C646.64 263.272 646.875 260.712 646.875 256.616V231.976C646.875 228.349 646.661 226.131 646.234 225.32C645.85 224.509 644.656 224.104 642.651 224.104Z" fill="black" fill-opacity="0.88"/>
        <path d="M670.468 273H688.836V265.96H678.596V246.504H688.836V239.336H678.596V224.104H688.836V217H670.468V273Z" fill="black" fill-opacity="0.88"/>
        <path d="M705.03 217H712.134L716.294 252.904L719.558 217H726.598L720.198 273H711.494L705.03 217Z" fill="black" fill-opacity="0.88"/>
        <path d="M742.78 273H761.148V265.96H750.908V246.504H761.148V239.336H750.908V224.104H761.148V217H742.78V273Z" fill="black" fill-opacity="0.88"/>
        <path d="M777.343 273H795.646V265.896H784.446V217H777.343V273Z" fill="black" fill-opacity="0.88"/>
        <path d="M821.825 273.128C826.049 273.128 828.737 272.467 829.889 271.144C831.041 269.821 831.617 266.792 831.617 262.056V228.008C831.617 223.229 831.02 220.2 829.825 218.92C828.673 217.597 825.964 216.936 821.697 216.936C817.43 216.936 814.721 217.576 813.569 218.856C812.46 220.136 811.905 223.187 811.905 228.008V262.056C811.905 266.877 812.481 269.928 813.633 271.208C814.785 272.488 817.516 273.128 821.825 273.128ZM823.745 263.464C823.745 264.317 823.596 264.915 823.297 265.256C823.041 265.597 822.572 265.768 821.889 265.768C820.524 265.768 819.841 265 819.841 263.464V226.664C819.841 225.085 820.46 224.296 821.697 224.296C823.062 224.296 823.745 225.085 823.745 226.664V263.464Z" fill="black" fill-opacity="0.88"/>
        <path d="M847.843 273H855.971V247.528H862.242C864.205 247.485 865.848 246.803 867.171 245.48C868.536 244.115 869.219 242.472 869.219 240.552V228.584C869.219 226.877 869.219 225.619 869.219 224.808C869.219 223.955 869.133 223.016 868.963 221.992C868.792 220.968 868.643 220.264 868.515 219.88C868.387 219.496 868.024 219.048 867.427 218.536C866.872 218.024 866.381 217.725 865.955 217.64C865.528 217.512 864.738 217.384 863.586 217.256C862.434 217.085 861.389 217 860.451 217C859.512 217 858.082 217 856.162 217H847.843V273ZM855.971 222.952C858.019 222.952 859.298 223.059 859.81 223.272C860.322 223.485 860.621 224.104 860.706 225.128V238.376C860.621 239.229 860.429 239.784 860.13 240.04C859.832 240.253 859.213 240.381 858.274 240.424H855.971V222.952Z" fill="black" fill-opacity="0.88"/>
        <path d="M885.468 273H903.836V265.96H893.596V246.504H903.836V239.336H893.596V224.104H903.836V217H885.468V273Z" fill="black" fill-opacity="0.88"/>
        <path d="M920.03 273H928.158V247.528C930.249 247.528 931.614 247.699 932.254 248.04C932.894 248.381 933.235 249.192 933.278 250.472V256.808C933.321 263.08 933.513 267.347 933.854 269.608C934.238 271.869 934.857 273 935.71 273H942.43C942.771 273 942.942 272.936 942.942 272.808C942.558 271.827 942.195 270.227 941.854 268.008C941.555 265.789 941.406 263.72 941.406 261.8V249.96C941.406 247.656 941.065 246.077 940.382 245.224C939.699 244.371 937.993 243.731 935.262 243.304C937.993 242.664 939.699 241.917 940.382 241.064C941.065 240.168 941.406 238.44 941.406 235.88V228.584C941.406 226.877 941.406 225.619 941.406 224.808C941.406 223.955 941.321 223.016 941.15 221.992C940.979 220.968 940.83 220.264 940.702 219.88C940.574 219.496 940.211 219.048 939.614 218.536C939.059 218.024 938.569 217.725 938.142 217.64C937.715 217.512 936.926 217.384 935.774 217.256C934.622 217.085 933.577 217 932.638 217C931.699 217 930.27 217 928.35 217H920.03V273ZM928.158 222.952C930.206 222.952 931.486 223.059 931.998 223.272C932.51 223.485 932.809 224.104 932.894 225.128V238.376C932.809 239.229 932.617 239.784 932.318 240.04C932.019 240.253 931.401 240.381 930.462 240.424H928.158V222.952Z" fill="black" fill-opacity="0.88"/>
        </g>
        <defs>
        <filter id="filter0_d" x="60.9675" y="216.424" width="885.974" height="66.112" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        </defs>
      </svg>
    </div>
    )
  }
}

export default Intro