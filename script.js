let tl = gsap.timeline();

tl.from(".front",{
    y:1000,
    duration:1,
})
tl.from("#coffeec",{
    y:800,
    duration:1,
    scale:1.5
})

tl.from(".front h1",{
    y:1000,
    duration:1,
})
tl.from("#coffeeBean1",{
    y:1000,
    duration:0.7,
    scale:2
})
tl.from("#coffeeBean2",{
    y:1000,
    duration:0.7,
    scale:2
})
tl.from("#coffeeBean3",{
    y:1000,
    duration:0.7,
    scale:2
})
tl.from("#coffeeBean4",{
    y:1000,
    duration:0.7,
    scale:2,
    stagger: 0.1,
})
tl.from("#coffeeBean5",{
    y:1000,
    duration:0.7,
    scale:2,
    stagger: 0.1,

})

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        scrub:2,
        // markers:true,
        start:"0% 90%",
        end:"50% 45%"
    }
})


tl2.to("#coffeec",{
top:800,
left:230,
scale:0.9,
duration:0.8,
},"hi")

tl2.to("#coffeeBean1",{
top:800,
left:250,
scale:0.9,
rotate:142,
duration:0.8,
},"hi")


let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#menu",
        scroller:"body",
        scrub:1,
        // markers:true,
        start:"0% 90%",
        end:"50% 40%"
    }
})

tl3.to("#coffeec",{
    top:1430,
    left:765,
    scale:0.8,
    duration:0.8,
    },"hi3")

tl3.to("#coffeeBean1",{
    top:1480,
    left:765,
    scale:0.57,
    rotate:342,
    duration:0.8,
},"hi3")

tl3.from("#can1, #bean1",{
    x:-300,
    duration:1,

},"hi3")
tl3.from("#can3,#bean3",{
    x:300,
    duration:1
},"hi3")
tl3.from("#bean1,#bean3",{
    rotate:342
},"hi3")

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#contact",
        scroller:"body",
        scrub:2,
        start:"0% 90%",
        end:"50% 40%"
    }
})

tl4.to("#coffeec",{
    top:2300,
    left:1050,
    scale:1,
    },"hi4")
tl4.to("#can1",{
    top:790,
    left:670,
    scale:1,
    rotate:340,
    },"hi4")
tl4.to("#can3",{
    top:790,
    left:320,
    scale:1,
    rotate:30,
    },"hi4")
tl4.to("#coffeeBean1",{
    top:2300,
    left:1150,
    scale:0.57,
    rotate:60
},"hi4")
tl4.to("#bean1,#bean3",{
    rotate:342,
    top:790,
    left:390,
},"hi4")