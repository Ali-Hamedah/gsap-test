
<template>
  
    <div class="one" ref="one">
          <div class="center-light"></div>
          <h1 id="JUICE">JUICY</h1>
<v-img id="cans" ref="cans" src="/images/can.png"></v-img>
<v-img id="blackberry1" ref="blackberry1" src="/images/blackberry1.png"></v-img>
<v-img id="blackberry2" ref="blackberry2" src="/images/blackberry2.png"></v-img>
<v-img id="blackberry3" ref="blackberry3" src="/images/blackberry3.png"></v-img>
<v-img id="coconoutleaf" ref="coconoutleaf" src="/images/coconoutleaf.png"></v-img>
<v-img id="leaf" ref="leaf" src="/images/leaf.png"></v-img>

    </div >

 <v-container class="pl-16">
  <v-row >
    <v-col cols="12" md="6"> 
      <div class="tow  pt-16" ref="tow">
        <div class="about  mb-8" >
          <h1>
            Best Ingredients Food Juices 
            <span style="color: #825dd2;">On Right Handmade</span>
          </h1>
        </div>

        <v-row >
          <v-col cols="12" sm="6">
            <v-card elevation="0" class="pa-4">
              <v-img src="/images/blackberry1.png" height="70px" width="70px" />
              <v-card-title class="text-h6">
                Lorem, Masdrites.
              </v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6">
            <v-card elevation="0" class="pa-4">
              <v-img src="/images/blackberry1.png" height="70px" width="70px" />
              <v-card-title class="text-h6">
                Another Card
              </v-card-title>
              <v-card-text>
                More description here for testing layout.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-btn  color="#825dd2" class="mt-4" rounded>SHOP NOW</v-btn>
      </div>
    </v-col>
  </v-row>
</v-container>


   <div class="three" ref="three">
  <v-container class="pl-16">
    <v-row>
      <v-col cols="12" md="12"> 
        <div class="tow">
          <div class="about2">
            <h1>BLACKBERRY</h1>
            <v-img id="stand" src="/images/stand.png"></v-img>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</div>

</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue'

const one = ref<HTMLElement | null>(null)
const tow = ref<HTMLElement | null>(null)
const three = ref<HTMLElement | null>(null)
const cans = ref<any>(null)
const blackberry1 = ref<any>(null)
const blackberry2 = ref<any>(null)
const blackberry3 = ref<any>(null)
const coconoutleaf = ref<any>(null)
const leaf = ref<any>(null)

const { $gsap } = useNuxtApp()


onMounted(() => {
  if (one.value && cans.value && blackberry1.value && blackberry2.value && blackberry3.value && coconoutleaf.value && leaf.value) {
   const tl = $gsap.timeline({
  scrollTrigger: {
    trigger: tow.value,
    start: window.innerWidth < 980 ? '0% 99%' : '0% 95%',
    end: window.innerWidth < 980 ? '70% 70%' : '80% 80%',
    scrub: true,
  
  }
});


    // كل العناصر تتحرك مع العلبة
   const elements = [
  { el: cans.value.$el, y: window.innerHeight * 1, x: window.innerWidth * 0.1, rotation: -30, scale: 0.8 },
  { el: blackberry1.value.$el, y: window.innerHeight * 0.7, x: window.innerWidth * 0.28, rotation: 70, width: window.innerWidth * 0.15 },
  { el: blackberry2.value.$el, y: window.innerHeight * 0.9, x: window.innerWidth * 0.1, rotation: 50, width: window.innerWidth * 0.1 },
  { el: blackberry3.value.$el, y: window.innerHeight * 0.65, x: -window.innerWidth * 0.45, rotation: 90, scale: 0.4 },
  { el: leaf.value.$el, y: window.innerHeight * 1, x: window.innerWidth * 0.5, rotation: -5, width: window.innerWidth * 0.12 },
]


elements.forEach(item => {
  tl.to(item.el, {
    y: item.y,
    x: item.x,
    rotation: item.rotation,
    duration: 2,
       scale: item.scale,
  }, "moveGroup")
})

const t2 = $gsap.timeline({
      scrollTrigger: {
        trigger: three.value,
        start: '0% 95%',
        end: '20% 20%',
        scrub: true,
        markers: true
      }
    })
  t2.to(cans.value.$el, {
   y: window.innerHeight * 1.8,
  x: window.innerWidth * 0.02,  
  rotation: 1,
  duration: 2,
  scale: 0.8

})

  }
})
</script>

