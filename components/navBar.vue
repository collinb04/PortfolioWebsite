<template>
    <nav class="sticky top-8 z-50 w-2/3 mx-auto flex justify-center">
        <div class="relative flex items-center justify-between w-full backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl px-6 py-3 shadow-2xl">
            <!-- Left: Logo -->
            <button 
                class="flex flex-row text-2xl font-semibold text-white transition-all duration-300 hover:scale-105"
                @click="scrollToSection('top')"
            >
                <img 
                    src="/public/CB-Letter-Logo-Design-Graphics-15220415-1-1-580x387.png" 
                    alt="Logo"
                    class="w-12 h-12 object-cover rounded-full mr-3 bg-blue-600 p-1 shadow-lg" 
                />
                <span class="hidden sm:block self-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Portfolio
                </span>
            </button>

            <!-- Center: Nav Items -->
            <nav class="hidden xl:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-2">
                <template v-for="item in navItems" :key="item.text">
                    <button 
                        @click="handleNavClick(item.id)" 
                        class="relative px-4 py-2 text-white font-medium transition-all duration-300 rounded-full hover:bg-white/20 hover:backdrop-blur-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 group"
                    >
                        {{ item.text }}
                        <div class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </button>
                </template>
            </nav>

            <!-- Right: CTA and Mobile Toggle -->
            <div class="flex items-center space-x-4">

                <!-- Mobile Toggle -->
                <button 
                    @click="toggleMobile" 
                    class="xl:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 transition-all duration-300 hover:bg-white/10 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    :class="{ 'rotate-90': mobileOpen }" 
                    :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
                    :aria-expanded="mobileOpen"
                >
                    <span 
                        class="block w-6 h-0.5 bg-white transition-all duration-300 rounded-full"
                        :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"
                    ></span>
                    <span 
                        class="block w-6 h-0.5 bg-white transition-all duration-300 rounded-full"
                        :class="mobileOpen ? 'opacity-0' : ''"
                    ></span>
                    <span 
                        class="block w-6 h-0.5 bg-white transition-all duration-300 rounded-full"
                        :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"
                    ></span>
                </button>
            </div>
        </div>

        <!-- Mobile Dropdown -->
        <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 transform -translate-y-4 scale-95"
            enter-to-class="opacity-100 transform translate-y-0 scale-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 transform translate-y-0 scale-100"
            leave-to-class="opacity-0 transform -translate-y-4 scale-95"
        >
            <div 
                v-if="mobileOpen" 
                class="xl:hidden absolute top-full left-0 right-0 mt-4 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
            >
                <div class="p-4 space-y-2">
                    <template v-for="item in navItems" :key="item.text">
                        <button 
                            @click="() => { handleNavClick(item.id); mobileOpen = false }"
                            class="w-full text-left px-4 py-3 text-white font-medium rounded-xl hover:bg-white/20 hover:backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                        >
                            {{ item.text }}
                        </button>
                    </template>
                </div>
            </div>
        </Transition>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();
const isHome = computed(() => route.path === '/');

const navItems = [
    { text: 'About', id: 'about' },
    { text: 'Skills', id: 'skills' },
    { text: 'Projects', id: 'projects' },
    { text: 'Contact', id: 'contact' },
]

const scrollToSection = async (id) => {
  if (id === 'top') {
    window.scrollTo({ top: 4, behavior: 'smooth' })
    return
  }

  if (isHome.value) {
    const el = document.getElementById(id)
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80 // navbar offset
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
  } else {
    await router.push('/')
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        const offset = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top: offset, behavior: 'smooth' })
      }
    }, 300)
  }

  mobileOpen.value = false
}


const handleNavClick = (id) => {
    scrollToSection(id)
}

const isScrolled = ref(false)
const mobileOpen = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

const toggleMobile = () => {
    mobileOpen.value = !mobileOpen.value
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>