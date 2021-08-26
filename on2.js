var timecountsec =0 
var timecountmin =0
var mode = null

document.getElementById('whole').style.display = 'none'
document.getElementById('last').style.display = 'none'

document.getElementById('click').addEventListener('click',()=>{
    document.getElementById('click').style.display = 'none'
    setTimeout(()=>{
        document.getElementById('whole').style.display = 'block'
    },500)
    mode = setInterval(()=>{
        if(timecountsec > 60){
            timecountsec = 0
            timecountmin++
        }
        document.getElementById('time').innerText = 'Timer'
        document.getElementById('sec').innerHTML = timecountsec
        document.getElementById('min').innerHTML = timecountmin +':'
        timecountsec++
    },1000)
 
    fetch('https://litipsum.com/api/1')
    .then(res=> res.text())
    .then(data=>{
        var data2= document.getElementById('text').innerHTML = data  
        var data2char =document.getElementById('text')
        setInterval(()=>{
            var data1 = document.getElementById('textarea').innerText
            for(let i=0;i<data1.length;i++){
                if(data1.charAt(i)==' ' || data2.charAt==' '){
                    document.getElementById('check').style.display = 'none'
                }
                if(data1.charAt(i) !== data2.charAt(i)){
                    document.getElementById('check').style.display = 'block'
                    document.getElementById('check').innerText='Please check grammer and also spaces , commas etc..'
                }
                else{
                    document.getElementById('check').style.display = 'none'
                }
                if(data1.charAt(i) === data2.charAt(i)){
                    document.getElementById('check').style.display = 'none'
                }
            }
        },100)
    })

})
document.getElementById('submit').addEventListener('click',()=>{
    var data2= document.getElementById('text').innerHTML
    var data1 = document.getElementById('textarea').innerText
    
    if(data1.length == (data2.length) ){
        document.getElementById('whole').style.display = 'none'
        clearInterval(mode)
        document.getElementById('complete').innerText = 'You have completed in'+' '
        document.getElementById('sec1').innerHTML = ' '+timecountsec + '  sec'
        document.getElementById('min1').innerHTML = timecountmin +' min'
        document.getElementById('last').style.display = 'block'
    }
    else{
        alert('Please check grammer and also spaces , commas etc..')
    }
})
document.getElementById('clear').addEventListener('click',()=>{
    document.getElementById('textarea').innerText=''
})
document.getElementById('reload').addEventListener('click',()=>{
    location.reload(true)
})
var char=0
setInterval(()=>{
    var data2= document.getElementById('text').innerHTML
    var data1 = document.getElementById('textarea').innerText
},100)