<style scoped>
.one {
     position: relative;
    height: 100vh;
    width: 100%;
    background-color: #825dd2;
    display: flex;
    justify-content: center;
    align-items: center;
 z-index: 2;

}
.center-light {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 80%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 40%, transparent 70%);
  transform: translate(-50%, -50%);
  z-index: 1;
filter: blur(5px); /* يجعل الشكل مموّج وناعم */
}


.tow {
 
    height: 100vh;
    width: 100%;

 

    justify-content: center;
    align-items: center;

}
.three {
    height: 100vh;
    width: 100%;
    background-color: #ba9bfa;
    display: flex;
    justify-content: center;
    align-items: center;
}
#cans {
  width: 100%;
  max-width: 500px;          /* الحد الأقصى للحجم */
  height: auto;              /* يحافظ على النسبة */
  z-index: 10;
}

#leaf {
  position: absolute;
  width: clamp(60px, 15vw, 150px);  /* صغير على الموبايل وكبير على الديسكتوب */
  top: 55%;
  left: 10%;
  z-index: 10;
}

#coconoutleaf {
  position: absolute;
  width: clamp(100px, 30vw, 250px);
  top: 5%;
  right: 0;
  z-index: 10;
}

#blackberry1 {
  position: absolute;
  width: clamp(80px, 20vw, 200px);
  top: 50%;
  left: 30%;
  z-index: 1;
}

#blackberry2 {
  position: absolute;
  width: clamp(50px, 12vw, 120px);
  top: 30%;
  left: 35%;
  z-index: 1;
}

#blackberry3 {
  position: absolute;
  width: clamp(70px, 18vw, 180px);
  top: 30%;
  right: 30%;
  z-index: 1;
}

#JUICE {
  position: absolute;
  top: 10%;
  left: 50%;                  /* لتوسيط العنصر */
  transform: translateX(-50%);
  width: 80vw;                 /* تأخذ 80% من عرض الشاشة */
  font-size: clamp(4rem, 28vw, 25rem);
  font-weight: 900;
  color: #fff;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  z-index: 1;
  white-space: nowrap;         /* لا يكسر الكلمة إلى سطرين */
  text-align: center;
}

/* .about h1 {
width: 100%;
font-weight: 800;
font-size: 5vh;


} */
.about2 {
  display: flex;
  flex-direction: column;
  align-items: center;      /* horizontal zentrieren */
  justify-content: center;  /* vertikal zentrieren */
  text-align: center;
  height: 100%;             /* falls notwendig */
}

.about2 h1 {
  font-size: clamp(2rem, 11vw, 18vh); /* أصغر: 4rem، مرن حسب الشاشة، أكبر: 18vh */
  font-weight: 900;
  color: #683fbf;
  margin-top: clamp(2rem, 10vw, 5%);
margin-bottom: clamp(-40vw, -30vw, -25vw);



  text-align: center;
}

#stand {
  width: clamp(20rem, 50vw, 80vh); /* responsive Größe */
  max-width: 100%;
  z-index: 1;
  display: block;      /* nötig, damit margin auto funktioniert */
  margin: 0 auto;      /* horizontal zentrieren */
}
@media (max-width: 767px) {
  #stand {
   
    transform: translateY(-12%); /* يرفع العنصر أعلى */
  }
}


</style>
