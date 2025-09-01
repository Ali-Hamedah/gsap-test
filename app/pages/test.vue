<template>
  <div class="relative h-[300vh] overflow-x-hidden">
    <!-- المحتوى الأول -->
    <div v-if="!showNewPage">
      <!-- الدائرة مع المحتوى بداخلها -->
      <div 
        ref="circle"
        class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5 bg-blue-500 rounded-full w-64 h-64 flex items-center justify-center"
      >
        <!-- المحتوى الجديد داخل الدائرة -->
        <div 
          ref="newContent"
          class="text-center z-20 p-4"
        >
          <div class="text-center text-white">
            <h2 class="text-2xl font-bold mb-3">محتوى جديد!</h2>
            <p class="text-sm mb-3">تم الكشف عن المحتوى الجديد بنجاح</p>
            <div class="flex flex-col gap-2">
              <button class="bg-white text-blue-500 px-4 py-2 rounded text-xs font-bold hover:bg-gray-100 transition-colors">
                زر 1
              </button>
              <button class="bg-transparent border border-white text-white px-4 py-2 rounded text-xs font-bold hover:bg-white hover:text-blue-500 transition-colors">
                زر 2
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- المحتوى تحت الدائرة -->
      <div class="fixed top-2/3 left-1/2 -translate-x-1/2 text-center z-1">
        <h1 class="text-4xl font-bold text-gray-800">مرحبا بالموقع!</h1>
        <p class="text-lg mt-4 text-gray-600">المحتوى يظهر خلف العلبة عند التمرير.</p>
      </div>

      <!-- العلبة -->
      <img
        ref="box"
        src="/images/skruf.avif"
        class="fixed top-1/3 left-1/2 -translate-x-1/2 z-10 w-80"
      />
    </div>

    <!-- الصفحة الجديدة المتضمنة -->
    <div 
      v-if="showNewPage" 
      ref="newPage"
      class="fixed inset-0 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center z-30 "
    >
      <div class="text-center text-white p-8">
        <h1 class="text-6xl font-bold mb-8">الصفحة الجديدة!</h1>
        <p class="text-xl mb-8">تم فتح المحتوى الجديد بنجاح داخل نفس الصفحة</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div class="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <h3 class="text-2xl font-bold mb-4">قسم 1</h3>
            <p class="text-sm">محتوى القسم الأول</p>
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <h3 class="text-2xl font-bold mb-4">قسم 2</h3>
            <p class="text-sm">محتوى القسم الثاني</p>
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <h3 class="text-2xl font-bold mb-4">قسم 3</h3>
            <p class="text-sm">محتوى القسم الثالث</p>
          </div>
        </div>

        <button 
          @click="goBack"
          class="mt-8 bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
        >
          العودة للخلف
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const { $gsap } = useNuxtApp()

const box = ref(null)
const circle = ref(null)
const newContent = ref(null)
const newPage = ref(null)
const showNewPage = ref(false)

// وظيفة العودة للخلف
const goBack = () => {
  $gsap.to(newPage.value, {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    onComplete: () => {
      showNewPage.value = false
        // 🔑 Reset timeline لما يرجع
      $gsap.to(circle.value, { width: "16rem", height: "16rem", duration: 0.5 }) // ترجع لحجم w-64 h-64
      $gsap.to(box.value, { opacity: 1, x: 0, rotation: 0, duration: 0.5 }) // ترجع العلبة لمكانها
    }
  })
}

onMounted(() => {
  $gsap.from(box.value, { opacity: 0, y: -100, duration: 1 })

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: '.relative',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate(self) {
        // Neue Seite anzeigen bei 98% Fortschritt
    
        if (self.progress >= 0.4) {
            showNewPage.value  = true
        }else
          showNewPage.value  = false
      }
    }
  })

tl.to(box.value, { x: -1000, rotation: -360, duration: 0.3, ease: "power3.out" })
    .to(circle.value, { width: '200vmax', height: '200vmax', duration: 1, ease: "power2.out" }, 0)
    .to(newContent.value, { opacity: 1, duration: 0.2 }, 0.1)
    .to(box.value, { opacity: 0, duration: 0.3, ease: "power2.out" }, 0.3)
})

</script>

<style scoped>
.relative {
  direction: rtl;
}

/* إزالة transition لأن GSAP يتولى الأمر */
div[ref="circle"] {
  transform-origin: center center;
}
</style>